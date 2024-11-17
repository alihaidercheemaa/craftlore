import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";
import { BusinessLevel, InstitutionType, MarketType, SkillLevel } from "@prisma/client";
import { TRPCError } from "@trpc/server";


export const RegistrationRouter = createTRPCRouter({

    registerListing: publicProcedure
        .input(
            z.object({
                user: z.object({
                    fullName: z.string(),
                    phone: z.string(),
                    email: z.string(),
                    address: z.string(),
                    password: z.string(),
                    registerType: z.enum(["Artisan", "Business", "Institution"]),
                }),
                listingCriteria: z.object({
                    sourceOfMaterial: z.string().optional(),
                    craftingProcess: z.string().optional(),
                    sustainablePractices: z.boolean().optional(),
                    sustainabledescription: z.string().optional(),
                    fairWage: z.boolean().optional(),
                    genderSuport: z.boolean().optional(),
                    womenPercentage: z.number().optional(),
                    workplaceuphold: z.boolean().optional(),
                    workplaceDescription: z.string().optional(),
                    childLabour: z.boolean().optional(),
                    fairTrade: z.boolean().optional(),
                    fairtradeDoc: z.array(z.string()).optional(),
                    giHold: z.boolean().optional(),
                    giNumber: z.string().optional(),
                    blockChain: z.boolean().optional(),
                    blockChainDoc: z.array(z.string()).optional(),
                    ethics: z.boolean().optional(),
                    qualityReview: z.boolean().optional(),
                    profilePermission: z.boolean().optional(),
                    complianceAcknowledgement: z.boolean().optional(),
                }),
                artisan: z
                    .object({
                        craftSpecialty: z.string().optional(),
                        craftSkill: z.string().optional(),
                        craftExperience: z.number().optional(),
                        craftAward: z.string().optional(),
                        market: z.string().optional(),
                        documents: z.array(z.string()).optional(),
                    })
                    .optional(),
                business: z
                    .object({
                        businessName: z.string().optional(),
                        businessEmail: z.string().optional(),
                        businessAddress: z.string().optional(),
                        businessType: z.string().optional(),
                        businessSold: z.string().optional(),
                        businessEmployee: z.number().optional(),
                        documents: z.array(z.string()).optional(),
                    })
                    .optional(),
                institute: z
                    .object({
                        instituteName: z.string().optional(),
                        instituteEmail: z.string().optional(),
                        instituteAddress: z.string().optional(),
                        instituteRep: z.string().optional(),
                        repPost: z.string().optional(),
                        instituteType: z.string().optional(),
                        instituteMission: z.string().optional(),
                        documents: z.array(z.string()).optional(),
                    })
                    .optional(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            try {
                const { user, listingCriteria, artisan, business, institute } = input;

                // Create User
                const newUser = await ctx.db.user.create({
                    data: {
                        fullName: user.fullName,
                        phone: user.phone,
                        email: user.email,
                        address: user.address,
                        password: user.password,
                        registerType: user.registerType,
                    },
                });

                // Create Listing Criteria
                const newCriteria = await ctx.db.lisitingCritera.create({
                    data: {
                        sourceOfMaterial: listingCriteria.sourceOfMaterial ?? "none",
                        craftingProcess: listingCriteria.craftingProcess ?? "none",
                        sustainablePractices: listingCriteria.sustainablePractices ?? false,
                        sustainabledescription: listingCriteria.sustainabledescription ?? "none",
                        fairWage: listingCriteria.fairWage ?? false,
                        genderSuport: listingCriteria.genderSuport ?? false,
                        womenPercentage: listingCriteria.womenPercentage ?? 0,
                        workplaceuphold: listingCriteria.workplaceuphold ?? false,
                        workplaceDescription: listingCriteria.workplaceDescription ?? "none",
                        childLabour: listingCriteria.childLabour ?? false,
                        fairTrade: listingCriteria.fairTrade ?? false,
                        fairtradeDoc: listingCriteria.fairtradeDoc ?? [],
                        giHold: listingCriteria.giHold ?? false,
                        giNumber: listingCriteria.giNumber ?? "none",
                        blockChain: listingCriteria.blockChain ?? false,
                        blockChainDoc: listingCriteria.blockChainDoc ?? [],
                        ethics: listingCriteria.ethics ?? false,
                        qualityReview: listingCriteria.qualityReview ?? false,
                        profilePermission: listingCriteria.profilePermission ?? false,
                        complianceAcknowledgement: listingCriteria.complianceAcknowledgement ?? false,
                    },
                });

                // Handle Registration Types
                if (user.registerType === "Artisan" && artisan) {
                    await ctx.db.artisan.create({
                        data: {
                            userId: newUser.userId,
                            craftSpecialty: artisan.craftSpecialty ?? "none",
                            craftSkill: (Object.values(SkillLevel) as string[]).includes(artisan.craftSkill ?? "")
                                ? (artisan.craftSkill as SkillLevel)
                                : SkillLevel.None,
                            craftExperience: artisan.craftExperience ?? 0,
                            craftAward: artisan.craftAward ?? "none",
                            market: (Object.values(MarketType) as string[]).includes(artisan.market ?? "")
                                ? (artisan.market as MarketType)
                                : MarketType.None,
                            documents: artisan.documents ?? [],
                            listingCriteria: newCriteria.criteraId,
                        },
                    });
                }

                if (user.registerType === "Business" && business) {
                    await ctx.db.business.create({
                        data: {
                            userId: newUser.userId,
                            businessName: business.businessName ?? "none",
                            businessEmail: business.businessEmail ?? "none",
                            businessAddress: business.businessAddress ?? "none",
                            businessType: (Object.values(BusinessLevel) as string[]).includes(business.businessType ?? "")
                                ? (business.businessType as BusinessLevel)
                                : BusinessLevel.None,
                            businessSold: business.businessSold ?? "none",
                            businessEmployee: business.businessEmployee ?? 0,
                            documents: business.documents ?? [],
                            listingCriteria: newCriteria.criteraId,
                        },
                    });
                }

                if (user.registerType === "Institution" && institute) {
                    await ctx.db.institute.create({
                        data: {
                            userId: newUser.userId,
                            instituteName: institute.instituteName ?? "none",
                            instituteEmail: institute.instituteEmail ?? "none",
                            instituteAddress: institute.instituteAddress ?? "none",
                            instituteRep: institute.instituteRep ?? "none",
                            repDes: institute.repPost ?? "none",
                            instituteType: (Object.values(InstitutionType) as string[]).includes(institute.instituteType ?? "")
                                ? (institute.instituteType as InstitutionType)
                                : InstitutionType.None,
                            instituteMission: institute.instituteMission ?? "none",
                            documents: institute.documents ?? [],
                            listingCriteria: newCriteria.criteraId,
                        },
                    });
                }
            } catch (error) {
                if (error instanceof TRPCError) {
                    console.error(error.message);
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: error.message,
                    });
                }

                console.error(error);
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Something went wrong.",
                });
            }

        }),

    getArtisans: publicProcedure
        .query(({ ctx }) => {
            try {

                const artisans = ctx.db.artisan.findMany()
                return artisans
            } catch (error) {
                if (error instanceof TRPCError) {
                    console.error(error.message);
                    throw new TRPCError({
                        code: "INTERNAL_SERVER_ERROR",
                        message: error.message,
                    });
                }

                console.error(error);
                throw new TRPCError({
                    code: "INTERNAL_SERVER_ERROR",
                    message: "Something went wrong.",
                });
            }
        })
});
