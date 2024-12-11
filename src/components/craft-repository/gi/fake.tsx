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
import { api } from "~/trpc/react";
import { useToast } from "~/hooks/use-toast";

const formSchema = z.object({
  fullName: z.string({ required_error: "Field is required" }),
  email: z
    .string({ required_error: "Field is required" })
    .email({ message: "format not supported." }),
  report: z.string({ required_error: "Field is required" }),
  productCode: z
  .string({ required_error: "Field is required" })
  .max(8, { message: "Product code cannot exceed 8 characters." }),
});

type FormData = z.infer<typeof formSchema>;

export const FakeReportingForm = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const submitReport = api.gi.createGIReport.useMutation({
    onSuccess: () => {
      form.reset();
      toast({
        variant: "default",
        title: "Success!",
        description: "Report submitted",
      });
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
    submitReport.mutate({
      fullName: data.fullName,
      email: data.email,
      report: data.report,
      productCode: data.productCode,
    });
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
          name="productCode"
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
        <Button
          type="submit"
          variant="secondary"
          className="mt-4 w-fit"
          disabled={submitReport.isPending}
        >
          {submitReport.isPending ? "Submitting" : " Submit report"}
        </Button>
      </form>
    </Form>
  );
};
