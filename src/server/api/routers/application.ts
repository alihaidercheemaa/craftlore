import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import {createTRPCRouter,protectedProcedure,publicProcedure} from "~/server/api/trpc";

export const ApplicationRouter = createTRPCRouter({

    addApplication: publicProcedure
        .input(z.object({
            fullName: z.string(),
            email: z.string().email(),
            job: z.string(),
            jobCode: z.string(),
            resume: z.string(),
            coverLetter: z.string()
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                await ctx.db.appliedJob.create({
                    data: {
                        fullName: input.fullName,
                        email: input.email,
                        job: input.job,
                        jobCode: input.jobCode,
                        resume: input.resume,
                        coverLetter: input.coverLetter,
                    }
                })
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
