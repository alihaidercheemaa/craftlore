import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCClientError } from "@trpc/client";




export const CraftRouter = createTRPCRouter({


    getAllCategoriesAndSubCategories: publicProcedure.query(async ({ ctx }) => {
        try {

            const data = await ctx.db.category.findMany({
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
    })
})