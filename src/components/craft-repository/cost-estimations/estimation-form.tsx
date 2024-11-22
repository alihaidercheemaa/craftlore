'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "~/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { CRAFTCATEGORIES, PASHMINAWAEVING } from "~/constants"


const formSchema = z.object({
    category: z.string({ required_error: 'Category is required.' }),
    categoryType: z.string({ required_error: 'Category type is required.' }),
    productionMethod: z.string({ required_error: 'production method is required.' }),
    weightType: z.string({ required_error: 'Material weight type is required.' }),
    weight: z.number({ required_error: 'Material weight is required.' }),
    purchaseLocation: z.string({ required_error: 'Purchase location is required.' }),
    shippingDistance: z.number({ required_error: 'Shipping distance is required.' }),
    warehouse: z.string({ required_error: 'Warehouse is required.' }),
    shippingMethod: z.string({ required_error: 'Shipping method is required.' }),
    efficiency: z.string({ required_error: 'Efficiency is required.' }),
    
    // Pashmina-related fields grouped under `pashminaDetails`
    pashminaRaw: z.string().optional(),
    pashminaFiber: z.string().optional(),
    pashminaWeaving: z.string().optional(),
    pashminaType: z.string().optional(),
    pashminaDyeing: z.string().optional(),
    pashminaApplication: z.string().optional(),
    pashimnaColor: z.string().optional(),
    pashminaProduction: z.string().optional(),
    pashminaProductSize: z.string().optional(),
    pashminaProductWeight: z.string().optional(),
    pashminaCraftsmanshipSkill: z.string().optional(),
    pashminaArtisanExperience: z.string().optional(),
    pashminaProductionTime: z.string().optional(),
    pashminaEmbellishment: z.string().optional(),
    pashminaPackaging: z.string().optional(),
    pashminaShipping: z.string().optional(),
    pashminaCertifications: z.string().optional(),

}).superRefine((data, ctx) => {
    // Validate fields specific to Pashmina if craftType is "Pashmina"
    // Validate Pashmina-specific fields if craftType is "Pashmina"
    if (data.categoryType === 'Pashmina') {
        if (!data.pashminaRaw) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Raw Material is required for Pashmina.',
                path: ['pashminaRaw'],
            });
        }
        if (!data.pashminaFiber) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Fiber is required for Pashmina.',
                path: ['pashminaFiber'],
            });
        }
        if (!data.pashminaWeaving) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Weaving is required for Pashmina.',
                path: ['pashminaWeaving'],
            });
        }
        if (!data.pashminaType) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Type is required for Pashmina.',
                path: ['pashminaType'],
            });
        }
        if (!data.pashminaDyeing) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Dyeing is required for Pashmina.',
                path: ['pashminaDyeing'],
            });
        }
        if (!data.pashminaApplication) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Application is required for Pashmina.',
                path: ['pashminaApplication'],
            });
        }
        if (!data.pashimnaColor) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Color is required for Pashmina.',
                path: ['pashimnaColor'],
            });
        }
        if (!data.pashminaProduction) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Production is required for Pashmina.',
                path: ['pashminaProduction'],
            });
        }
        if (!data.pashminaProductSize) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Product Size is required for Pashmina.',
                path: ['pashminaProductSize'],
            });
        }
        if (!data.pashminaProductWeight) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Product Weight is required for Pashmina.',
                path: ['pashminaProductWeight'],
            });
        }
        if (!data.pashminaCraftsmanshipSkill) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Craftsmanship Skill is required for Pashmina.',
                path: ['pashminaCraftsmanshipSkill'],
            });
        }
        if (!data.pashminaArtisanExperience) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Artisan Experience is required for Pashmina.',
                path: ['pashminaArtisanExperience'],
            });
        }
        if (!data.pashminaProductionTime) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Production Time is required for Pashmina.',
                path: ['pashminaProductionTime'],
            });
        }
        if (!data.pashminaEmbellishment) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Embellishment is required for Pashmina.',
                path: ['pashminaEmbellishment'],
            });
        }
        if (!data.pashminaPackaging) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Packaging is required for Pashmina.',
                path: ['pashminaPackaging'],
            });
        }
        if (!data.pashminaShipping) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Shipping is required for Pashmina.',
                path: ['pashminaShipping'],
            });
        }
        if (!data.pashminaCertifications) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: 'Pashmina Certifications are required for Pashmina.',
                path: ['pashminaCertifications'],
            });
        }
    }
});



export const EstimationForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema)
    })

    const onSubmit = (data: z.infer<typeof formSchema>) => {

        console.log(data)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4 text-white [&_label]:text-xl">
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Craft category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-white text-gray-950">
                                        <SelectValue placeholder="Select a craft category" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        CRAFTCATEGORIES.map((category, index) => (
                                            <SelectItem value={category.name} key={index}>{category.name}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="categoryType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Craft type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-white text-gray-950">
                                        <SelectValue placeholder="Select a craft type" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        CRAFTCATEGORIES.find(category => form.watch('category') == category.name)?.craftTypes.map((categoryType, index) => (
                                            <SelectItem value={categoryType.name} key={index}>{categoryType.name}</SelectItem>
                                        ))
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="productionMethod"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Production method</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-white text-gray-950">
                                        <SelectValue placeholder="Select a production method" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {
                                        CRAFTCATEGORIES.find(category => form.watch('category') === category.name)
                                            ?.craftTypes.find(categoryType => form.watch('categoryType') === categoryType.name)
                                            ?.productionMethods?.map((productionMethod, index) => (
                                                <SelectItem value={productionMethod.value} key={index}>
                                                    {productionMethod.label}
                                                </SelectItem>
                                            )) ?? (
                                            <SelectItem value="none" disabled>No production methods available</SelectItem>
                                        )
                                    }
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="weightType"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Material weight type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-white text-gray-950">
                                        <SelectValue placeholder="Select a production method" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="kilo" >Kilograms</SelectItem>
                                    <SelectItem value="gram" >Grams</SelectItem>
                                    <SelectItem value="pound" >Pounds</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="weight"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Material weight</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value+''}>
                                <FormControl>
                                    <Input
                                        className="text-gray-950"
                                        placeholder="Enter the total weight"
                                        {...field}
                                        value={field.value ?? ''}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (value === "" || (/^\d+$/.test(value) && parseInt(value) > 0)) {
                                                field.onChange(value === "" ? undefined : parseInt(value));
                                            }
                                        }}
                                    />
                                </FormControl>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="purchaseLocation"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Purchase location</FormLabel>
                            <Select
                                onValueChange={(value) => {
                                    field.onChange(value)
                                    if(value=='kashmir')
                                        form.setValue('shippingDistance',7200)
                                }}
                                defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-white text-gray-950">
                                        <SelectValue placeholder="Select a purchase location" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="kashmir" >Directly from kashmir</SelectItem>
                                    <SelectItem value="usa" >Purchased from DKC USA Warehouse</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="shippingDistance"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel >Shipping distance (miles)</FormLabel>
                            <FormControl>
                                <Input
                                    className="text-gray-950"
                                    placeholder="Enter the total shipping distance"
                                    {...field}
                                    value={field.value ?? ''}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        if (value === "" || (/^\d+$/.test(value) && parseInt(value) > 0)) {
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
                    name="warehouse"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>DKC warehouse city</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-white text-gray-950">
                                        <SelectValue placeholder="Select a warehouse location" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="new york">New York</SelectItem>
                                    <SelectItem value="los angeles">Los Angeles</SelectItem>
                                    <SelectItem value="chicago">Chicago</SelectItem>
                                    <SelectItem value="houston">Houston</SelectItem>
                                    <SelectItem value="phoenix">Phoenix</SelectItem>
                                    <SelectItem value="philadelphia">Philadelphia</SelectItem>
                                    <SelectItem value="san antonio">San Antonio</SelectItem>
                                    <SelectItem value="san diego">San Diego</SelectItem>
                                    <SelectItem value="dallas">Dallas</SelectItem>
                                    <SelectItem value="san francisco">San Francisco</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="shippingMethod"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Shipping method</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-white text-gray-950">
                                        <SelectValue placeholder="Select a shipping method" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="air">Air</SelectItem>
                                    <SelectItem value="ship">Ship</SelectItem>
                                    <SelectItem value="rail">Rail</SelectItem>
                                    <SelectItem value="road">Road</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="efficiency"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Logistic Efficiency</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                    <SelectTrigger className="bg-white text-gray-950">
                                        <SelectValue placeholder="Select a logistic efficiency" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="bulk">Efficient (Bulk)</SelectItem>
                                    <SelectItem value="single">Less Efficient (Single)</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                   {
                        form.watch('categoryType') == 'Pashmina Weaving' &&
                        <>
                            <FormField
                                control={form.control}
                                name="pashminaRaw"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Raw Material</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select Raw Material" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.RawMaterialCosts.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaFiber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel> Fiber Diameter</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select fiber diameter" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.FiberDiameter.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaWeaving"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Weaving Technique</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select a technique" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.WeavingTechnique.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Weaving Type</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select a type" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.WeavingType.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaDyeing"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Dyeing Process</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select a process" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.DyeingProcess.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaApplication"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Dyeing Application</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select a application" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.ApplicationTechniques.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashimnaColor"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Color fixation</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select a color fixation" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.ColorFixation.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaProduction"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Production process</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select a production process" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.ProductionProcess.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaProductionTime"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Production time</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select production time" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.ProductionTime.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaProductSize"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Product size</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select a production size" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.ProductSize.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaProductWeight"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Product weight</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select a production weight" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.ProductWeight.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaCraftsmanshipSkill"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Craftman skill</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select craftman skill" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.CraftsmanshipSkill.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaArtisanExperience"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Artisan experience</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select artisan experience" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.ArtisanExperience.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaEmbellishment"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Embellishment</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select embellishment" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.EmbellishedPashmina.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaPackaging"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Packaging</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select packaging" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.Packaging.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaShipping"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Shipping</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select shipping" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.Shipping.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="pashminaCertifications"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Certification</FormLabel>
                                        <FormControl>
                                            <Select
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select certification" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {
                                                        PASHMINAWAEVING.Certifications.map((raw, index) => (
                                                            <SelectItem value={raw.value} key={index}>{raw.name}</SelectItem>
                                                        ))
                                                    }
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </>
                    }
                <Button type="submit" variant={'secondary'}>Calculate</Button>
            </form>
        </Form>
    )
}