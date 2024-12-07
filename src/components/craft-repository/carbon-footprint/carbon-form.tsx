"use client";

import React, { useMemo, useState } from "react";
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
import { toast } from "~/hooks/use-toast";

const superData = {category:'',subcategory:''}
const formSchema = z
  .object({
    category: z.string({ required_error: "Field is required" }),
    subcategory: z.string({ required_error: "Field is required" }),
    rawMaterial: z.string({ required_error: "Field is required" }),
    package: z.string({ required_error: "Field is required" }),
    transport: z.string({ required_error: "Field is required" }),

    processing: z.string().optional(),
    production: z.string().optional(),
    crafting: z.string().optional(),
    installation: z.string().optional(),
    finishing: z.string().optional(),
    cooking: z.string().optional(),
    preparation: z.string().optional(),

    painting: z.string().optional(),
    embroidery: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (superData.category !== "Culinary weaving") {
      if (!data.processing) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["processing"],
        });
      }
    }

    if (superData.subcategory == "Pashmina Shawl") {
      if (!data.production) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["production"],
        });
      }
    } else {
      if (!data.crafting) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["crafting"],
        });
      }
    }

    if (superData.subcategory == "Khatamband" || superData.subcategory == "Pinjrakari") {
      if (!data.installation) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["installation"],
        });
      }
    }
    if (
      superData.category == "Sport Crafts" ||
      superData.category == "Hide Crafts" ||
      superData.subcategory == "Engraved Metalware" ||
      superData.subcategory == "Silverware Craft"
    ) {
      if (!data.finishing) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["finishing"],
        });
      }
    }
    if (data.subcategory == "Wazwan") {
      if (!data.cooking) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["cooking"],
        });
      }
    }

    if (superData.category == "Culinary weaving") {
      if (!data.preparation) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["preparation"],
        });
      }
    }
    if (superData.subcategory == "Papier Mache") {
      if (!data.painting) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["painting"],
        });
      }
    }
    if (superData.subcategory == "Gabba") {
      if (!data.embroidery) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Field is required",
          path: ["embroidery"],
        });
      }
    }
  });

type FormData = z.infer<typeof formSchema>;

export const CarbonForm: React.FC = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });
  const [calculations, setCalculations] = useState<{
    lower: number;
    upper: number;
  }>({ lower: 0, upper: 0 });

  const categories = api.category.getCategories.useQuery();
  const subcategories = api.category.getSubCategories.useQuery(
    { categoryId: form.watch("category") },
    { enabled: !!form.watch("category") },
  );

  const materials = api.category.getMaterialBySubCategory.useQuery(
    { subcategoryId: form.watch("subcategory") },
    { enabled: !!form.watch("subcategory") },
  );

  const sections = api.carbon.getSectionsBySubCategory.useQuery(
    { subCategoryId: form.watch("subcategory") },
    { enabled: !!form.watch("subcategory") },
  );

  const filteredCategory = useMemo(() => {
    const category =
      categories.data?.find(
        (category) => category.categoryId === form.watch("category"),
      )?.categoryName ?? "";
      superData.category = category
    return category;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, form.watch("category")]);

  const filteredSubCategory = useMemo(() => {
    const sub =
      subcategories.data?.find(
        (sub) => sub.subcategoryId === form.watch("subcategory"),
      )?.subcategoryName ?? "";
      superData.subcategory = sub
    return sub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, form.watch("subcategory")]);

  const estimateCarbon = api.cost.carbonFootPrint.useMutation({
    onSuccess: (data) => {
      setCalculations((prev) => ({
        ...prev,
        lower: data.totalLower,
        upper: data.totalUpper,
      }));
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Opps!",
        description: error.message,
      });
    },
  });

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
    });
  };

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
            name="rawMaterial"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Raw Material<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select Raw Material" />
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

          {filteredCategory !== "Culinary Weaving" && (
            <FormField
              control={form.control}
              name="processing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Processing<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Process" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Processing",
                          )
                          ?.uniqueNames?.map((process, index) => (
                            <SelectItem value={process} key={index}>
                              {process}
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

          {(() => {
            if (filteredSubCategory === "Pashmina Shawl") {
              return (
                <FormField
                  control={form.control}
                  name="production"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Production<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="bg-white text-gray-950">
                            <SelectValue placeholder="Select Production" />
                          </SelectTrigger>
                          <SelectContent>
                            {sections.data
                              ?.find(
                                (section) =>
                                  section.sectionType == "ProductionMethod",
                              )
                              ?.uniqueNames?.map((production, index) => (
                                <SelectItem value={production} key={index}>
                                  {production}
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
                      <FormLabel>
                        Crafting<span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                        >
                          <SelectTrigger className="bg-white text-gray-950">
                            <SelectValue placeholder="Select Crafting" />
                          </SelectTrigger>
                          <SelectContent>
                            {sections.data
                              ?.find(
                                (section) => section.sectionType == "Crafting",
                              )
                              ?.uniqueNames?.map((craft, index) => (
                                <SelectItem value={craft} key={index}>
                                  {craft}
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
          {(filteredSubCategory === "Khatamband" ||
            filteredSubCategory === "Pinjrakari") && (
            <FormField
              control={form.control}
              name="installation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Installation<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Installation" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Installation",
                          )
                          ?.uniqueNames?.map((install, index) => (
                            <SelectItem value={install} key={index}>
                              {install}
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
          {(filteredSubCategory === "Engraved Metalware" ||
            filteredSubCategory === "Silverware Craft" ||
            filteredCategory === "Sport Crafts" ||
            filteredCategory === "Hide Crafts") && (
            <FormField
              control={form.control}
              name="finishing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Finishing<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Finishing" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Finishing",
                          )
                          ?.uniqueNames?.map((finish, index) => (
                            <SelectItem value={finish} key={index}>
                              {finish}
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
          {filteredSubCategory === "Wazwan" && (
            <FormField
              control={form.control}
              name="cooking"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Cooking<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Cooking" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.sectionType == "CookingProcess",
                          )
                          ?.uniqueNames?.map((cooking, index) => (
                            <SelectItem value={cooking} key={index}>
                              {cooking}
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
          {filteredCategory === "Culinary Weaving" && (
            <FormField
              control={form.control}
              name="preparation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Preparation<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Preparation" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Preparation",
                          )
                          ?.uniqueNames?.map((preparation, index) => (
                            <SelectItem value={preparation} key={index}>
                              {preparation}
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
          {filteredSubCategory === "Papier Mache" && (
            <FormField
              control={form.control}
              name="painting"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Painting<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Painting" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.sectionType == "PaintingAndLacquering",
                          )
                          ?.uniqueNames?.map((painting, index) => (
                            <SelectItem value={painting} key={index}>
                              {painting}
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
          {filteredSubCategory === "Gabba" && (
            <FormField
              control={form.control}
              name="embroidery"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Embroidery<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select Embroidery" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.sectionType == "Embroidery",
                          )
                          ?.uniqueNames?.map((embroidery, index) => (
                            <SelectItem value={embroidery} key={index}>
                              {embroidery}
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
                <FormLabel>
                  Packaging<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select Packaging" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.data
                        ?.find((section) => section.sectionType == "Packaging")
                        ?.uniqueNames?.map((packaging, index) => (
                          <SelectItem value={packaging} key={index}>
                            {packaging}
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
                <FormLabel>
                  Transportation<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select Transportation" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.data
                        ?.find((section) => section.sectionType=="Transportation")
                        ?.uniqueNames?.map((process, index) => (
                          <SelectItem value={process} key={index}>
                            {process}
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
            {estimateCarbon.isPending
              ? "Calculating"
              : "Calculate Carbon Footprint"}
          </Button>
        </form>
      </Form>

      {calculations.lower != 0 && (
        <div className="mt-6 rounded border border-gray-200 bg-gray-50 p-4">
          <h3 className="mb-2 font-montserrat text-3xl">
            Carbon Footprint Results
          </h3>
          <div className="grid gap-4">
            <p className="font-opensans">
              Estimated Carbon Footprint:
              <br />
              <span className="text-secondary">
                {calculations.lower.toFixed(2)}-{calculations.upper.toFixed(2)}
              </span>{" "}
              kg CO2
              <br />
            </p>
          </div>
        </div>
      )}
    </>
  );
};
