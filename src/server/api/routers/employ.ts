import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
import {createTRPCRouter,publicProcedure} from "~/server/api/trpc";

export const EmployRouter = createTRPCRouter({

    getEmployees: publicProcedure
        .query(async ({ ctx }) => {
            try {
               const data = await ctx.db.employ.findMany()

               return data
            } catch (error) {

                if(error instanceof TRPCClientError){
                    console.error(error.message)
                    throw new TRPCError({
                        code:'INTERNAL_SERVER_ERROR',
                        message:'database connection timeout'
                    })
                }

                console.error(error)
                throw new TRPCError({
                    code:'INTERNAL_SERVER_ERROR',
                    message:'Something went wrong'
                })
            }
        })
});
