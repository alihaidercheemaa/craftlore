"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/trpc/react";
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  category: z.string({ required_error: "Field is required" }),
  subcategory: z.string({ required_error: "Field is required" }),
  product: z.string({ required_error: "Field is required" }),
  id: z.string({ required_error: "Field is required" }),
});

type FormData = z.infer<typeof formSchema>;

export const ReportingForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const categories = api.category.getCategories.useQuery();
  const subcategories = api.category.getSubCategories.useQuery(
    { categoryId: form.watch("category") },
    { enabled: !!form.watch("category") },
  );

  const materials = api.category.getMaterialBySubCategory.useQuery(
    { subcategoryId: form.watch("subcategory") },
    { enabled: !!form.watch("subcategory") },
  );

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
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
              <FormLabel>
                Craft Category<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select Craft Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.data?.map((category) => (
                      <SelectItem
                        key={category.categoryId}
                        value={category.categoryId}
                      >
                        {category.categoryName}
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
              <FormLabel>
                Craft Type<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select Craft Type" />
                  </SelectTrigger>
                  <SelectContent>
                    {subcategories.data?.map((sub, index) => (
                      <SelectItem value={sub.subcategoryId} key={index}>
                        {sub.subcategoryName}
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
          name="product"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Product<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent>
                    {materials.data?.map((raw, index) => (
                      <SelectItem value={raw.materialId} key={index}>
                        {raw.materialName}
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
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                ID (8 Digit Craft Code)<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter ID" className="text-gray-900"{...field} value={field.value ?? ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button */}
        <Button type="submit" variant="secondary" className="mt-4 w-fit">
          Verify your product
        </Button>
      </form>
    </Form>
  );
};
