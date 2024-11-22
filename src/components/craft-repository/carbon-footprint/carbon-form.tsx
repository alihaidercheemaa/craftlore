'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { carbonfootprint } from '~/constants/carbon';

const formSchema = z.object({
    category: z.string({required_error:'Field is required'}),
    subcategory: z.string({required_error:'Field is required'}),
    rawMaterial: z.string().optional(),
    processing: z.string().optional(),
    production: z.string().optional(),
    package: z.string({required_error:'Field is required'}),
    transport: z.string({required_error:'Field is required'}),
    crafting: z.string().optional(),
    installation: z.string().optional(),
    finishing: z.string().optional(),
    cooking: z.string().optional(),
    preperation: z.string().optional(),
    painting: z.string().optional(),
    embriodery: z.string().optional(),
}).superRefine()

type FormData = z.infer<typeof formSchema>;

type CarbonCalcultaion = {
    footprintDirect: number
    footprintDKC: number
    kashmirCost: number
    usaCost: number
    warehouse: string
}

export const CarbonForm: React.FC = () => {

    const [calculations, setCalculations] = useState<CarbonCalcultaion>({ footprintDirect: 0, footprintDKC: 0, kashmirCost: 0, usaCost: 0, warehouse: '' })

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema)
    });

    const selectedSubcategory = carbonfootprint
        .find(category => form.watch('category') === category.category)
        ?.subcategory
        ?.find(sub => form.watch('subcategory') === sub.name);

    const dropdownOptions = selectedSubcategory?.Crafting
        ? { name: "crafting", label: "Crafting", options: selectedSubcategory.Crafting }
        : selectedSubcategory?.ProductionMethod
            ? { name: "production", label: "Production", options: selectedSubcategory.ProductionMethod }
            : null;


    const calculateEnergyConsumption = (craftType: string, productionMethod: string): number => {
        let energyConsumption = 0;

        if (productionMethod === 'Handmade') {
            if (craftType.includes('Weaving')) {
                energyConsumption = 5; // kWh per kg
            } else if (craftType.includes('Embroidery')) {
                energyConsumption = 3;
            } else {
                energyConsumption = 2;
            }
        } else if (productionMethod === 'Machine-made') {
            if (craftType.includes('Weaving')) {
                energyConsumption = 20;
            } else if (craftType.includes('Embroidery')) {
                energyConsumption = 15;
            } else {
                energyConsumption = 10;
            }
        } else if (productionMethod === 'Hybrid') {
            energyConsumption = 10;
        }

        return energyConsumption;
    };

    // Function to get primary material based on craft type
    const getPrimaryMaterial = (craftType: string): string => {
        if (craftType.includes('Weaving')) {
            return 'Pashmina Wool';
        } else if (craftType.includes('Embroidery')) {
            return 'Silk';
        } else if (craftType.includes('Wood')) {
            return 'Wood';
        } else if (craftType.includes('Recycled')) {
            return 'Recycled Materials';
        } else if (craftType.includes('Sports')) {
            return 'Wood';
        } else if (craftType.includes('Hide')) {
            return 'Leather';
        } else if (craftType.includes('Culinary')) {
            return 'Food Ingredients';
        }
        return 'Unknown';
    };

    const convertToKilograms = (weight: number, unit: string): number => {
        switch (unit) {
            case 'Kilograms':
                return weight;
            case 'Grams':
                return weight / 1000;
            case 'Pounds':
                return weight * 0.453592;
            default:
                return weight; // Default to kilograms if unit is unrecognized
        }
    };


    const onSubmit = (data: FormData) => {
        const {
            craftType,
            productionMethod,
            materialUnit,
            materialWeight,
            purchaseLocation,
            transportMethod,
            transportDistance,
            transportEfficiency,
            warehouseCity,
        } = data;

        // Convert material weight to kilograms
        const materialWeightKg = convertToKilograms(materialWeight, materialUnit);

        const material = getPrimaryMaterial(craftType);
        const energyConsumptionPerKg = calculateEnergyConsumption(
            craftType,
            productionMethod
        );

        // Total energy consumption based on material weight
        const totalEnergyConsumption = energyConsumptionPerKg * materialWeightKg;

        let footprintDirect = 0;
        let footprintDKC = 0;

        // Assign base carbon footprint based on material per kilogram
        switch (material) {
            case 'Pashmina Wool':
                footprintDirect += 50 * materialWeightKg;
                break;
            case 'Silk':
                footprintDirect += 40 * materialWeightKg;
                break;
            case 'Wood':
                footprintDirect += 30 * materialWeightKg;
                break;
            case 'Recycled Materials':
                footprintDirect += 20 * materialWeightKg;
                break;
            case 'Leather':
                footprintDirect += 60 * materialWeightKg;
                break;
            case 'Food Ingredients':
                footprintDirect += 25 * materialWeightKg;
                break;
            default:
                footprintDirect += 10 * materialWeightKg;
        }

        // Add energy consumption scaled by material weight
        footprintDirect += totalEnergyConsumption * 0.05; // kg CO₂ per kWh
        footprintDKC += (totalEnergyConsumption * 0.05) / 5; // 500% less footprint for DKC option

        // Determine transport factor based on transport method
        let transportFactor = 0;
        switch (transportMethod) {
            case 'Air':
                transportFactor = 0.2;
                break;
            case 'Ship':
                transportFactor = 0.1;
                break;
            case 'Rail':
                transportFactor = 0.07;
                break;
            case 'Road':
                transportFactor = 0.05;
                break;
            default:
                transportFactor = 0.05;
        }

        // Add transportation footprint scaled by material weight
        footprintDirect += transportDistance * transportFactor * materialWeightKg;
        footprintDKC += (transportDistance * transportFactor * materialWeightKg) / 5; // 500% reduction for DKC option

        // Adjust for transportation efficiency
        if (transportEfficiency === 'Efficient (Bulk)') {
            footprintDirect /= 5; // Reduce footprint by 80%
            footprintDKC /= 2; // Reduce footprint by 50%
        }
        if (purchaseLocation === 'Purchased from DKC USA Warehouse') {
            setCalculations((prev) => ({
                ...prev,
                warehouse: warehouseCity ?? '',
                usaCost: footprintDirect - footprintDKC,
                footprintDirect: footprintDirect,
                footprintDKC: footprintDKC
            }))
        } else {
            setCalculations((prev) => ({
                ...prev,
                kashmirCost: footprintDirect - footprintDKC,
                footprintDirect: footprintDirect,
                footprintDKC: footprintDKC
            }))
        }
    };


    return (
        <>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="grid gap-4 text-white [&_label]:text-xl"
                >
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Craft Category</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Craft Category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {carbonfootprint.map((category) => (
                                                <SelectItem
                                                    key={category.category}
                                                    value={category.category}
                                                >
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
                    <FormField
                        control={form.control}
                        name="subcategory"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Craft Type</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Craft Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                carbonfootprint.find(category => form.watch('category') == category.category)?.subcategory.map((sub, index) => (
                                                    <SelectItem value={sub.name} key={index}>{sub.name}</SelectItem>
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
                        name="rawMaterial"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Raw material</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select raw material" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                carbonfootprint
                                                    .find(category => form.watch('category') == category.category)?.subcategory
                                                    .find(sub => form.watch('subcategory') == sub.name)?.RawMaterial
                                                    .map((raw, index) => (
                                                        <SelectItem value={raw.name} key={index}>{raw.name}</SelectItem>
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
                        name="processing"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Processing</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select process" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                carbonfootprint
                                                    .find(category => form.watch('category') == category.category)?.subcategory
                                                    .find(sub => form.watch('subcategory') == sub.name)?.Processing
                                                    ?.map((process, index) => (
                                                        <SelectItem value={process.name} key={index}>{process.name}</SelectItem>
                                                    ))
                                            }
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {dropdownOptions && (
                        <FormField
                            control={form.control}
                            name={dropdownOptions.name as "crafting" | "production"}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>{dropdownOptions.label}</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder={`Select ${dropdownOptions.label.toLowerCase()}`} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {dropdownOptions.options.map((option, index) => (
                                                    <SelectItem value={option.name} key={index}>
                                                        {option.name}
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
                    {
                        form.watch('subcategory') == 'Khatamband' ||
                        form.watch('subcategory') == 'Pinjrakari'
                        && <FormField
                            control={form.control}
                            name={"installation"}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Installation</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder={`Select installation`} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {
                                                    carbonfootprint
                                                        .find(category => form.watch('category') == category.category)?.subcategory
                                                        .find(sub => form.watch('subcategory') == sub.name)?.Installation
                                                        ?.map((install, index) => (
                                                            <SelectItem value={install.name} key={index}>{install.name}</SelectItem>
                                                        ))
                                                }
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    }
                    {
                        form.watch('subcategory') == 'Engraved Metalware' ||
                        form.watch('category') == 'Sport Crafts'
                        && <FormField
                            control={form.control}
                            name={"finishing"}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Finishing</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder={`Select finishing`} />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {
                                                    carbonfootprint
                                                        .find(category => form.watch('category') == category.category)?.subcategory
                                                        .find(sub => form.watch('subcategory') == sub.name)?.Finishing
                                                        ?.map((finishing, index) => (
                                                            <SelectItem value={finishing.name} key={index}>{finishing.name}</SelectItem>
                                                        ))
                                                }
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    }
                    <FormField
                        control={form.control}
                        name={"cooking"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Cooking</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder={`Select cooking`} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                carbonfootprint
                                                    .find(category => form.watch('category') == category.category)?.subcategory
                                                    .find(sub => form.watch('subcategory') == sub.name)?.CookingProcess
                                                    ?.map((cooking, index) => (
                                                        <SelectItem value={cooking.name} key={index}>{cooking.name}</SelectItem>
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
                        name={"preperation"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Preperation</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder={`Select preperation`} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                carbonfootprint
                                                    .find(category => form.watch('category') == category.category)?.subcategory
                                                    .find(sub => form.watch('subcategory') == sub.name)?.Preparation
                                                    ?.map((prepare, index) => (
                                                        <SelectItem value={prepare.name} key={index}>{prepare.name}</SelectItem>
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
                        name={"painting"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Painting</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder={`Select painring`} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                carbonfootprint
                                                    .find(category => form.watch('category') == category.category)?.subcategory
                                                    .find(sub => form.watch('subcategory') == sub.name)?.PaintingAndLacquering
                                                    ?.map((prepare, index) => (
                                                        <SelectItem value={prepare.name} key={index}>{prepare.name}</SelectItem>
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
                        name={"embriodery"}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Embriodery</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder={`Select embriodery`} />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                carbonfootprint
                                                    .find(category => form.watch('category') == category.category)?.subcategory
                                                    .find(sub => form.watch('subcategory') == sub.name)?.Embroidery
                                                    ?.map((prepare, index) => (
                                                        <SelectItem value={prepare.name} key={index}>{prepare.name}</SelectItem>
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
                        name="package"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Packaging</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select  packaging" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                carbonfootprint
                                                    .find(category => form.watch('category') == category.category)?.subcategory
                                                    .find(sub => form.watch('subcategory') == sub.name)?.Packaging
                                                    .map((pac, index) => (
                                                        <SelectItem value={pac.name} key={index}>{pac.name}</SelectItem>
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
                        name="transport"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transportation</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select  transportation" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {
                                                carbonfootprint
                                                    .find(category => form.watch('category') == category.category)?.subcategory
                                                    .find(sub => form.watch('subcategory') == sub.name)?.Transportation
                                                    .map((trans, index) => (
                                                        <SelectItem value={trans.name} key={index}>{trans.name}</SelectItem>
                                                    ))
                                            }
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        variant={'secondary'}
                        className="mt-4 w-full"
                    >
                        Calculate Carbon Footprint
                    </Button>
                </form>
            </Form>

            {calculations.footprintDKC != 0 && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded">
                    <h3 className="text-3xl font-montserrat mb-2">
                        Carbon Footprint Results
                    </h3>
                    <div className='grid gap-4'>
                        <p className='font-opensans'>
                            Estimated Carbon Footprint:<br />
                            Product Shipped from Kashmir:<br />
                            <span className="text-secondary">{calculations.footprintDirect.toFixed(2)}</span> kg CO2<br />
                        </p>
                        <p className='font-opensans'>
                            Estimated Carbon Footprint:<br />
                            Product Shipped From DKC USA Warehouse:<br />
                            <span className="text-secondary">{calculations.footprintDKC.toFixed(2)}</span> kg CO2<br />
                        </p>
                        <strong className='text-secondary'>Thank you for choosing a more eco-friendly option!</strong>
                        <p>   By purchasing from the DKC USA Warehouse in {calculations.warehouse}, you&apos;ve helped reduce the carbon footprint of your purchase by <span className='text-secondary'>{(calculations.footprintDirect - calculations.footprintDKC).toFixed(2)}</span> kg CO2. Your choice contributes to a more sustainable and environmentally responsible future.</p>
                    </div>
                </div >
            )}
        </>
    );
};

