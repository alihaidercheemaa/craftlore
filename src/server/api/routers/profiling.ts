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
                    orderBy:{
                        rank:'asc'
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
                    orderBy:{
                        rank:'asc'
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

})