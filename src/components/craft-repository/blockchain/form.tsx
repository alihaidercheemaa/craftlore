"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMemo } from "react";
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
import { Input } from "~/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { api } from "~/trpc/react";

const superData = { category: "", subcategory: "" };
const formSchema = z
  .object({
    // Common to all H1 sections
    category: z.string({ required_error: "Category is required." }),
    subcategory: z.string({ required_error: "Category type is required." }),
    rawMaterial: z.string({ required_error: "Field is required." }),
    quality: z.string({ required_error: "Field is required." }),
    productionMethod: z.string({ required_error: "Field is required." }),
    colorShade: z.string({ required_error: "Field is required." }),
    embellishment: z.string({ required_error: "Field is required." }),
    weightType: z.string({
      required_error: "Material weight type is required.",
    }),
    weight: z.number({ required_error: "Material weight is required." }),
    purchaseLocation: z.string({
      required_error: "Purchase location is required.",
    }),
    shippingDistance: z.number({
      required_error: "Shipping distance is required.",
    }),
    warehouse: z.string({ required_error: "Warehouse is required." }),
    shippingMethod: z.string({
      required_error: "Shipping method is required.",
    }),
    efficiency: z.string({ required_error: "Efficiency is required." }),

    // Fields specific to certain H1 sections
    weavingType: z.string({ required_error: "Field is required." }).optional(), // Required for Boutique - Pashmina, Cashmere, Silk
    dyeingType: z.string({ required_error: "Field is required." }).optional(), // Required for Boutique - Pashmina, Cashmere, Silk, Kani
    productLine: z.string({ required_error: "Field is required." }).optional(), // Required for Boutique - Pashmina, Cashmere, Silk, Kani
    plyType: z.string({ required_error: "Field is required." }).optional(), // Required for Boutique - Pashmina, Cashmere, Silk
    certificate: z.string().optional(), // Optional for Boutique - Jackets
    design: z.string().optional(), // Specific to Boutique - Kani
    embroidery: z.string().optional(), // Specific to Boutique - Bags & Purses, Jackets, Kurtas
    size: z.string().optional(), // Specific to Boutique - Jackets, Kurtas, Interior - Papier
    finishing: z.string().optional(), // Specific to Boutique - Jewelry
    jewelryType: z.string().optional(), // Specific to Boutique - Jewelry
    productType: z.string().optional(), // Specific to Interior - Papier

    knotPerInch: z.string().optional(), // Specific to Rugs and Carpets

    carvingTechniques: z.string().optional(), // Specific to Walnut Wood Carving Furniture
    scaleOfCarving: z.string().optional(), // Specific to Walnut Wood Carving Furniture
    materialGrading: z.string().optional(), // Specific to Walnut Wood Carving Furniture
    certifications: z.string().optional(), // Common for Interior Decor, Rugs, Walnutware, etc.
    productTypesAndSizes: z.string().optional(), // Specific to Interior Decor, Dining Ware
    carvingDetails: z.string().optional(), // Specific to Room Dividers, Ceiling Treatment
  })
  .superRefine((data, ctx) => {
    if (
      superData.subcategory.toLowerCase().includes("pashmina") ||
      superData.subcategory.toLowerCase().includes("cashmere") ||
      superData.subcategory.toLowerCase().includes("silk")
    ) {
      // Ensure weaving type is provided
      if (!data.weavingType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Weaving type is required for this subcategory.",
          path: ["weavingType"],
        });
      }
  
      // Ensure ply type is provided
      if (!data.plyType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Ply type is required for this subcategory.",
          path: ["plyType"],
        });
      }
  
      // Ensure dyeing type is provided
      if (!data.dyeingType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Dyeing type is required for this subcategory.",
          path: ["dyeingType"],
        });
      }
  
      // Ensure product line is provided
      if (!data.productLine) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Product line & Size is required for this subcategory.",
          path: ["productLine"],
        });
      }
    }
  
    // Specific validations for Kani
    if (superData.subcategory.toLowerCase().includes("kani")) {
      // Ensure design is provided
      if (!data.design) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Design is required for this subcategory.",
          path: ["design"],
        });
      }
  
      // Ensure dyeing type is provided
      if (!data.dyeingType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Dyeing type is required for this subcategory.",
          path: ["dyeingType"],
        });
      }
  
      // Ensure product line is provided
      if (!data.productLine) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Product line & Size is required for this subcategory.",
          path: ["productLine"],
        });
      }
    }
  
    // Specific validations for Kurtas, Jackets, and Bags
    if (
      superData.subcategory.toLowerCase().includes("kurtas") ||
      superData.subcategory.toLowerCase().includes("jackets") ||
      superData.subcategory.toLowerCase().includes("bags")
    ) {
      // Ensure embroidery is provided
      if (!data.embroidery) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Embroidery is required for this subcategory.",
          path: ["embroidery"],
        });
      }
    }
  
    // Specific validations for Kurtas, Jackets, and Papier
    if (
      superData.subcategory.toLowerCase().includes("kurtas") ||
      superData.subcategory.toLowerCase().includes("jackets") ||
      superData.subcategory.toLowerCase().includes("papier")
    ) {
      // Ensure size is provided
      if (!data.size) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Size is required for this subcategory.",
          path: ["size"],
        });
      }
    }
  
    // Specific validations for Jewelry
    if (superData.subcategory.toLowerCase().includes("jewelry")) {
      // Ensure jewelry type is provided
      if (!data.jewelryType) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Jewelry type is required for this subcategory.",
          path: ["jewelryType"],
        });
      }
  
      // Ensure finishing is provided
      if (!data.finishing) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Finishing is required for this subcategory.",
          path: ["finishing"],
        });
      }
    }
  
    // Specific validations for Walnut Wood
    if (superData.subcategory.toLowerCase().includes("walnut wood")) {
      // Ensure carving techniques are provided
      if (!data.carvingTechniques) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Carving techniques are required for this subcategory.",
          path: ["carvingTechniques"],
        });
      }
  
      // Ensure scale of carving is provided
      if (!data.scaleOfCarving) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Scale of carving is required for this subcategory.",
          path: ["scaleOfCarving"],
        });
      }
  
      // Ensure material grading is provided
      if (!data.materialGrading) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Material grading is required for this subcategory.",
          path: ["materialGrading"],
        });
      }
    }
  
    // Specific validations for Room and Ceiling
    if (
      superData.subcategory.toLowerCase().includes("room") ||
      superData.subcategory.toLowerCase().includes("ceiling")
    ) {
      // Ensure carving details are provided
      if (!data.carvingDetails) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Carving details are required for this subcategory.",
          path: ["carvingDetails"],
        });
      }
    }
  });

export const BlockchainForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
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
  const sections = api.price.getSectionsBySubCategory.useQuery(
    { subCategoryId: form.watch("subcategory") },
    { enabled: !!form.watch("subcategory") },
  );


  const filteredSubCategory = useMemo(() => {
    const sub =
      subcategories.data?.find(
        (sub) => sub.subcategoryId === form.watch("subcategory"),
      )?.subcategoryName ?? "";
    superData.subcategory = sub;
    return sub;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, form.watch("subcategory")]);

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
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
              <FormLabel>Craft category</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value ?? ""}
              >
                <FormControl>
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select a craft category" />
                  </SelectTrigger>
                </FormControl>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subcategory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Craft Type<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
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
        <FormField
          control={form.control}
          name="rawMaterial"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Material Type<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
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
        <FormField
          control={form.control}
          name="quality"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Quality<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select Quality" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.data
                      ?.find((section) => section.priceSectionType == "Quality")
                      ?.uniqueNames?.map((quality, index) => (
                        <SelectItem value={quality} key={index}>
                          {quality}
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
          name="productionMethod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Production<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select Production" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.data
                      ?.find(
                        (section) =>
                          section.priceSectionType == "ProductionProcess",
                      )
                      ?.uniqueNames?.map((quality, index) => (
                        <SelectItem value={quality} key={index}>
                          {quality}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* weavingType & plytype */}
        {(filteredSubCategory.toLowerCase().includes("pashmina") ||
          filteredSubCategory.toLowerCase().includes("cashmere") ||
          filteredSubCategory.toLowerCase().includes("silk")) && (
          <>
            <FormField
              control={form.control}
              name="weavingType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Type of Weaving<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select weaving type" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.priceSectionType == "TypeOfWeaving",
                          )
                          ?.uniqueNames?.map((quality, index) => (
                            <SelectItem value={quality} key={index}>
                              {quality}
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
              name="plyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Type of Ply<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select ply" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.priceSectionType == "PlyType",
                          )
                          ?.uniqueNames?.map((quality, index) => (
                            <SelectItem value={quality} key={index}>
                              {quality}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* product line (size) and dyeing  */}
        {(filteredSubCategory.toLowerCase().includes("pashmina") ||
          filteredSubCategory.toLowerCase().includes("cashmere") ||
          filteredSubCategory.toLowerCase().includes("silk") ||
          filteredSubCategory.toLowerCase().includes("kani")) && (
          <>
            <FormField
              control={form.control}
              name="dyeingType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Type of Dyeing<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select dyeing type" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) => section.priceSectionType == "DyeTypes",
                          )
                          ?.uniqueNames?.map((quality, index) => (
                            <SelectItem value={quality} key={index}>
                              {quality}
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
              name="productLine"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Product line & Size<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select product line" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.priceSectionType == "ProductLineSize",
                          )
                          ?.uniqueNames?.map((quality, index) => (
                            <SelectItem value={quality} key={index}>
                              {quality}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* certificate */}
        {!filteredSubCategory.includes("jackets") && (
          <FormField
            control={form.control}
            name="certificate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Certificate<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                  >
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select certificate" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.data
                        ?.find(
                          (section) =>
                            section.priceSectionType == "ProductCertifications",
                        )
                        ?.uniqueNames?.map((quality, index) => (
                          <SelectItem value={quality} key={index}>
                            {quality}
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

        {/* design */}
        {filteredSubCategory.toLowerCase().includes("kani") && (
          <FormField
            control={form.control}
            name="design"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Design<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                  >
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select a design" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.data
                        ?.find(
                          (section) =>
                            section.priceSectionType == "DesignPatternTypes",
                        )
                        ?.uniqueNames?.map((design, index) => (
                          <SelectItem value={design} key={index}>
                            {design}
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

        {/* Embroidery */}
        {(filteredSubCategory.toLowerCase().includes("kurtas") ||
          filteredSubCategory.toLowerCase().includes("jackets") ||
          filteredSubCategory.toLowerCase().includes("bags")) && (
          <FormField
            control={form.control}
            name="embroidery"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Embriodery<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                  >
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select a embroidery" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.data
                        ?.find(
                          (section) => section.priceSectionType == "Embroidery",
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

        {/* Size pending */}
        {(filteredSubCategory.toLowerCase().includes("kurtas") ||
          filteredSubCategory.toLowerCase().includes("jackets") ||
          filteredSubCategory.toLowerCase().includes("papier")) && (
          <FormField
            control={form.control}
            name="size"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Size<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                  >
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select a size" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.data
                        ?.find(
                          (section) => section.priceSectionType == "Embroidery",
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
        {/* finishing and jewelryType(pending) */}
        {filteredSubCategory.toLowerCase().includes("jewelry") && (
          <>
            <FormField
              control={form.control}
              name="jewelryType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Jewelry Type<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select a jewelery type" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.priceSectionType == "Embroidery",
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
            <FormField
              control={form.control}
              name="finishing"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Finishing<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select a finishing" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.priceSectionType == "Finishing",
                          )
                          ?.uniqueNames?.map((finishing, index) => (
                            <SelectItem value={finishing} key={index}>
                              {finishing}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}

        {/* scaleOfCarving, materialGrading & carvingTechniques */}
        {filteredSubCategory.toLowerCase().includes("walnut wood") && (
          <>
            <FormField
              control={form.control}
              name="carvingTechniques"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Craving Techniques<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select a craving technique" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.priceSectionType == "CarvingTechniques",
                          )
                          ?.uniqueNames?.map((craving, index) => (
                            <SelectItem value={craving} key={index}>
                              {craving}
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
              name="scaleOfCarving"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Scale of craving<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select a craving scale" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.priceSectionType == "ScaleOfCarving",
                          )
                          ?.uniqueNames?.map((scale, index) => (
                            <SelectItem value={scale} key={index}>
                              {scale}
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
              name="materialGrading"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Material Grading<span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                    >
                      <SelectTrigger className="bg-white text-gray-950">
                        <SelectValue placeholder="Select a material grading" />
                      </SelectTrigger>
                      <SelectContent>
                        {sections.data
                          ?.find(
                            (section) =>
                              section.priceSectionType == "MaterialGrading",
                          )
                          ?.uniqueNames?.map((grading, index) => (
                            <SelectItem value={grading} key={index}>
                              {grading}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        {/* craving detail */}
        {(filteredSubCategory.toLowerCase().includes("room") ||
          filteredSubCategory.toLowerCase().includes("ceiling")) && (
          <FormField
            control={form.control}
            name="materialGrading"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Craving Details<span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value ?? ""}
                  >
                    <SelectTrigger className="bg-white text-gray-950">
                      <SelectValue placeholder="Select a craving detail" />
                    </SelectTrigger>
                    <SelectContent>
                      {sections.data
                        ?.find(
                          (section) =>
                            section.priceSectionType == "CarvingTechniques",
                        )
                        ?.uniqueNames?.map((details, index) => (
                          <SelectItem value={details} key={index}>
                            {details}
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
          name="colorShade"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Color shade<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select color shade" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.data
                      ?.find(
                        (section) => section.priceSectionType == "ColorShades",
                      )
                      ?.uniqueNames?.map((quality, index) => (
                        <SelectItem value={quality} key={index}>
                          {quality}
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
          name="embellishment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Embellishment<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  value={field.value ?? ""}
                >
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select embellishment" />
                  </SelectTrigger>
                  <SelectContent>
                    {sections.data
                      ?.find(
                        (section) =>
                          section.priceSectionType == "Embellishments",
                      )
                      ?.uniqueNames?.map((quality, index) => (
                        <SelectItem value={quality} key={index}>
                          {quality}
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
          name="weightType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Material weight type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select a production method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="kilo">Kilograms</SelectItem>
                  <SelectItem value="gram">Grams</SelectItem>
                  <SelectItem value="pound">Pounds</SelectItem>
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
              <FormLabel>Material weight</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value + ""}
              >
                <FormControl>
                  <Input
                    className="text-gray-950"
                    placeholder="Enter the total weight"
                    {...field}
                    value={field.value ?? ""}
                    onChange={(e) => {
                      const value = e.target.value;
                      if (
                        value === "" ||
                        (/^\d+$/.test(value) && parseInt(value) > 0)
                      ) {
                        field.onChange(
                          value === "" ? undefined : parseInt(value),
                        );
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
              <FormLabel>Purchase location</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value);
                  if (value == "kashmir")
                    form.setValue("shippingDistance", 7200);
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger className="bg-white text-gray-950">
                    <SelectValue placeholder="Select a purchase location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="kashmir">Directly from kashmir</SelectItem>
                  <SelectItem value="usa">
                    Purchased from DKC USA Warehouse
                  </SelectItem>
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
              <FormLabel>Shipping distance (miles)</FormLabel>
              <FormControl>
                <Input
                  className="text-gray-950"
                  placeholder="Enter the total shipping distance"
                  {...field}
                  value={field.value ?? ""}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (
                      value === "" ||
                      (/^\d+$/.test(value) && parseInt(value) > 0)
                    ) {
                      field.onChange(
                        value === "" ? undefined : parseInt(value),
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
                  <SelectItem value="single">
                    Less Efficient (Single)
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={"secondary"}>
          Calculate
        </Button>
      </form>
    </Form>
  );
};
