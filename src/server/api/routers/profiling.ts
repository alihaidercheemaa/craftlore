import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCClientError } from "@trpc/client";
import { z } from "zod";


export const CraftRouter = createTRPCRouter({

    getAllCategoriesAndSubCategories: publicProcedure.query(async ({ ctx }) => {
        try {
            const data = await ctx.db.category.findMany({
                orderBy: {
                    rank: 'asc'
                },
                include: {
                    SubCategory: true
                }
            })
            return data
        } catch (error) {
            if (error instanceof TRPCClientError) {
                console.error(error.message)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: error.message
                })
            }
            console.error(error)
            throw new TRPCError({
                code: 'INTERNAL_SERVER_ERROR',
                message: 'Something went wrong'
            })
        }
    }),

    getAllSections: publicProcedure
        .input(z.object({ subcategoryId: z.string() }))
        .query(async ({ ctx, input }) => {
            try {
                const data = await ctx.db.craftSection.findMany({
                    where: {
                        subCategoryId: input.subcategoryId
                    },
                    orderBy: {
                        rank: 'asc'
                    }
                })
                return data
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: error.message
                    })
                }
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        }),

    getDataBySectionId: publicProcedure
        .input(z.object({ sectionId: z.string() }))
        .query(async ({ ctx, input }) => {
            try {
                const data = await ctx.db.craftSubSection.findMany({
                    where: {
                        sectionId: input.sectionId
                    },
                    orderBy: {
                        rank: 'asc'
                    },
                    include: {
                        CraftContent: true
                    }
                })
                return data
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: error.message
                    })
                }
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        }),

    getQuestionBySectionId: publicProcedure
        .input(z.object({ sectionId: z.string() }))
        .query(async ({ ctx, input }) => {
            try {
                return await ctx.db.craftQuiz.findMany({
                    where: {
                        sectionId: input.sectionId
                    },
                    select : {
                        quizId:true,
                        question:true,
                        option1:true,
                        option2:true,
                        option3:true,
                        option4:true
                    }
                });
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: error.message
                    })
                }
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        }),

    submitQuizAnswers: publicProcedure
        .input(z.object({
            answers: z.array(z.object({
                quizId: z.string(),
                selectedOption: z.string()
            }))
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                const correctAnswers = await ctx.db.craftQuiz.findMany({
                    where: {
                        quizId: { in: input.answers.map(a => a.quizId) }
                    },
                    select: {
                        quizId: true,
                        answer: true
                    }
                });

                let correctCount = 0;
                input.answers.forEach(userAnswer => {
                    const correct = correctAnswers.find(a => a.quizId === userAnswer.quizId);
                    if (correct && correct.answer === userAnswer.selectedOption) {
                        correctCount++;
                    }
                });

                const score = (correctCount / input.answers.length) * 100;

                if (score >= 80) {
                    return {
                        success: true,
                        message: `Congratulations! You scored ${score}%. Your discount code is QUIZ2024`,
                        score,
                    };
                } else {
                    return {
                        success: false,
                        message: `You scored ${score}%. You need 80% or higher to get the discount code. Try again!`,
                        score
                    };
                }
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: error.message
                    })
                }
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        }),

    validateDiscount: publicProcedure
        .input(z.object({ email: z.string().email() }))
        .mutation(async ({ ctx, input }) => {

            const existingDiscount = await ctx.db.craftDiscount.findUnique({
                where: { email: input.email },
            });

            if (existingDiscount) {
                const updatedDiscount = await ctx.db.craftDiscount.update({
                    where: { email: input.email },
                    data: {
                        discountPercentage: existingDiscount.discountPercentage + 3,
                        code: `CRAFT${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
                    },
                });

                return {
                    success: true,
                    totalDiscount: updatedDiscount.discountPercentage,
                    code: updatedDiscount.code,
                };
            } else {
                // Create new discount entry
                const newDiscount = await ctx.db.craftDiscount.create({
                    data: {
                        email: input.email,
                        discountPercentage: 3,
                        code: `CRAFT${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
                    },
                });

                return {
                    success: true,
                    totalDiscount: newDiscount.discountPercentage,
                    code: newDiscount.code,
                };
            }
        })
})