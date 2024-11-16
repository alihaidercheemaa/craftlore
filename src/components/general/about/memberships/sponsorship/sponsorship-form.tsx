'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import { Button } from "~/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "~/components/ui/select";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Textarea } from "~/components/ui/textarea";
import { Card, CardHeader, CardContent, CardTitle } from "~/components/ui/card";

const sponsorshipFormSchema = z.object({
    // Sponsor Information
    sponsorName: z.string().min(2, "Sponsor name is required."),
    contactPerson: z.string().min(2, "Contact person is required."),
    email: z.string().email("Invalid email address."),
    phone: z.string().min(10, "Phone number must be at least 10 digits."),
    socialLinks: z.string().optional(),

    // Sponsor Type
    sponsorType: z.string().min(1, "Select the sponsor type."),
    industry: z.string().min(2, "Industry is required."),

    // Sponsorship Goals and Interests
    sponsorshipGoal: z.string().min(1, "Select at least one sponsorship goal."),
    objectives: z.string().min(10, "Provide a description of sponsorship objectives."),
    focusArea: z.string().min(1, "Select at least one focus area."),

    // Sponsorship Tier
    tier: z.string().min(1, "Select a sponsorship tier."),
    budgetRange: z.string().optional(),

    // Sponsorship Options
    sponsorshipChannel: z.string().min(1, "Select at least one sponsorship channel."),
    eventInterest: z.enum(["Yes", "No"]),
    productCustomization: z.string().optional(),

    // CSR and Sustainability
    csrInterest: z.enum(["Yes", "No"], { required_error: "Select your interest in CSR." }),
    pastCSREfforts: z.string().optional(),
    sustainabilityPractices: z.string().optional(),

    // Marketing and Branding Preferences
    brandingOptions: z.array(z.string()).min(1, "Select at least one branding option."),
    socialHandles: z.string().optional(),
    communicationChannel: z.string().min(1, "Select a communication channel."),

    // Impact and Reporting Requirements
    impactMetrics: z.array(z.string()).min(1, "Select at least one impact metric."),
    reportFrequency: z.string().min(1, "Select the reporting frequency."),
    publicUse: z.enum(["Yes", "No"], { required_error: "Select your preference for public use of data." }),

    // Additional Information
    specialRequirements: z.string().optional(),
    additionalComments: z.string().optional(),

    // Terms and Conditions
    terms: z.boolean().refine((val) => val, "You must agree to the terms and conditions."),
});

type SponsorshipFormValues = z.infer<typeof sponsorshipFormSchema>;

export const SponsorMemberShipForm = () => {
    const form = useForm<SponsorshipFormValues>({
        resolver: zodResolver(sponsorshipFormSchema),
    });

    const onSubmit = (data: SponsorshipFormValues) => {
        console.log("Form Data:", data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Sponsor Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sponsor Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="sponsorName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Organization/Individual Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter sponsor name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="contactPerson"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Contact Person</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter contact person name" {...field} />
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
                                        <Input type="email" placeholder="Enter email address" {...field} />
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
                                        <Input type="tel" placeholder="Enter phone number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="socialLinks"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Website or Social Media Links</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter website or social media links" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Sponsor Type */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sponsor Type</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="sponsorType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Type of Sponsor</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select sponsor type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Corporate Sponsor",
                                                "Individual Sponsor",
                                                "Non-Profit Organization",
                                                "Foundation",
                                                "Government Agency",
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
                        <FormField
                            control={form.control}
                            name="industry"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Industry or Focus Area</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter industry" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Sponsorship Goals and Interests</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="sponsorshipGoal"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Primary Sponsorship Goal</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select sponsorship goal" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "CSR Initiative",
                                                "Cultural Preservation",
                                                "Sustainability",
                                                "Artisan Training",
                                                "Product Sourcing",
                                                "Event Sponsorship",
                                                "Private Label Collaboration",
                                                "Marketing Exposure",
                                                "Other",
                                            ].map((goal) => (
                                                <SelectItem key={goal} value={goal}>
                                                    {goal}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="objectives"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sponsorship Objectives</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe sponsorship objectives" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="focusArea"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Focus Area of Sponsorship</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select focus areas" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Artisan Development",
                                                "Product Authentication",
                                                "Eco-Friendly Initiatives",
                                                "Cultural Events",
                                                "Skill Training",
                                                "Artisan Income Support",
                                                "Community Building",
                                                "Education and Awareness",
                                                "Other",
                                            ].map((area) => (
                                                <SelectItem key={area} value={area}>
                                                    {area}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Sponsorship Tier */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sponsorship Tier</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="tier"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Sponsorship Tier</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select sponsorship tier" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Platinum",
                                                "Gold",
                                                "Silver",
                                                "Bronze",
                                                "Custom"
                                            ].map((tier) => (
                                                <SelectItem key={tier} value={tier}>
                                                    {tier}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="budgetRange"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Budget Range (Optional)</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select budget range" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Under $5,000",
                                                "$5,000 - $10,000",
                                                "$10,000 - $25,000",
                                                "$25,000 - $50,000",
                                                "Over $50,000"
                                            ].map((range) => (
                                                <SelectItem key={range} value={range}>
                                                    {range}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Sponsorship Options */}
                <Card>
                    <CardHeader>
                        <CardTitle>Sponsorship Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="sponsorshipChannel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Preferred Sponsorship Channel</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select sponsorship channel" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Direct Financial Support",
                                                "In-Kind Donations",
                                                "Technical Assistance",
                                                "Marketing Support",
                                                "Equipment/Resources",
                                                "Other"
                                            ].map((channel) => (
                                                <SelectItem key={channel} value={channel}>
                                                    {channel}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="eventInterest"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Interest in Event Sponsorship</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-row space-x-4"
                                        >
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Yes</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <RadioGroupItem value="No" />
                                                </FormControl>
                                                <FormLabel className="font-normal">No</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="productCustomization"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Product Customization Requirements (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter any specific product customization requirements" {...field} />
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
                        <CardTitle>CSR and Sustainability</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="csrInterest"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Interest in CSR Activities</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-row space-x-4"
                                        >
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Yes</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <RadioGroupItem value="No" />
                                                </FormControl>
                                                <FormLabel className="font-normal">No</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="pastCSREfforts"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Past CSR Efforts (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe your past CSR initiatives" {...field} />
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
                                    <FormLabel>Sustainability Practices (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe your sustainability practices" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Marketing and Branding Preferences */}
                <Card>
                    <CardHeader>
                        <CardTitle>Marketing and Branding Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="brandingOptions"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Branding Options</FormLabel>
                                    <div className="space-y-2">
                                        {[
                                            "Logo Placement",
                                            "Product Co-branding",
                                            "Social Media Mentions",
                                            "Press Releases",
                                            "Event Recognition",
                                            "Website Feature"
                                        ].map((option) => (
                                            <FormField
                                                key={option}
                                                control={form.control}
                                                name="brandingOptions"
                                                render={({ field }) => (
                                                    <FormItem
                                                        key={option}
                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(option)}
                                                                onCheckedChange={(checked) => {
                                                                    const updatedValue = checked
                                                                        ? [...(field.value || []), option]
                                                                        : field.value?.filter((value) => value !== option) || [];
                                                                    field.onChange(updatedValue);
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {option}
                                                        </FormLabel>
                                                    </FormItem>
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="socialHandles"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Social Media Handles (Optional)</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter your social media handles" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="communicationChannel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Preferred Communication Channel</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select communication channel" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Email",
                                                "Phone",
                                                "Video Call",
                                                "In-Person Meetings",
                                                "Project Management Tool"
                                            ].map((channel) => (
                                                <SelectItem key={channel} value={channel}>
                                                    {channel}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Impact and Reporting Requirements */}
                <Card>
                    <CardHeader>
                        <CardTitle>Impact and Reporting Requirements</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="impactMetrics"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Impact Metrics</FormLabel>
                                    <div className="space-y-2">
                                        {[
                                            "Artisan Income Growth",
                                            "Community Impact",
                                            "Environmental Impact",
                                            "Cultural Preservation",
                                            "Skills Development",
                                            "Market Access",
                                            "Brand Awareness"
                                        ].map((metric) => (
                                            <FormField
                                                key={metric}
                                                control={form.control}
                                                name="impactMetrics"
                                                render={({ field }) => (
                                                    <FormItem
                                                        key={metric}
                                                        className="flex flex-row items-start space-x-3 space-y-0"
                                                    >
                                                        <FormControl>
                                                            <Checkbox
                                                                checked={field.value?.includes(metric)}
                                                                onCheckedChange={(checked) => {
                                                                    const updatedValue = checked
                                                                        ? [...(field.value || []), metric]
                                                                        : field.value?.filter((value) => value !== metric) || [];
                                                                    field.onChange(updatedValue);
                                                                }}
                                                            />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            {metric}
                                                        </FormLabel>
                                                    </FormItem>
                                                )}
                                            />
                                        ))}
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="reportFrequency"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Reporting Frequency</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select reporting frequency" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {[
                                                "Monthly",
                                                "Quarterly",
                                                "Bi-annually",
                                                "Annually",
                                                "Project-based"
                                            ].map((frequency) => (
                                                <SelectItem key={frequency} value={frequency}>
                                                    {frequency}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="publicUse"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Permission for Public Use of Data</FormLabel>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            value={field.value}
                                            className="flex flex-row space-x-4"
                                        >
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <RadioGroupItem value="Yes" />
                                                </FormControl>
                                                <FormLabel className="font-normal">Yes</FormLabel>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <RadioGroupItem value="No" />
                                                </FormControl>
                                                <FormLabel className="font-normal">No</FormLabel>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {/* Additional Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Additional Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <FormField
                            control={form.control}
                            name="specialRequirements"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Special Requirements (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Enter any special requirements or considerations" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="additionalComments"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Additional Comments (Optional)</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Any additional comments or information" {...field} />
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
                        <CardTitle>Terms and Conditions</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <FormField
                            control={form.control}
                            name="terms"
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
                                            I agree to the terms and conditions
                                        </FormLabel>
                                        <FormMessage />
                                    </div>
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Button type="submit" className="w-full">
                    Submit Application
                </Button>
            </form>
        </Form>
    );
};
