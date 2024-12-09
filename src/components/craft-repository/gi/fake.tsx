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
import { Input } from "~/components/ui/input";

const formSchema = z.object({
  fullName: z.string({ required_error: "Field is required" }),
  email: z
    .string({ required_error: "Field is required" })
    .email({ message: "format not supported." }),
  report: z.string({ required_error: "Field is required" }),
  id: z.string({ required_error: "Field is required" }),
});

type FormData = z.infer<typeof formSchema>;

export const FakeReportingForm = () => {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
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
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Full name<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter yoour name"
                  className="text-gray-900"
                  {...field}
                  value={field.value ?? ""}
                />
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
              <FormLabel>
                Email<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  className="text-gray-900"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="report"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Report details<span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter report details"
                  className="text-gray-900"
                  {...field}
                  value={field.value ?? ""}
                />
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
                <Input
                  placeholder="Enter ID"
                  className="text-gray-900"
                  {...field}
                  value={field.value ?? ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button */}
        <Button type="submit" variant="secondary" className="mt-4 w-fit">
          Submit report
        </Button>
      </form>
    </Form>
  );
};
