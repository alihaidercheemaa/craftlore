import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const CostEstimation = createTRPCRouter({

    carbonFootPrint: publicProcedure
        .input(z.object({
            category: z.string(),
            subcategory: z.string(),
            rawMaterial: z.string(),
            package: z.string(),
            transport: z.string(),
            processing: z.string().optional(),
            production: z.string().optional(),
            crafting: z.string().optional(),
            installation: z.string().optional(),
            finishing: z.string().optional(),
            cooking: z.string().optional(),
            preparation: z.string().optional(),
            painting: z.string().optional(),
            embroidery: z.string().optional(),
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                const sections = await ctx.db.section.findMany({
                    where: { subcategoryId: input.subcategory },
                    select: {
                        sectionId: true
                    }
                })

                const carbonValues = await ctx.db.value.findMany({
                    where: {
                        materialId: input.rawMaterial,
                        sectionId: { in: sections.map((section) => section.sectionId) },
                        name: {
                            in: [input.package ?? 'none',
                            input.transport ?? 'none',
                            input.processing ?? 'none',
                            input.production ?? 'none',
                            input.crafting ?? 'none',
                            input.installation ?? 'none',
                            input.finishing ?? 'none',
                            input.cooking ?? 'none',
                            input.preparation ?? 'none',
                            input.painting ?? 'none',
                            input.embroidery ?? 'none']
                        }
                    },
                    select : {
                        value:true
                    }
                })

                let totalLower = 0;
                let totalUpper = 0;

                for (const carbon of carbonValues) {
                     const [lower,upper] = carbon.value.split('-')
                     totalLower += parseFloat(lower ?? '0.0')
                     totalUpper += parseFloat(upper ?? '0.0')
                }
                return { totalLower, totalUpper }

            } catch (error) {

                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        })
})