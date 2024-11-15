'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "~/components/ui/select";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Textarea } from "~/components/ui/textarea";
import { Card, CardHeader, CardContent, CardTitle } from "~/components/ui/card";

const formSchema = z.object({
    // Personal Information
    fullName: z.string().min(2, "Full Name is required."),
    email: z.string().email("Invalid email."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    password: z.string().min(8, "Password must be at least 8 characters."),

    // Institution Information
    institutionName: z.string().min(2, "Institution Name is required."),
    institutionType: z.string().min(1, "Select the institution type."),
    industry: z.string().min(2, "Industry is required."),
    yearEstablished: z.number().min(1900, "Enter a valid year."),
    taxId: z.string().optional(),
    primaryContact: z.string().min(2, "Primary Contact is required."),
    contactEmail: z.string().email("Invalid email."),
    contactPhone: z.string().min(10, "Contact phone must be at least 10 digits."),
    website: z.string().url("Invalid URL").optional(),

    // Business Address
    headquartersAddress: z.string().min(5, "Headquarters Address is required."),
    additionalLocations: z.string().optional(),

    // Partnership Interest
    partnershipType: z.string(),
    partnershipGoals: z.string().min(10, "Provide a brief description of partnership goals."),
    targetProducts: z.array(z.string()).min(1, "Select at least one target product."),

    // CSR and Sustainability
    csrInterest: z.enum(["Yes", "No"], { required_error: "This field is required." }),
    csrInitiatives: z.string().optional(),
    sustainabilityPractices: z.string().optional(),

    // Verification and Documentation
    businessLicense: z.string().optional(),
    proofOfTaxID: z.string().optional(),
    references: z.string().optional(),

    // Marketing and Engagement
    engagementChannels: z.string(),
    customerDemographic: z.array(z.string()).optional(),
    brandMission: z.string().optional(),

    // Additional Information
    specificRequirements: z.string().optional(),
    challenges: z.string().optional(),
    additionalComments: z.string().optional(),

    // Terms & Conditions
    terms: z.boolean().refine((val) => val === true, {
        message: "You must agree to the terms and conditions.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export const CorporateMembershipForm = () => {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: FormValues) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Personal Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your full name" {...field}
                                            value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your email" {...field}
                                            value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your phone number" {...field}
                                            value={field.value ?? ''} />
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
                                        <Input type="password" placeholder="Enter your password" {...field}
                                            value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Institution Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Institution Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="institutionName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Institution Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter institution name" {...field}
                                            value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="institutionType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Institution Type</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select institution type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Retail/E-commerce",
                                                "Hospitality/Tourism",
                                                "Corporate Gifting",
                                                "Interior Design/Home Décor",
                                                "Fashion/Apparel",
                                                "CSR Division",
                                                "Non-Profit",
                                                "Art Gallery/Museum",
                                                "Educational Institution",
                                                "Sustainable/Ethical Brand",
                                                "Event Management",
                                                "Wholesale/Export",
                                                "Healthcare/Wellness",
                                                "Media/Content Production",
                                                "Other",
                                            ].map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Industry */}
                        <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Industry</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter industry" {...field}
                                            value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Year Established */}
                        <FormField
                            control={form.control}
                            name="yearEstablished"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Year Established</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Enter year"
                                            {...field}
                                            value={field.value ?? ''}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Partnership Interest */}
                <Card>
                    <CardHeader>
                        <CardTitle>Partnership Interest</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="partnershipType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type of Partnership</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a preferred channel" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Product Sourcing",
                                                "CSR Partnership",
                                                "Sponsorship",
                                                "Employee Engagement Programs",
                                                "Artisan Development Programs",
                                                "Event Collaboration",
                                                "Research and Education",
                                                "Media and Content Production",
                                                "Other",
                                            ].map((channel) => (
                                                <SelectItem key={channel} value={channel}>{channel}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="partnershipGoals"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Partnership Goals</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Briefly describe your goals for this partnership"
                                            {...field}
                                            value={field.value ?? ''}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* CSR and Sustainability */}
                <Card>
                    <CardHeader>
                        <CardTitle>Corporate Social Responsibility (CSR) and Sustainability</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="csrInterest"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Are you interested in CSR activities related to Kashmiri artisans?</FormLabel>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        value={field.value ?? ""}
                                    >
                                        {["Yes", "No"].map((option) => (
                                            <div key={option} className="flex items-center space-x-2">
                                                <RadioGroupItem value={option} id={option} />
                                                <FormLabel htmlFor={option}>{option}</FormLabel>
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="csrInitiatives"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Describe Current or Past CSR Initiatives</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Provide details about your CSR initiatives"
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
                            name="sustainabilityPractices"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sustainability Practices</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Describe any sustainability practices you follow"
                                            {...field}
                                            value={field.value ?? ''}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Verification and Documentation */}
                <Card>
                    <CardHeader>
                        <CardTitle>Verification and Documentation</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="businessLicense"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Business License or Registration Certificate</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            placeholder="Upload file"
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
                            name="proofOfTaxID"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Proof of Tax ID</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="file"
                                            placeholder="Upload file"
                                            {...field}
                                            value={field.value ?? ''}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Marketing and Engagement */}
                <Card>
                    <CardHeader>
                        <CardTitle>Marketing and Engagement</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="engagementChannels"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Preferred Engagement Channel</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a preferred channel" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Online Store",
                                                "Physical Retail",
                                                "Events",
                                                "Social Media",
                                                "Corporate Gifting",
                                                "Employee Programs",
                                                "Custom Product Lines",
                                            ].map((channel) => (
                                                <SelectItem key={channel} value={channel}>{channel}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="brandMission"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Brand Mission Statement</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="What is your brand's mission statement?"
                                            {...field}
                                            value={field.value ?? ''}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Terms and Conditions */}
                <Card>
                    <CardHeader>
                        <CardTitle>Terms & Conditions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-start space-x-2">
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                        <FormLabel>
                                            I agree to the Terms of Service and Privacy Policy.
                                        </FormLabel>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Button type="submit" className="w-full">
                    Submit Application
                </Button>
            </form>
        </Form >
    );
};

