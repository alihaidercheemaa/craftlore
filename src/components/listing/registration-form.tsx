'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Button } from "~/components/ui/button"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "~/components/ui/card"
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group"
import { Label } from "~/components/ui/label"
import { CldUploadWidget, type CloudinaryUploadWidgetResults } from "next-cloudinary";
import { Textarea } from "~/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { Checkbox } from "~/components/ui/checkbox"
import { api } from "~/trpc/react"
import { useToast } from "~/hooks/use-toast"

const formSchema = z.object({

    // *  Common fields for all types
    fullName: z.string({ required_error: 'Field is required.' }).min(2, "Full Name is required."),
    phone: z.string({ required_error: 'Field is required.' }).min(10, "Valid contact number required."),
    email: z.string({ required_error: 'Field is required.' }).email("Invalid email."),
    address: z.string({ required_error: 'Field is required.' }),
    password: z.string({ required_error: 'Field is required.' }).min(8, 'Minimum 8 character length required.'),
    registerType: z.enum(["Artisan", "Business", "Institution"]),

    contribution: z.string()
        .min(50, "Minimum 50 words required")
        .max(100, "Maximum 100 words allowed").optional(),

    materialSource: z.enum(["local", "imported"], {
        required_error: "Please select material source"
    }).optional(),

    craftingProcess: z.enum(["traditional", "partial_machine", "full_machine"], {
        required_error: "Please select crafting process"
    }).optional(),

    sustainablePractices: z.object({
        implemented: z.boolean().optional(),
        description: z.string().optional()
    }),

    fairWage: z.boolean({ required_error: "Fair wage confirmation is required" }).optional(),

    genderDynamics: z.object({
        supportsEquality: z.boolean().optional(),
        femalePercentage: z.number().min(0).max(100).optional()
    }).optional(),

    workplaceStandards: z.object({
        upholds: z.boolean().optional(),
        description: z.string().optional()
    }),

    childLaborPolicy: z.boolean({ required_error: "Child labor policy confirmation is required" }).optional(),

    fairTradeCertification: z.object({
        certified: z.boolean().optional(),
        document: z.string().optional()
    }),

    giCertification: z.object({
        holds: z.boolean().optional(),
        certificationNumber: z.string().optional(),
        certificationDocument: z.string().optional()
    }),

    triditionalTraining: z.boolean({ required_error: "Child labor policy confirmation is required" }).optional(),
    blockchainCertification: z.object({
        verified: z.boolean().optional(),
        provider: z.string().optional(),
        certificationDocument: z.string().optional()
    }),

    commitmentToEthics: z.boolean({ required_error: "Commitment to ethics is required" }).optional(),

    // * Review and Compliance
    qualityReviewConsent: z.string({ required_error: "Quality review consent is required" }).optional(),
    profileDisplayConsent: z.string({ required_error: "Profile display consent is required" }).optional(),
    complianceAcknowledgement: z.string({ required_error: "Compliance acknowledgement is required" }).optional(),

    // *  Artisan-specific fields
    craftSpecialty: z.string().optional(),
    craftCatalog: z.string().optional(),
    craftSkill: z.enum(["Expert", "Advanced", "Beginner"]).optional(),
    craftExperience: z.number().optional(),
    craftAward: z.string().optional(),

    market: z.enum(["Local", "National", "International"]).optional(),

    // * Business-specific fields
    businessName: z.string().optional(),
    businessEmail: z.string().email("Invalid email.").optional(),
    businessAddress: z.string().optional(),
    businessLicense: z.string().optional(),
    businessType: z.enum(["Large_Enterprice", "Mid_sized_Business", "Small_Business", "Startup"]).optional(),
    businessSold: z.string().optional(),
    businessEmployee: z.number().optional(),
    businessYear: z.number().optional(),
    businessLink: z.string().optional(),

    // * Institution-specific fields
    instituteName: z.string().optional(),
    instituteRep: z.string().optional(),
    repPost: z.string().optional(),
    instituteEmail: z.string().email("Invalid email.").optional(),
    instituteType: z.enum(["Governance", "NGO", "Training Body", "Educational Body"]).optional(),
    instituteAddress: z.string().optional(),
    instituteMission: z.string().optional(),
    instituteLink: z.string().optional(),


}).superRefine((data, ctx) => {
    // *  Validation for Artisan type
    if (data.registerType === "Artisan") {
        if (!data.craftSpecialty) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Craft specialty is required for Artisan registration",
                path: ["craftSpecialty"]
            });
        }
        if (!data.craftSkill) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Craft skill is required for Artisan registration",
                path: ["craftSkill"]
            });
        }
        if (!data.craftExperience) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Craft experience is required for Artisan registration",
                path: ["craftExperience"]
            });
        }
        if (!data.market) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Market is required for Artisan registration",
                path: ["market"]
            });
        }
    }

    // * Validation for Business type
    if (data.registerType === "Business") {
        if (!data.businessName) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Business name is required for Business registration",
                path: ["businessName"]
            });
        }
        if (!data.businessEmail) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Business email is required for Business registration",
                path: ["businessEmail"]
            });
        }
        if (!data.businessAddress) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Business address is required for Business registration",
                path: ["businessAddress"]
            });
        }
        if (!data.businessType) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Business type is required for Business registration",
                path: ["businessType"]
            });
        }
        if (!data.businessSold) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Business sold is required for Business registration",
                path: ["businessSold"]
            });
        }
        if (!data.businessEmployee) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Business employee count is required for Business registration",
                path: ["businessEmployee"]
            });
        }
        if (!data.businessYear) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Business year count is required for Business registration",
                path: ["businessYear"]
            });
        }
        if (!data.businessLink) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Business website is required for Business registration",
                path: ["businessLink"]
            });
        }
    }

    // * Validation for Institution type
    if (data.registerType === "Institution") {
        if (!data.instituteName) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Institution name is required for Institution registration",
                path: ["instituteName"]
            });
        }
        if (!data.instituteEmail) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Institution email is required for Institution registration",
                path: ["instituteEmail"]
            });
        }
        if (!data.instituteType) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Institution type is required for Institution registration",
                path: ["instituteType"]
            });
        }
        if (!data.instituteAddress) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Institution address is required for Institution registration",
                path: ["instituteAddress"]
            });
        }
        if (!data.instituteMission) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Institution mission is required for Institution registration",
                path: ["instituteMission"]
            });
        }
        if (!data.instituteLink) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Institute link is required for Business registration",
                path: ["instituteLink"]
            });
        }
        if (!data.instituteRep) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Institute representative is required for Business registration",
                path: ["instituteRep"]
            });
        }
        if (!data.repPost) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Representative designation is required for Business registration",
                path: ["repPost"]
            });
        }
    }
});

type FormProps = z.infer<typeof formSchema>

export const RegistrationForm = () => {


    const { toast } = useToast()
    const registerListing = api.register.registerListing.useMutation({
        onSuccess: () => {
            form.reset()
            toast({
                title: 'Success!!!',
                description: "Membership created successfully"
            })
        },
        onError: () => {
            toast({
                variant: 'destructive',
                title: 'Error!!!',
                description: "Membership creation error"
            })
        }
    })
    const [visible, setVisible] = useState<boolean>(false);
    const form = useForm<FormProps>({
        resolver: zodResolver(formSchema)
    })

    const formSubmission = (data: FormProps) => {

        const {
            fullName,
            phone,
            email,
            address,
            password,
            registerType,
            ...rest
        } = data;

        const payload = {
            user: {
                fullName: fullName ?? "none",
                phone: phone ?? "none",
                email: email ?? "none",
                address: address ?? "none",
                password: password ?? "none",
                registerType: registerType ?? "None",
            },
            listingCriteria: {
                sourceOfMaterial: rest.materialSource ?? "none",
                craftingProcess: rest.craftingProcess ?? "none",
                sustainablePractices: rest.sustainablePractices?.implemented ?? false,
                sustainabledescription: rest.sustainablePractices?.description ?? "none",
                fairWage: rest.fairWage ?? false,
                genderSuport: rest.genderDynamics?.supportsEquality ?? false,
                womenPercentage: rest.genderDynamics?.femalePercentage ?? 0,
                workplaceuphold: rest.workplaceStandards?.upholds ?? false,
                workplaceDescription: rest.workplaceStandards?.description ?? "none",
                childLabour: rest.childLaborPolicy ?? false,
                fairTrade: rest.fairTradeCertification?.certified ?? false,
                fairtradeDoc: rest.fairTradeCertification?.document
                    ? [rest.fairTradeCertification.document]
                    : [],
                giHold: rest.giCertification?.holds ?? false,
                giNumber: rest.giCertification?.certificationNumber ?? "none",
                giDoc: rest.giCertification?.certificationDocument ?? "none",
                blockChain: rest.blockchainCertification?.verified ?? false,
                blockChainDoc: rest.blockchainCertification?.certificationDocument
                    ? [rest.blockchainCertification.certificationDocument]
                    : [],
                ethics: rest.commitmentToEthics ?? false,
                qualityReview: rest.qualityReviewConsent === "yes",
                profilePermission: rest.profileDisplayConsent === "yes",
                complianceAcknowledgement: rest.complianceAcknowledgement === "yes",
            },
            market: rest.market ?? "None",
            artisan:
                registerType === "Artisan"
                    ? {
                        craftSpecialty: rest.craftSpecialty ?? "none",
                        craftSkill: rest.craftSkill ?? "None",
                        craftExperience: rest.craftExperience ?? 0,
                        craftAward: rest.craftAward ?? "none",
                        documents: rest.craftCatalog ? [rest.craftCatalog] : [],
                    }
                    : undefined,
            business:
                registerType === "Business"
                    ? {
                        businessName: rest.businessName ?? "none",
                        businessEmail: rest.businessEmail ?? "none",
                        businessAddress: rest.businessAddress ?? "none",
                        businessType: rest.businessType ?? "None",
                        businessSold: rest.businessSold ?? "none",
                        businessEmployee: rest.businessEmployee ?? 0,
                        businessYear : rest.businessYear ?? 1,
                        documents: rest.businessLicense ? [rest.businessLicense] : [],
                    }
                    : undefined,
            institute:
                registerType === "Institution"
                    ? {
                        instituteName: rest.instituteName ?? "none",
                        instituteEmail: rest.instituteEmail ?? "none",
                        instituteAddress: rest.instituteAddress ?? "none",
                        instituteRep: rest.instituteRep ?? "none",
                        repPost: rest.repPost ?? "none",
                        instituteType: rest.instituteType ?? "None",
                        instituteMission: rest.instituteMission ?? "none",
                        documents: rest.instituteLink ? [rest.instituteLink] : [],
                    }
                    : undefined,
        };

        registerListing.mutate(payload);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(formSubmission)} className="flex flex-col gap-16">
                <Card>
                    <CardHeader>
                        <CardTitle>General information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem className="col-span-2 lg:col-span-1">
                                    <FormLabel>Full name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your full name" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem className="col-span-2 lg:col-span-1">
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem className="col-span-2 lg:col-span-1">
                                    <FormLabel>Contact number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your phone no." {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem className="col-span-3 lg:col-span-1">
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your address" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <div className="relative">
                                            <Input
                                                type={visible ? "text" : "password"}
                                                placeholder="Enter your password"
                                                {...field}
                                                value={field.value ?? ""}
                                            />
                                            <Button
                                                type="button"
                                                variant="ghost"
                                                size="icon"
                                                className="absolute right-0 top-0 h-full px-3 py-2"
                                                onClick={() => setVisible(!visible)}
                                            >
                                                {visible ? (
                                                    <EyeOff className="h-4 w-4" />
                                                ) : (
                                                    <Eye className="h-4 w-4" />
                                                )}
                                            </Button>
                                        </div>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="registerType"
                            render={({ field }) => (
                                <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                    <FormLabel>Registration type</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            {...field}
                                            value={field.value ?? ''}
                                            onValueChange={field.onChange}
                                            className="flex items-center">
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Artisan" id="Artisan" />
                                                <Label htmlFor="Artisan">Artisan</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Business" id="Business" />
                                                <Label htmlFor="Business">Business</Label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <RadioGroupItem value="Institution" id="Institution" />
                                                <Label htmlFor="Institution">Institution</Label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>
                {
                    form.watch('registerType') == 'Artisan' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Artisan information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="craftSpecialty"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Craft Specialty</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your specialty" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="craftSkill"
                                    render={({ field }) => (
                                        <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                            <FormLabel>Craft skill</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onValueChange={field.onChange}
                                                    className="flex items-center">
                                                    {
                                                        ["Expert", "Advanced", "Beginner"]
                                                            .map((skill, index) => <div
                                                                className="flex items-center space-x-2"
                                                                key={index}>
                                                                <RadioGroupItem value={skill} id={skill} />
                                                                <Label htmlFor={skill}>{skill}</Label>
                                                            </div>)
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="craftExperience"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Years of experience</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter your experience"
                                                    {...field} value={field.value ?? ''}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        if (
                                                            value === "" ||
                                                            (/^\d+$/.test(value) && parseInt(value) > 0)
                                                        ) {
                                                            field.onChange(value === "" ? undefined : parseInt(value));
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="craftAward"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Notable Awards or Recognitions (if any)</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your notable awards or recognitions" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="market"
                                    render={({ field }) => (
                                        <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                            <FormLabel>Craft Market Reach</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onValueChange={field.onChange}
                                                    className="flex items-center">
                                                    {
                                                        ["Local", "National", "International"]
                                                            .map((skill, index) => <div
                                                                className="flex items-center space-x-2"
                                                                key={index}>
                                                                <RadioGroupItem value={skill} id={skill} />
                                                                <Label htmlFor={skill}>{skill}</Label>
                                                            </div>)
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="craftCatalog"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel>Craft Catalog</FormLabel>
                                            <CldUploadWidget
                                                options={{ sources: ["local"] }}
                                                uploadPreset="craftlore"
                                                onSuccess={(result: CloudinaryUploadWidgetResults) => {
                                                    const info = result.info;
                                                    if (typeof info !== "string") {
                                                        const secure_url = info?.secure_url ?? 'none';
                                                        if (secure_url) {
                                                            field.onChange(secure_url);
                                                        }
                                                    }
                                                }}
                                            >
                                                {({ open }) => {
                                                    function handleOnClick() {
                                                        open();
                                                    }
                                                    return (
                                                        <Button type="button" onClick={handleOnClick} className="w-fit bg-primary text-white ">
                                                            Upload file
                                                        </Button>
                                                    );
                                                }}
                                            </CldUploadWidget>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    )
                }
                {
                    form.watch('registerType') == 'Business' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Business information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="businessName"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Business name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your business name" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessEmail"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Business email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your business email" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessAddress"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Business address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your business address" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessYear"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Years of operation</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your business year of operation"
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        if (
                                                            value === "" ||
                                                            (/^\d+$/.test(value) && parseInt(value) > 0)
                                                        ) {
                                                            field.onChange(value === "" ? undefined : parseInt(value));
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessType"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Business Type</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select business type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Large_Enterprice">Large Enterprise</SelectItem>
                                                    <SelectItem value="Mid_sized_Business">Mid-sized Business</SelectItem>
                                                    <SelectItem value="Small_Business">Small Business</SelectItem>
                                                    <SelectItem value="Startup">Startup</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="businessLink"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Business website or profile link</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your buesiness profile or website link"
                                                    {...field}
                                                    value={field.value ?? ''}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessSold"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Items selling</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your craft which you are selling"
                                                    {...field}
                                                    value={field.value ?? ''}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="market"
                                    render={({ field }) => (
                                        <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                            <FormLabel>Craft Market Reach</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onValueChange={field.onChange}
                                                    className="flex items-center">
                                                    {
                                                        ["Local", "National", "International"]
                                                            .map((skill, index) => <div
                                                                className="flex items-center space-x-2"
                                                                key={index}>
                                                                <RadioGroupItem value={skill} id={skill} />
                                                                <Label htmlFor={skill}>{skill}</Label>
                                                            </div>)
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessEmployee"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Number of employee</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="Enter number of employee"
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onChange={(e) => {
                                                        const value = e.target.value;
                                                        if (
                                                            value === "" ||
                                                            (/^\d+$/.test(value) && parseInt(value) > 0)
                                                        ) {
                                                            field.onChange(value === "" ? undefined : parseInt(value));
                                                        }
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="businessLicense"
                                    render={({ field }) => (
                                        <FormItem className="grid gap-2">
                                            <FormLabel>Business License or Registration Certificate</FormLabel>
                                            <CldUploadWidget
                                                options={{ sources: ["local"] }}
                                                uploadPreset="craftlore"
                                                onSuccess={(result: CloudinaryUploadWidgetResults) => {
                                                    const info = result.info;
                                                    if (typeof info !== "string") {
                                                        const secure_url = info?.secure_url ?? 'none';
                                                        if (secure_url) {
                                                            field.onChange(secure_url);
                                                        }
                                                    }
                                                }}
                                            >
                                                {({ open }) => {
                                                    function handleOnClick() {
                                                        open();
                                                    }
                                                    return (
                                                        <Button type="button" onClick={handleOnClick} className="w-fit bg-primary text-white ">
                                                            Upload files
                                                        </Button>
                                                    );
                                                }}
                                            </CldUploadWidget>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    )
                }
                {
                    form.watch('registerType') == 'Institution' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Institution information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="instituteName"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Institute name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your institute name" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="instituteEmail"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Institute email</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your institute email" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="instituteAddress"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Institute address</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your institute address" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="instituteRep"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Institute representative</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your nmae" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="repPost"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Representative designation</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your institute address" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="instituteType"
                                    render={({ field }) => (
                                        <FormItem className="col-span-3 lg:col-span-1 flex flex-col justify-center">
                                            <FormLabel>Institute type</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    {...field}
                                                    value={field.value ?? ''}
                                                    onValueChange={field.onChange}
                                                    className="flex items-center">
                                                    {
                                                        ["Governance", "NGO", "Training Body", "Educational Body"]
                                                            .map((skill, index) => <div
                                                                className="flex items-center space-x-2"
                                                                key={index}>
                                                                <RadioGroupItem value={skill} id={skill} />
                                                                <Label htmlFor={skill}>{skill}</Label>
                                                            </div>)
                                                    }
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="instituteLink"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Institution Website or Profile Link</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter website or profile link" {...field} value={field.value ?? ""} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
    
                                <FormField
                                    control={form.control}
                                    name="instituteMission"
                                    render={({ field }) => (
                                        <FormItem className="col-span-2 lg:col-span-1">
                                            <FormLabel>Institute mission</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your institute mission" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    )
                }

                {
                    (form.watch('registerType') === 'Institution'
                        ||
                        form.watch('registerType') === 'Business'
                        ||
                        form.watch('registerType') === 'Artisan'
                    ) && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Quality and Authenticity Assurance</CardTitle>
                                <CardDescription className="text-gray-950">(Required) For lisiting, evalution and ranking purpose</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {
                                    form.watch('registerType') != 'Institution' &&
                                    < FormField
                                        control={form.control}
                                        name="materialSource"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Source of Materials</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select material source" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="local">Locally sourced (within Kashmir)</SelectItem>
                                                        <SelectItem value="imported">Imported or non-local</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                }

                                <FormField
                                    control={form.control}
                                    name="craftingProcess"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Crafting Process Used</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select crafting process" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="traditional">Handcrafted using traditional techniques</SelectItem>
                                                    <SelectItem value="partial_machine">Partially machine-assisted</SelectItem>
                                                    <SelectItem value="full_machine">Fully machine-made</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {
                                    form.watch('registerType') == 'Institution' &&
                                    <div className="space-y-4">
                                        <FormField
                                            control={form.control}
                                            name="triditionalTraining"
                                            render={({ field }) => (
                                                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value}
                                                            onCheckedChange={field.onChange}
                                                        />
                                                    </FormControl>
                                                    <div className="space-y-1 leading-none">
                                                        <FormLabel>
                                                            We provide traditional technique for crafting
                                                        </FormLabel>
                                                    </div>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                }

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="sustainablePractices.implemented"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I implement environmentally sustainable practices
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    {form.watch('sustainablePractices.implemented') && (
                                        <FormField
                                            control={form.control}
                                            name="sustainablePractices.description"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Describe your sustainable practices..."
                                                            className="resize-none"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="fairWage"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I ensure fair wages for all artisans and workers involved in my craft production.
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>



                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="genderDynamics.supportsEquality"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I support gender equality and inclusivity within my workforce.
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    {form.watch('genderDynamics.supportsEquality') && (
                                        <FormField
                                            control={form.control}
                                            name="genderDynamics.femalePercentage"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Percentage of women in workforce</FormLabel>
                                                    <FormControl>
                                                        <Input
                                                            placeholder="Enter percentage of women in workforce"
                                                            {...field}
                                                            value={field.value ?? ''}
                                                            onChange={(e) => {
                                                                const value = e.target.value;
                                                                if (
                                                                    value === "" ||
                                                                    (/^\d+$/.test(value) && parseInt(value) > 0)
                                                                ) {
                                                                    field.onChange(value === "" ? undefined : parseInt(value));
                                                                }
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="workplaceStandards.upholds"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I uphold safe and ethical workplace standards for all employees.
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    {form.watch('workplaceStandards.upholds') && (
                                        <FormField
                                            control={form.control}
                                            name="workplaceStandards.description"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormControl>
                                                        <Textarea
                                                            placeholder="Describe workplace standards and any employee welfare programs..."
                                                            className="resize-none"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="childLaborPolicy"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I affirm that no child labor is used in any part of the crafting or production process.
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="fairTradeCertification.certified"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I am certified by a recognized Fair Trade organization
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    {form.watch('fairTradeCertification.certified') && (
                                        <FormField
                                            control={form.control}
                                            name="fairTradeCertification.document"
                                            render={({ field }) => (
                                                <FormItem className="grid gap-2">
                                                    <FormLabel>Fair trade certificate</FormLabel>
                                                    <CldUploadWidget
                                                        options={{ sources: ["local"] }}
                                                        uploadPreset="craftlore"
                                                        onSuccess={(result: CloudinaryUploadWidgetResults) => {
                                                            const info = result.info;
                                                            if (typeof info !== "string") {
                                                                const secure_url = info?.secure_url ?? 'none';
                                                                if (secure_url) {
                                                                    field.onChange(secure_url);
                                                                }
                                                            }
                                                        }}
                                                    >
                                                        {({ open }) => {
                                                            function handleOnClick() {
                                                                open();
                                                            }
                                                            return (
                                                                <Button type="button" onClick={handleOnClick} className="w-fit bg-primary text-white ">
                                                                    Upload files
                                                                </Button>
                                                            );
                                                        }}
                                                    </CldUploadWidget>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="giCertification.holds"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        I hold a valid Geographical Indication (GI) certification for my craft.
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    {form.watch('giCertification.holds') && (
                                        <>
                                            <FormField
                                                control={form.control}
                                                name="giCertification.certificationNumber"
                                                render={({ field }) => (
                                                    <FormItem className="col-span-2 lg:col-span-1">
                                                        <FormLabel>GI Certification Number </FormLabel>
                                                        <FormControl>
                                                            <Input placeholder="Enter your GI certification number" {...field} value={field.value ?? ''} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            <FormField
                                                control={form.control}
                                                name="giCertification.certificationDocument"
                                                render={({ field }) => (
                                                    <FormItem className="grid gap-2">
                                                        <FormLabel>GI Certification Document</FormLabel>
                                                        <CldUploadWidget
                                                            options={{ sources: ["local"] }}
                                                            uploadPreset="craftlore"
                                                            onSuccess={(result: CloudinaryUploadWidgetResults) => {
                                                                const info = result.info;
                                                                if (typeof info !== "string") {
                                                                    const secure_url = info?.secure_url ?? 'none';
                                                                    if (secure_url) {
                                                                        field.onChange(secure_url);
                                                                    }
                                                                }
                                                            }}
                                                        >
                                                            {({ open }) => {
                                                                function handleOnClick() {
                                                                    open();
                                                                }
                                                                return (
                                                                    <Button type="button" onClick={handleOnClick} className="w-fit bg-primary text-white ">
                                                                        Upload files
                                                                    </Button>
                                                                );
                                                            }}
                                                        </CldUploadWidget>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                        </>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="blockchainCertification.verified"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel>
                                                        My products are verified through blockchain for authenticity and traceability.
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    {form.watch('blockchainCertification.verified') && (
                                        <FormField
                                            control={form.control}
                                            name="blockchainCertification.certificationDocument"
                                            render={({ field }) => (
                                                <FormItem className="grid gap-2">
                                                    <FormLabel>Blockchain Certification Provider </FormLabel>
                                                    <CldUploadWidget
                                                        options={{ sources: ["local"] }}
                                                        uploadPreset="craftlore"
                                                        onSuccess={(result: CloudinaryUploadWidgetResults) => {
                                                            const info = result.info;
                                                            if (typeof info !== "string") {
                                                                const secure_url = info?.secure_url ?? 'none';
                                                                if (secure_url) {
                                                                    field.onChange(secure_url);
                                                                }
                                                            }
                                                        }}
                                                    >
                                                        {({ open }) => {
                                                            function handleOnClick() {
                                                                open();
                                                            }
                                                            return (
                                                                <Button type="button" onClick={handleOnClick} className="w-fit bg-primary text-white ">
                                                                    Upload files
                                                                </Button>
                                                            );
                                                        }}
                                                    </CldUploadWidget>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="qualityReviewConsent"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>Would you agree to periodic quality reviews by CraftLore?</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="yes" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Yes
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="no" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                No
                                                            </FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />

                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="profileDisplayConsent"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>Do you permit CraftLore to display your profile and receive user feedback?</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="yes" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Yes
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="no" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                No
                                                            </FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <FormField
                                        control={form.control}
                                        name="complianceAcknowledgement"
                                        render={({ field }) => (
                                            <FormItem className="space-y-3">
                                                <FormLabel>Do you acknowledge that non-compliance or fraudulent practices may result in blacklisting?</FormLabel>
                                                <FormControl>
                                                    <RadioGroup
                                                        onValueChange={field.onChange}
                                                        defaultValue={field.value}
                                                        className="flex flex-col space-y-1"
                                                    >
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="yes" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                Yes
                                                            </FormLabel>
                                                        </FormItem>
                                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                                            <FormControl>
                                                                <RadioGroupItem value="no" />
                                                            </FormControl>
                                                            <FormLabel className="font-normal">
                                                                No
                                                            </FormLabel>
                                                        </FormItem>
                                                    </RadioGroup>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                            </CardContent>
                        </Card>
                    )
                }

                <Button type="submit" className="col-span-2" disabled={registerListing.isPending}>
                    {registerListing.isPending ? "Submiting..." : "Submit"}
                </Button>
            </form>
        </Form>
    )
}