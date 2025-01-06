import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";




export const CategoryRouter = createTRPCRouter({

    getCategories: publicProcedure
        .query(async ({ ctx }) => {
            try {
                const data: CategoryProps[] = await ctx.db.category.findMany()
                return data
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'database connection timeout'
                    })
                }
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        }),

    getSubCategories: publicProcedure
        .input(z.object({ categoryId: z.string() }))
        .query(async ({ ctx, input }) => {
            try {
                return await ctx.db.subCategory.findMany({
                    where: { categoryId: input.categoryId }
                })
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'database connection timeout'
                    })
                }
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        }),

    getSubCategoryById: publicProcedure
        .input(z.object({ subcategoryId: z.string() }))
        .query(async ({ ctx, input }) => {
            try {
                return await ctx.db.subCategory.findUnique({
                    where: { subcategoryId: input.subcategoryId }
                })
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'database connection timeout'
                    })
                }
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        }),

    getMaterialBySubCategory: publicProcedure
        .input(z.object({ subcategoryId: z.string() }))
        .query(async ({ ctx, input }) => {
            try {
                const data = await ctx.db.material.findMany({
                    where: { subcategoryId: input.subcategoryId }
                })
                return data
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'database connection timeout'
                    })
                }
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        }),

    getSubByCatId: publicProcedure
        .input(z.object({ categoryId: z.string() }))
        .query(async ({ ctx, input }) => {
            try {
                const data = await ctx.db.subCategory.findMany({
                    where: { categoryId: input.categoryId }
                })
                return data
            } catch (error) {
                if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'database connection timeout'
                    })
                }
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        }),


    getAllMaterials: publicProcedure
        .input(z.object({ subId: z.string() }))
        .query(async ({ ctx, input }) => {
            try {
                const materials: MaterialProps[] = await ctx.db.material.findMany({
                    where: {
                        subcategoryId: input.subId
                    }
                });
                return materials
            } catch (error) {
                if (error instanceof TRPCError) {
                    console.error(error.message);
                    throw new TRPCError({
                        code: error.code,
                        message: error.message,
                    });
                }
                else if (error instanceof TRPCClientError) {
                    console.error(error.message)
                    throw new TRPCError({
                        code: 'INTERNAL_SERVER_ERROR',
                        message: 'database connection timeout'
                    })
                }
                console.error(error);
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Something went wrong.",
                });
            }
        }),


})