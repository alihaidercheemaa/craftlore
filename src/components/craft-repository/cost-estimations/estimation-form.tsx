'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "~/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "~/components/ui/form"
import { Input } from "~/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select"
import { CRAFTCATEGORIES } from "~/constants"


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
})



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
                <Button type="submit" variant={'secondary'}>Calculate</Button>
            </form>
        </Form>
    )
}