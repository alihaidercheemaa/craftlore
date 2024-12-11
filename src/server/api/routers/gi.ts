import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const GIRouter = createTRPCRouter({

    createGIReport: publicProcedure
        .input(z.object({
            fullName: z.string(),
            email: z.string(),
            report : z.string(),
            productCode : z.string()
        }))
        .mutation(async ({ input, ctx }) => {
            try {    
                await ctx.db.gIReport.create({
                    data: {
                        fullName: input.fullName,
                        email: input.email,
                        report: input.report,
                        productCode: input.productCode
                    }
                })
            } catch (error) {
                if (error instanceof TRPCError) {
                    console.error(error.message);
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
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


});
