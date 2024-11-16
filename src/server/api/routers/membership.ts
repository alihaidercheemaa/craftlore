import { TRPCClientError } from "@trpc/client";
import { TRPCError } from "@trpc/server";
import { hash } from "bcrypt";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "~/server/api/trpc";


export const MembershipRouter = createTRPCRouter({

    addBuyerMembership: publicProcedure
        .input(z.object({
            fullName: z.string(),
            email: z.string(),
            phone: z.string(),
            password: z.string(),
            buyerType: z.string(),
            businessName: z.string(),
            businessType: z.string(),
            taxId: z.string(),
            country: z.string(),
            website: z.string(),
            productInterest: z.array(z.string()),
            orderVolume: z.string(),
            authentication: z.string(),
            traceability: z.string(),
            sustainability: z.array(z.string()),
            source: z.string(),
            newsletter: z.boolean(),
            specialRequirements: z.string(),
            terms: z.boolean(),
        }))
        .mutation(async ({ ctx, input }) => {
            try {

                const encryptedPassword = await hash(input.password, 10)

                const user = await ctx.db.user.create({
                    data: {
                        fullName: input.fullName,
                        email: input.email,
                        password: encryptedPassword,
                        phone: input.phone,
                        registerType: 'BuyerMembership'
                    }
                })

                await ctx.db.buyerMembership.create({
                    data: {
                        businessType: input.businessType,
                        businessName: input.businessName,
                        buyerType: input.buyerType,
                        taxId: input.taxId,
                        country: input.country,
                        website: input.website,
                        productInterest: input.productInterest,
                        orderVolume: input.orderVolume,
                        authentication: input.authentication,
                        traceability: input.traceability,
                        sustainability: input.sustainability,
                        source: input.source,
                        newsletter: input.newsletter,
                        specialRequirements: input.specialRequirements,
                        terms: input.terms,
                        userId: user.userId,
                    }
                })

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

    addCorporateMembership: publicProcedure
        .input(
            z.object({
                // User Data
                fullName: z.string(),
                email: z.string(),
                phone: z.string(),
                password: z.string(),

                // Corporate Membership Data
                institutionName: z.string(),
                institutionType: z.string(),
                industry: z.string(),
                yearEstablished: z.number(),
                taxId: z.string(),
                primaryContact: z.string(),
                contactEmail: z.string(),
                contactPhone: z.string(),
                website: z.string(),
                headquartersAddress: z.string(),
                additionalLocations: z.string().optional(),
                partnershipType: z.string(),
                partnershipGoals: z.string(),
                targetProducts: z.array(z.string()),
                csrInterest: z.enum(["Yes", "No"]),
                csrInitiatives: z.string().optional(),
                sustainabilityPractices: z.string().optional(),
                businessLicense: z.string().optional(),
                proofOfTaxID: z.string().optional(),
                references: z.string().optional(),
                engagementChannels: z.string(),
                customerDemographic: z.string(),
                brandMission: z.string().optional(),
                specificRequirements: z.string().optional(),
                challenges: z.string().optional(),
                additionalComments: z.string().optional(),
                terms: z.boolean(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            try {
    
                const encryptedPassword = await hash(input.password, 10);

                const user = await ctx.db.user.create({
                    data: {
                        fullName: input.fullName,
                        email: input.email,
                        password: encryptedPassword,
                        phone: input.phone,
                        registerType: "CorpoMembership",
                    },
                });

                await ctx.db.corpoMembership.create({
                    data: {
                        institutionName: input.institutionName,
                        institutionType: input.institutionType,
                        industry: input.industry,
                        yearEstablished: input.yearEstablished,
                        taxId: input.taxId,
                        primaryContact: input.primaryContact,
                        contactEmail: input.contactEmail,
                        contactPhone: input.contactPhone,
                        website: input.website,
                        headquartersAddress: input.headquartersAddress,
                        additionalLocations: input.additionalLocations ?? "none",
                        partnershipType: input.partnershipType,
                        partnershipGoals: input.partnershipGoals,
                        targetProducts: input.targetProducts,
                        csrInterest: input.csrInterest,
                        csrInitiatives: input.csrInitiatives ?? "none",
                        sustainabilityPractices: input.sustainabilityPractices ?? "none",
                        businessLicense: input.businessLicense ?? "none",
                        proofOfTaxID: input.proofOfTaxID ?? "none",
                        references: input.references ?? "none",
                        engagementChannels: input.engagementChannels,
                        customerDemographic: input.customerDemographic,
                        brandMission: input.brandMission ?? "none",
                        specificRequirements: input.specificRequirements ?? "none",
                        challenges: input.challenges ?? "none",
                        additionalComments: input.additionalComments ?? "none",
                        terms: input.terms,
                        userId: user.userId,
                    },
                });

                return { message: "Corporate Membership created successfully." };
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

});
