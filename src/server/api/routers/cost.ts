import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";
import { carbonfootprint } from "~/constants/carbon";



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
        .mutation(async ({ input }) => {
            try {
                const findSubcategory = (subcategoryName: string): SubCategoryProps | undefined => {
                    for (const category of carbonfootprint) {
                        const subcategory = category.subcategory.find((sub) => sub.name === subcategoryName);
                        if (subcategory) return subcategory;
                    }
                    return undefined;
                };

                let totalLower = 0;
                let totalUpper = 0;

                const extractValues = (value: string) => {
                    const numStr = value.split(" ")
                    if (numStr[0]) {
                        const [lower, upper] = numStr[0].split('-')
                        totalLower += parseFloat(lower ?? '0.0')
                        totalUpper += parseFloat(upper ?? '0.0')
                    }
                }
                const subcategory = findSubcategory(input.subcategory);

                if (subcategory) {
                    // * calculate for raw material
                    subcategory?.RawMaterial.forEach((raw) => {
                        if (raw.name == input.rawMaterial) {
                            extractValues(raw.value)
                            return
                        }
                    })

                    const processField = (
                        categoryField: { name: string; values: ValueProps[] }[] | undefined,
                        inputField: string | undefined
                    ) => {
                        if (categoryField && inputField) {
                            categoryField.forEach((item) => {
                                if (item.name == inputField) {
                                    item.values.forEach((value) => {
                                        if (value.name === input.rawMaterial) {
                                            extractValues(value.value);
                                            return;
                                        }
                                    });
                                }

                            });
                        }
                    };


                    processField(subcategory.Packaging, input.package);
                    processField(subcategory.Transportation, input.transport);
                    processField(subcategory.Processing, input.processing);
                    processField(subcategory.ProductionMethod, input.production);
                    processField(subcategory.Crafting, input.crafting);
                    processField(subcategory.Installation, input.installation);
                    processField(subcategory.Finishing, input.finishing);
                    processField(subcategory.CookingProcess, input.cooking);
                    processField(subcategory.Preparation, input.preparation);
                    processField(subcategory.PaintingAndLacquering, input.painting);
                    processField(subcategory.Embroidery, input.embroidery);

                    return { totalLower, totalUpper }
                }
                console.error(`Sub category not found: ${input.subcategory}`)
                throw new TRPCError({
                    code: 'NOT_FOUND',
                    message: 'Sub category not found.'
                })

            } catch (error) {

                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        })
})