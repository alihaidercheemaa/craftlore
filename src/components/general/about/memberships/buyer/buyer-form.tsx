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
import { api } from "~/trpc/react";
import { useToast } from "~/hooks/use-toast";

const formSchema = z.object({
    fullName: z.string().min(2, "Full Name is required."),
    email: z.string().email("Invalid email."),
    phone: z.string().optional(),
    password: z.string().min(8, "Password must be at least 8 characters."),
    buyerType: z.string(),
    businessName: z.string().optional(),
    businessType: z.string().optional(),
    taxId: z.string().optional(),
    country: z.string().optional(),
    website: z.string().url("Invalid URL").optional(),
    productInterest: z.array(z.string()).optional(),
    orderVolume: z.string().optional(),
    authentication: z.string().optional(),
    traceability: z.string().optional(),
    sustainability: z.array(z.string()).optional(),
    source: z.string().optional(),
    newsletter: z.boolean().optional(),
    specialRequirements: z.string().optional(),
    terms: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions.",
    }),
});

type FormValues = z.infer<typeof formSchema>;

export const BuyerMembershipForm = () => {

    const { toast } = useToast()
    const createMembership = api.membership.addBuyerMembership.useMutation({
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
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = (data: FormValues) => {

        createMembership.mutate({
            fullName: data.fullName,
            email: data.email,
            phone: data.phone ?? 'none',
            password: data.password,
            buyerType: data.buyerType,
            businessName: data.businessName ?? 'none',
            businessType: data.businessType ?? 'none',
            taxId: data.taxId ?? 'none',
            country: data.country ?? 'none',
            website: data.website ?? 'none',
            productInterest: data.productInterest ?? [],
            orderVolume: data.orderVolume ?? 'none',
            authentication: data.authentication ?? 'none',
            traceability: data.traceability ?? 'none',
            sustainability: data.sustainability ?? [''],
            source: data.source ?? 'none',
            newsletter: data.newsletter ?? false,
            specialRequirements: data.specialRequirements ?? 'none',
            terms: data.terms,
        });

    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <Card>
                    <CardHeader>
                        <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
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
                                <FormItem>
                                    <FormLabel>Email Address</FormLabel>
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
                                <FormItem>
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+CountryCode" {...field} value={field.value ?? ''} />
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
                                        <Input type="password" placeholder="Enter password" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Buyer Type</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-2">
                        <FormField
                            control={form.control}
                            name="buyerType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Select Buyer Type:</FormLabel>
                                    <RadioGroup {...field} onValueChange={field.onChange} value={field.value ?? ''}>
                                        {[
                                            "Individual Consumer",
                                            "Retailer",
                                            "Wholesaler",
                                            "Institutional Buyer",
                                            "Collector / Art Connoisseur",
                                            "Corporate Gifting Buyers",
                                            "Event & Exhibition Planners",
                                        ].map((type) => (
                                            <div key={type} className="flex items-center space-x-2">
                                                <RadioGroupItem value={type} id={type} />
                                                <FormLabel htmlFor={type}>{type}</FormLabel>
                                            </div>
                                        ))}
                                    </RadioGroup>

                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                {form.watch("buyerType") != 'Individual Consumer' && (
                    <>
                        <Card>
                            <CardHeader>
                                <CardTitle>Business/Organization Information</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-2">
                                <FormField
                                    control={form.control}
                                    name="businessName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Business/Organization Name</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter business name" {...field} value={field.value ?? ''} />
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
                                            <Select onValueChange={field.onChange} value={field.value ?? ''}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select business type" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {[
                                                        "Retail Store",
                                                        "Wholesale Distributor",
                                                        "Museum/Cultural Institution",
                                                        "Corporate Gifting",
                                                        "Art Collector",
                                                        "Event & Exhibition Planners",
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
                                    name="taxId"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Tax ID / Business Registration Number</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter tax ID" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Country</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value ?? ''}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select country" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {["United States", "India"].map((country) => (
                                                        <SelectItem key={country} value={country}>
                                                            {country}
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
                                    name="website"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Business Website</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter website URL" {...field} value={field.value ?? ''} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Product Preferences</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-2">
                                {/* Products of Interest */}
                                <FormField
                                    control={form.control}
                                    name="productInterest"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Products of Interest</FormLabel>
                                            {[
                                                "Pashmina Shawls",
                                                "Carpets and Rugs",
                                                "Paper Mâché",
                                                "Woodwork",
                                                "Copperware",
                                                "Embroidered Textiles",
                                                "Other",
                                            ].map((product) => (
                                                <div key={product} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        checked={field.value?.includes(product)}
                                                        onCheckedChange={(checked) => {
                                                            const updatedValue = checked
                                                                ? [...(field.value ?? []), product]
                                                                : field.value?.filter((value) => value !== product) ?? [];
                                                            field.onChange(updatedValue);
                                                        }}

                                                    />
                                                    <FormLabel>{product}</FormLabel>
                                                </div>
                                            ))}
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="orderVolume"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Order Volume (For Retailers and Wholesalers)</FormLabel>
                                            <Select onValueChange={field.onChange} value={field.value ?? ''}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select order volume" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {[
                                                        "Sample Orders",
                                                        "Small Orders (1-50 items)",
                                                        "Medium Orders (50-500 items)",
                                                        "Large Orders (500+ items)",
                                                    ].map((volume) => (
                                                        <SelectItem key={volume} value={volume}>
                                                            {volume}
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

                        <Card>
                            <CardHeader>
                                <CardTitle>Verification and Authentication Preferences</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-2">
                                {/* Authentication Certificates */}
                                <FormField
                                    control={form.control}
                                    name="authentication"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>
                                                Are you interested in product authentication certificates?
                                            </FormLabel>
                                            <RadioGroup {...field} onValueChange={field.onChange} value={field.value ?? ''}>
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
                                {/* Traceability */}
                                <FormField
                                    control={form.control}
                                    name="traceability"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Do you require detailed product traceability information?</FormLabel>
                                            <RadioGroup {...field} onValueChange={field.onChange} value={field.value ?? ''}>
                                                {["Yes, essential", "Nice to have", "Not necessary"].map((option) => (
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
                                    name="sustainability"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Sustainability Preferences</FormLabel>
                                            {[
                                                "Eco-friendly",
                                                "Ethically sourced",
                                                "Artisan support",
                                                "No preference",
                                            ].map((preference) => (
                                                <div key={preference} className="flex items-center space-x-2">
                                                    <Checkbox
                                                        checked={field.value?.includes(preference)}
                                                        onCheckedChange={(checked) => {
                                                            const updatedValue = checked
                                                                ? [...(field.value ?? []), preference]
                                                                : field.value?.filter((value) => value !== preference) ?? [];
                                                            field.onChange(updatedValue);
                                                        }}
                                                    />
                                                    <FormLabel>{preference}</FormLabel>
                                                </div>
                                            ))}
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Terms & Conditions</CardTitle>
                            </CardHeader>
                            <CardContent className="grid gap-2">
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
                                                <FormLabel>I agree to the Terms of Service and Privacy Policy.</FormLabel>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </CardContent>
                        </Card>
                    </>
                )}


                <Card>
                    <CardHeader>
                        <CardTitle>Additional Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <FormField
                            control={form.control}
                            name="source"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>How did you hear about CraftLore?</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value ?? ''}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select source" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {["Online Search", "Social Media", "Friend/Colleague", "Event/Exhibition", "Other"].map(
                                                (source) => (
                                                    <SelectItem key={source} value={source}>
                                                        {source}
                                                    </SelectItem>
                                                )
                                            )}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="newsletter"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-start space-x-2">
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        <FormLabel>Sign me up for the newsletter</FormLabel>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="specialRequirements"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Special Requirements</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Describe any special requirements" {...field} value={field.value ?? ''} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="flex items-start space-x-2">
                                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                        <FormLabel>I agree to the Terms of Service and Privacy Policy.</FormLabel>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </CardContent>
                </Card>

                <Button
                    type="submit"
                    disabled={createMembership.isPending}
                >
                    {createMembership.isPending ? 'Submiting...' : 'Submit Application'}
                </Button>
            </form>
        </Form>
    );
};
