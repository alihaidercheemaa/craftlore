// src/components/EstimationForm.tsx

'use client';

import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '~/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '~/components/ui/select';
import { CARBONCRAFTCATEGORIES, DKC_WAREHOUSE_CITIES, TRANSPORT_EFFICIENCIES, TRANSPORT_METHODS, MATERIAL_UNITS, PURCHASE_LOCATIONS, PRODUCTION_METHODS } from '~/constants';

// Define the form schema using Zod for validation
const formSchema = z.object({
    craftCategory: z.string({ required_error: 'Field is required.' }),
    craftType: z.string().nonempty('Craft Type is required.'),
    productionMethod: z.enum(['Handmade', 'Machine-made', 'Hybrid'], {
        errorMap: () => ({ message: 'Production Method is required.' }),
    }),
    materialUnit: z.enum(['Kilograms', 'Grams', 'Pounds'], {
        errorMap: () => ({ message: 'Material Unit is required.' }),
    }),
    materialWeight: z
        .number({
            required_error: 'Material Weight is required.',
            invalid_type_error: 'Material Weight must be a number.',
        })
        .positive('Material Weight must be positive.'),
    purchaseLocation: z
        .string()
        .nonempty('Purchase Location is required.'),
    transportDistance: z
        .number({
            required_error: 'Transportation Distance is required.',
            invalid_type_error: 'Transportation Distance must be a number.',
        })
        .nonnegative('Transportation Distance cannot be negative.'),
    warehouseCity: z.string().optional(),
    transportMethod: z.enum(['Air', 'Ship', 'Rail', 'Road'], {
        errorMap: () => ({ message: 'Transport Method is required.' }),
    }),
    transportEfficiency: z.enum(['Efficient (Bulk)', 'Less Efficient (Single)'], {
        errorMap: () => ({ message: 'Transportation Efficiency is required.' }),
    }),
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

    const [calculations, setCalculations] = useState<CarbonCalcultaion>({ footprintDirect: 0, footprintDKC: 0, kashmirCost: 0, usaCost: 0, warehouse: '' })

    const form = useForm<FormData>({
        resolver: zodResolver(formSchema)
    });

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
                        name="craftCategory"
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
                                            {CARBONCRAFTCATEGORIES.map((category) => (
                                                <SelectItem
                                                    key={category.name}
                                                    value={category.name}
                                                >
                                                    {category.displayName}
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
                        name="craftType"
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
                                                CARBONCRAFTCATEGORIES.find(category => form.watch('craftCategory') == category.name)?.craftTypes.map((categoryType, index) => (
                                                    <SelectItem value={categoryType} key={index}>{categoryType}</SelectItem>
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
                        name="productionMethod"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Production Method</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Production Method" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {PRODUCTION_METHODS.map((method) => (
                                                <SelectItem key={method} value={method}>
                                                    {method}
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
                        name="materialUnit"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Material Unit</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Material Unit" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {MATERIAL_UNITS.map((unit) => (
                                                <SelectItem key={unit} value={unit}>
                                                    {unit}
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
                        name="materialWeight"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Material Weight</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Enter material weight"
                                        className='text-gray-950'
                                        {...field}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (
                                                value === '' ||
                                                (/^\d+(\.\d+)?$/.test(value) && parseFloat(value) > 0)
                                            ) {
                                                field.onChange(
                                                    value === '' ? undefined : parseFloat(value)
                                                );
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
                        name="purchaseLocation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Purchase Location</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => {
                                            field.onChange(value)
                                            if (value == 'Directly from Kashmir')
                                                form.setValue('transportDistance', 7200)
                                        }}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Purchase Location" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {PURCHASE_LOCATIONS.map((location) => (
                                                <SelectItem key={location} value={location}>
                                                    {location}
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
                        name="transportDistance"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transportation Distance (Kms/Miles)</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        placeholder="Enter transportation distance"
                                        className='text-gray-950'
                                        {...field}
                                        disabled={form.watch('purchaseLocation') === 'Directly from Kashmir'}
                                        onChange={(e) => {
                                            const value = e.target.value;
                                            if (
                                                value === '' ||
                                                (/^\d+(\.\d+)?$/.test(value) && parseFloat(value) >= 0)
                                            ) {
                                                field.onChange(
                                                    value === '' ? undefined : parseFloat(value)
                                                );
                                            }
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {form.watch('purchaseLocation') == 'Purchased from DKC USA Warehouse' && (
                        <FormField
                            control={form.control}
                            name="warehouseCity"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>DKC Warehouse City</FormLabel>
                                    <FormControl>
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger className="bg-white text-gray-950">
                                                <SelectValue placeholder="Select Warehouse City" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {DKC_WAREHOUSE_CITIES.map((city) => (
                                                    <SelectItem key={city} value={city}>
                                                        {city}
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


                    <FormField
                        control={form.control}
                        name="transportMethod"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transport Method</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Transport Method" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {TRANSPORT_METHODS.map((method) => (
                                                <SelectItem key={method} value={method}>
                                                    {method}
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
                        name="transportEfficiency"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Transportation Efficiency</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger className="bg-white text-gray-950">
                                            <SelectValue placeholder="Select Efficiency" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {TRANSPORT_EFFICIENCIES.map((efficiency) => (
                                                <SelectItem key={efficiency} value={efficiency}>
                                                    {efficiency}
                                                </SelectItem>
                                            ))}
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

            {calculations.footprintDKC!=0 && (
                <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded">
                    <h3 className="text-3xl font-montserrat mb-2">
                        Carbon Footprint Results
                    </h3>
                    <div className='grid gap-4'>
                        <p className='font-opensans'>
                            Estimated Carbon Footprint:<br />
                            Product Shipped from Kashmir:<br />
                            {calculations.footprintDirect.toFixed(2)} kg CO2<br />
                        </p>
                        <p className='font-opensans'>
                            Estimated Carbon Footprint:<br />
                            Product Shipped From DKC USA Warehouse:<br />
                            {calculations.footprintDKC.toFixed(2)} kg CO2<br />
                        </p>
                        <strong className='text-secondary'>Thank you for choosing a more eco-friendly option!</strong>
                        <p>   By purchasing from the DKC USA Warehouse in {calculations.warehouse}, you&apos;ve helped reduce the carbon footprint of your purchase by {(calculations.footprintDirect - calculations.footprintDKC).toFixed(2)} kg CO2. Your choice contributes to a more sustainable and environmentally responsible future.</p>
                    </div>
                </div >
            )}
        </>
    );
};

