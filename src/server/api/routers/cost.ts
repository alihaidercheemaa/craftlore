import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { TRPCError } from "@trpc/server";

export const CostEstimation = createTRPCRouter({

    carbonFootPrint: publicProcedure
        .input(z.object({
            category: z.string(),
            subcategory: z.string(),
            rawMaterial: z.string(),
            packaging: z.string(),
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
            quality: z.string().optional(),
            productionProcess: z.string().optional(),
            productCertifications: z.string().optional(),
            plyType: z.string().optional(),
            typeOfWeaving: z.string().optional(),
            designPatternTypes: z.string().optional(),
            dyeTypes: z.string().optional(),
            finishingTechniques: z.string().optional(),
            productLineSize: z.string().optional(),
            colorShades: z.string().optional(),
            embellishments: z.string().optional(),
            certifications: z.string().optional(),
            materialGrading: z.string().optional(),
            productTypesSizes: z.string().optional(),
            knotPerInch: z.string().optional(),
            dimensions: z.string().optional(),
            carvingTechniques: z.string().optional(),
            scaleOfCarving: z.string().optional(),
            finishOptions: z.string().optional(),
            patternTypes: z.string().optional(),
            fabricAndMaterial: z.string().optional(),
            cookingProcess: z.string().optional(),
            paintingAndLacquering: z.string().optional(),
            productionMethod: z.string().optional(),
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                const sections = await ctx.db.carbonSection.findMany({
                    where: { subCategoryId: input.subcategory },
                    select: {
                        carbonsectionId: true
                    }
                })

                const carbonValues = await ctx.db.carbonValue.findMany({
                    where: {
                        materialId: input.rawMaterial,
                        carbonsectionId: { in: sections.map((section) => section.carbonsectionId) },
                        name: {
                            in: [input.packaging ?? 'none',
                            input.transport ?? 'none',
                            input.processing ?? 'none',
                            input.production ?? 'none',
                            input.crafting ?? 'none',
                            input.installation ?? 'none',
                            input.finishing ?? 'none',
                            input.cooking ?? 'none',
                            input.preparation ?? 'none',
                            input.painting ?? 'none',
                            input.embroidery ?? 'none',
                            input.quality ?? 'none',
                            input.productionProcess ?? 'none',
                            input.productCertifications ?? 'none',
                            input.plyType ?? 'none',
                            input.typeOfWeaving ?? 'none',
                            input.designPatternTypes ?? 'none',
                            input.dyeTypes ?? 'none',
                            input.finishingTechniques ?? 'none',
                            input.productLineSize ?? 'none',
                            input.colorShades ?? 'none',
                            input.embellishments ?? 'none',
                            input.certifications ?? 'none',
                            input.materialGrading ?? 'none',
                            input.productTypesSizes ?? 'none',
                            input.knotPerInch ?? 'none',
                            input.dimensions ?? 'none',
                            input.carvingTechniques ?? 'none',
                            input.scaleOfCarving ?? 'none',
                            input.finishOptions ?? 'none',
                            input.patternTypes ?? 'none',
                            input.fabricAndMaterial ?? 'none',
                            input.cookingProcess ?? 'none',
                            input.paintingAndLacquering ?? 'none',
                            input.productionMethod ?? 'none']
                        }
                    },
                    select: {
                        value: true
                    }
                })

                let totalLower = 0;
                let totalUpper = 0;

                for (const carbon of carbonValues) {
                    const [lower, upper] = carbon.value.split('-')
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
        }),

    costEstimation: publicProcedure
        .input(z.object({
            category: z.string(),
            subcategory: z.string(),
            rawMaterial: z.string(),
            transport: z.string(),
            weight: z.number(),
            weightType: z.string(),
            purchaseLocation: z.string(),
            shippingDistance: z.number(),
            warehouse: z.string(),
            shippingMethod: z.string(),
            efficiency: z.string(),
            // Additional optional fields
            packaging: z.string().optional(),
            weavingType: z.string().optional(),
            processing: z.string().optional(),
            production: z.string().optional(),
            crafting: z.string().optional(),
            installation: z.string().optional(),
            finishing: z.string().optional(),
            cooking: z.string().optional(),
            preparation: z.string().optional(),
            painting: z.string().optional(),
            embroidery: z.string().optional(),
            quality: z.string().optional(),
            productionMethod: z.string().optional(),
            productCertifications: z.string().optional(),
            plyType: z.string().optional(),
            typeOfWeaving: z.string().optional(),
            designPatternTypes: z.string().optional(),
            dyeingType: z.string().optional(),
            productLine: z.string().optional(),
            dyeTypes: z.string().optional(),
            finishingTechniques: z.string().optional(),
            productLineSize: z.string().optional(),
            colorShades: z.string().optional(),
            embellishments: z.string().optional(),
            certifications: z.string().optional(),
            materialGrading: z.string().optional(),
            productTypesSizes: z.string().optional(),
            knotPerInch: z.string().optional(),
            dimensions: z.string().optional(),
            carvingTechniques: z.string().optional(),
            scaleOfCarving: z.string().optional(),
            finishOptions: z.string().optional(),
            patternTypes: z.string().optional(),
            fabricAndMaterial: z.string().optional(),
            cookingProcess: z.string().optional(),
            paintingAndLacquering: z.string().optional(),
            productTypesAndSizes: z.string().optional(),
            productionProcess: z.string().optional(),
            certificate: z.string().optional(),
            design: z.string().optional(),
            // New fields from the mutate call
            size: z.string().optional(),
            jewelryType: z.string().optional(),
            productType: z.string().optional(),
            carvingDetails: z.string().optional(),
        }))
        .mutation(async ({ ctx, input }) => {
            try {
                const sections = await ctx.db.priceSection.findMany({
                    where: { subCategoryId: input.subcategory },
                    select: {
                        priceSectionId: true
                    }
                })

                const priceValues = await ctx.db.priceValue.findMany({
                    where: {
                        materialId: input.rawMaterial,
                        priceSectionId: { in: sections.map((section) => section.priceSectionId) },
                        name: {
                            in: [
                                // Existing fields
                                input.packaging ?? 'none',
                                input.transport ?? 'none',
                                input.processing ?? 'none',
                                input.production ?? 'none',
                                input.crafting ?? 'none',
                                input.installation ?? 'none',
                                input.finishing ?? 'none',
                                input.cooking ?? 'none',
                                input.preparation ?? 'none',
                                input.painting ?? 'none',
                                input.embroidery ?? 'none',
                                input.quality ?? 'none',
                                input.productionProcess ?? 'none',
                                input.productCertifications ?? 'none',
                                input.plyType ?? 'none',
                                input.typeOfWeaving ?? 'none',
                                input.designPatternTypes ?? 'none',
                                input.dyeTypes ?? 'none',
                                input.finishingTechniques ?? 'none',
                                input.productLineSize ?? 'none',
                                input.colorShades ?? 'none',
                                input.embellishments ?? 'none',
                                input.certifications ?? 'none',
                                input.materialGrading ?? 'none',
                                input.productTypesSizes ?? 'none',
                                input.knotPerInch ?? 'none',
                                input.dimensions ?? 'none',
                                input.carvingTechniques ?? 'none',
                                input.scaleOfCarving ?? 'none',
                                input.finishOptions ?? 'none',
                                input.patternTypes ?? 'none',
                                input.fabricAndMaterial ?? 'none',
                                input.cookingProcess ?? 'none',
                                input.paintingAndLacquering ?? 'none',
                                input.productionMethod ?? 'none',
                                input.warehouse ?? 'none',
                                input.dyeingType ?? 'none',
                                input.productLine ?? 'none',
                                input.certificate ?? 'none',
                                input.design ?? 'none',
                                // New fields
                                input.size ?? 'none',
                                input.jewelryType ?? 'none',
                                input.productType ?? 'none',
                                input.carvingDetails ?? 'none',
                                input.productTypesAndSizes ?? 'none'
                            ]
                        }
                    },
                    select: {
                        value: true
                    }
                })

                let totalPrice = 0;

                for (const price of priceValues) {
                    totalPrice += price.value ?? 0
                }
                return { totalPrice }

            } catch (error) {
                console.error(error)
                throw new TRPCError({
                    code: 'INTERNAL_SERVER_ERROR',
                    message: 'Something went wrong'
                })
            }
        })

})