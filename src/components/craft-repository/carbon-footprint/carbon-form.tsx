'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { carbonfootprint } from '~/constants/carbon';
import { api } from '~/trpc/react';
import { toast } from '~/hooks/use-toast';

const formSchema = z.object({
    category: z.string({ required_error: 'Field is required' }),
    subcategory: z.string({ required_error: 'Field is required' }),
    rawMaterial: z.string({ required_error: 'Field is required' }),
    package: z.string({ required_error: 'Field is required' }),
    transport: z.string({ required_error: 'Field is required' }),

    processing: z.string().optional(),
    production: z.string().optional(),
    crafting: z.string().optional(),
    installation: z.string().optional(),
    finishing: z.string().optional(),
    cooking: z.string().optional(),
    preparation: z.string().optional(),

    painting: z.string().optional(),
    embroidery: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.category !== "Culinary weaving") {
        if (!data.processing) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Field is required",
                path: ["processing"]
            });
        }
    }

    if (data.subcategory == 'Pashmina Shawl') {
        if (!data.production) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Field is required",
                path: ["production"]
            });
        }
    }
    else {
        if (!data.crafting) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Field is required",
                path: ["crafting"]
            });
        }
    }

    if (data.subcategory == 'Khatamband' || data.subcategory == 'Pinjrakari') {
        if (!data.installation) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Field is required",
                path: ["installation"]
            });
        }
    }
    if (data.category == 'Sport Crafts' || data.category == 'Hide Crafts' || data.subcategory == 'Engraved Metalware' || data.subcategory == 'Silverware Craft') {
        if (!data.finishing) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Field is required",
                path: ["finishing"]
            });
        }
    }
    if (data.subcategory == 'Wazwan') {
        if (!data.cooking) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Field is required",
                path: ["cooking"]
            });
        }
    }

    if (data.category == 'Culinary weaving') {
        if (!data.preparation) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Field is required",
                path: ["preparation"]
            });
        }
    }
    if (data.subcategory == 'Papier Mache') {
        if (!data.painting) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Field is required",
                path: ["painting"]
            });
        }
    }
    if (data.subcategory == 'Gabba') {
        if (!data.embroidery) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Field is required",
                path: ["embroidery"]
            });
        }
    }
});

type FormData = z.infer<typeof formSchema>;

type CarbonCalcultaion = {
    footprintDirect: number
    footprintDKC: number
    kashmirCost: number
    usaCost: number
    warehouse: string
}

export const CarbonForm: React.FC = () => {

    const [calculations, setCalculations] = useState<{ lower: number, upper: number }>({ lower: 0, upper: 0 })

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema)
    });
    const estimateCarbon = api.cost.carbonFootPrint.useMutation({
        onSuccess: (data) => {
            setCalculations((prev)=>({...prev,lower:data.totalLower,upper:data.totalUpper}))
        },
        onError: (error) => {
            toast({
                variant:'destructive',
                title:'Opps!',
                description:error.message
            })
        }
    })

    const onSubmit = (data: FormData) => {

        estimateCarbon.mutate({
            category: data.category,
            subcategory: data.subcategory,
            rawMaterial: data.rawMaterial,
            package: data.package,
            transport: data.transport,
            processing: data.processing,
            production: data.production,
            crafting: data.crafting,
            installation: data.installation,
            finishing: data.finishing,
            cooking: data.cooking,
            preparation: data.preparation,
            painting: data.painting,
            embroidery: data.embroidery,
        })
    }


    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-4 text-white [&_label]:text-xl"
                >
                    {/* Category Field */}
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Craft Category<span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Craft Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {carbonfootprint.map((category) => (
                                                <SelectItem key={category.category} value={category.category}>
                                                    {category.category}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Subcategory Field */}
                    <FormField
                        control={form.control}
                        name="subcategory"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Craft Type<span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Craft Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {carbonfootprint
                                                .find(cat => cat.category === form.watch('category'))
                                                ?.subcategory.map((sub, index) => (
                                                    <SelectItem value={sub.name} key={index}>
                                                        {sub.name}
                                                    </SelectItem>
                                                ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Raw Material Field */}
                    <FormField
                        control={form.control}
                        name="rawMaterial"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Raw Material<span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Raw Material" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {carbonfootprint
                                                .find(cat => cat.category === form.watch('category'))
                                                ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                ?.RawMaterial.map((raw, index) => (
                                                    <SelectItem value={raw.name} key={index}>
                                                        {raw.name}
                                                    </SelectItem>
                                                ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Processing Field (Conditionally Required) */}
                    {form.watch('category') !== 'Culinary weaving' && (
                        <FormField
                            control={form.control}
                            name="processing"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Processing<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder="Select Process" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {carbonfootprint
                                                    .find(cat => cat.category === form.watch('category'))
                                                    ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                    ?.Processing?.map((process, index) => (
                                                        <SelectItem value={process.name} key={index}>
                                                            {process.name}
                                                        </SelectItem>
                                                    ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    {/* Production or Crafting Field */}
                    {(() => {
                        const selectedSubcategory = form.watch('subcategory');
                        if (selectedSubcategory === 'Pashmina Shawl') {
                            return (
                                <FormField
                                    control={form.control}
                                    name="production"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Production<span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="bg-white text-gray-950">
                                                        <SelectValue placeholder="Select Production" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {carbonfootprint
                                                            .find(cat => cat.category === form.watch('category'))
                                                            ?.subcategory.find(sub => sub.name === selectedSubcategory)
                                                            ?.ProductionMethod?.map((prod, index) => (
                                                                <SelectItem value={prod.name} key={index}>
                                                                    {prod.name}
                                                                </SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            );
                        } else {
                            return (
                                <FormField
                                    control={form.control}
                                    name="crafting"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Crafting<span className="text-red-500">*</span></FormLabel>
                                            <FormControl>
                                                <Select onValueChange={field.onChange} value={field.value}>
                                                    <SelectTrigger className="bg-white text-gray-950">
                                                        <SelectValue placeholder="Select Crafting" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {carbonfootprint
                                                            .find(cat => cat.category === form.watch('category'))
                                                            ?.subcategory.find(sub => sub.name === selectedSubcategory)
                                                            ?.Crafting?.map((craft, index) => (
                                                                <SelectItem value={craft.name} key={index}>
                                                                    {craft.name}
                                                                </SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            );
                        }
                    })()}

                    {/* Installation Field */}
                    {(form.watch('subcategory') === 'Khatamband' || form.watch('subcategory') === 'Pinjrakari') && (
                        <FormField
                            control={form.control}
                            name="installation"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Installation<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder="Select Installation" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {carbonfootprint
                                                    .find(cat => cat.category === form.watch('category'))
                                                    ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                    ?.Installation?.map((install, index) => (
                                                        <SelectItem value={install.name} key={index}>
                                                            {install.name}
                                                        </SelectItem>
                                                    ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    {/* Finishing Field */}
                    {(
                        form.watch('subcategory') === 'Engraved Metalware' ||
                        form.watch('subcategory') === 'Silverware Craft' ||
                        form.watch('category') === 'Sport Crafts' ||
                        form.watch('category') === 'Hide Crafts'
                    ) && (
                            <FormField
                                control={form.control}
                                name="finishing"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Finishing<span className="text-red-500">*</span></FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value}>
                                                <SelectTrigger className="bg-white text-gray-950">
                                                    <SelectValue placeholder="Select Finishing" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {carbonfootprint
                                                        .find(cat => cat.category === form.watch('category'))
                                                        ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                        ?.Finishing?.map((fin, index) => (
                                                            <SelectItem value={fin.name} key={index}>
                                                                {fin.name}
                                                            </SelectItem>
                                                        ))}
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}

                    {/* Cooking Field */}
                    {form.watch('subcategory') === 'Wazwan' && (
                        <FormField
                            control={form.control}
                            name="cooking"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Cooking<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder="Select Cooking" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {carbonfootprint
                                                    .find(cat => cat.category === form.watch('category'))
                                                    ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                    ?.CookingProcess?.map((cook, index) => (
                                                        <SelectItem value={cook.name} key={index}>
                                                            {cook.name}
                                                        </SelectItem>
                                                    ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    {/* Preparation Field */}
                    {form.watch('category') === 'Culinary weaving' && (
                        <FormField
                            control={form.control}
                            name="preparation" // Consider renaming to "preparation" for consistency
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Preparation<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder="Select Preparation" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {carbonfootprint
                                                    .find(cat => cat.category === form.watch('category'))
                                                    ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                    ?.Preparation?.map((prep, index) => (
                                                        <SelectItem value={prep.name} key={index}>
                                                            {prep.name}
                                                        </SelectItem>
                                                    ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    {/* Painting Field */}
                    {form.watch('subcategory') === 'Papier Mache' && (
                        <FormField
                            control={form.control}
                            name="painting"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Painting<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder="Select Painting" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {carbonfootprint
                                                    .find(cat => cat.category === form.watch('category'))
                                                    ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                    ?.PaintingAndLacquering?.map((paint, index) => (
                                                        <SelectItem value={paint.name} key={index}>
                                                            {paint.name}
                                                        </SelectItem>
                                                    ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    {/* Embroidery Field */}
                    {form.watch('subcategory') === 'Gabba' && (
                        <FormField
                            control={form.control}
                            name="embroidery" // Consider renaming to "embroidery" for consistency
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Embroidery<span className="text-red-500">*</span></FormLabel>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value}>
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder="Select Embroidery" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {carbonfootprint
                                                    .find(cat => cat.category === form.watch('category'))
                                                    ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                    ?.Embroidery?.map((embroider, index) => (
                                                        <SelectItem value={embroider.name} key={index}>
                                                            {embroider.name}
                                                        </SelectItem>
                                                    ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}

                    {/* Packaging Field */}
                    <FormField
                        control={form.control}
                        name="package"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Packaging<span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Packaging" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {carbonfootprint
                                                .find(cat => cat.category === form.watch('category'))
                                                ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                ?.Packaging?.map((pac, index) => (
                                                    <SelectItem value={pac.name} key={index}>
                                                        {pac.name}
                                                    </SelectItem>
                                                ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Transportation Field */}
                    <FormField
                        control={form.control}
                        name="transport"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transportation<span className="text-red-500">*</span></FormLabel>
                                <FormControl>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Transportation" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {carbonfootprint
                                                .find(cat => cat.category === form.watch('category'))
                                                ?.subcategory.find(sub => sub.name === form.watch('subcategory'))
                                                ?.Transportation?.map((trans, index) => (
                                                    <SelectItem value={trans.name} key={index}>
                                                        {trans.name}
                                                    </SelectItem>
                                                ))}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        variant="secondary"
                        className="mt-4 w-full"
                        disabled={estimateCarbon.isPending}
                    >
                        {estimateCarbon.isPending ? "Calculating" : "Calculate Carbon Footprint"}
                    </Button>
                </form>
            </Form>


            {calculations.lower != 0 && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded">
                    <h3 className="text-3xl font-montserrat mb-2">
                        Carbon Footprint Results
                    </h3>
                    <div className='grid gap-4'>
                        <p className='font-opensans'>
                            Estimated Carbon Footprint:<br />
                            <span className="text-secondary">{calculations.lower.toFixed(2)}-{calculations.upper.toFixed(2)}</span> kg CO2<br />
                        </p>
                    </div>
                </div >
            )}
        </>
    );
};

