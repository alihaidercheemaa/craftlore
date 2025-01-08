"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { useState } from "react";
import {
  CldUploadWidget,
  type CloudinaryUploadWidgetResults,
} from "next-cloudinary";
import { api } from "~/trpc/react";
import { useToast } from "~/hooks/use-toast";
import { Container } from "~/components/common/container";

const formSchema = z.object({
  fullName: z.string({ required_error: "Name is required." }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email format is wrong." }),
  job: z.string({ required_error: "Job is required." }),
  jobCode: z.string({ required_error: "Job code is required." }),
});
export const CareerForm = () => {
  const { toast } = useToast();
  const [allow, setAllow] = useState<boolean>(false);
  const [files, setFiles] = useState<string[]>([]);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const submitJob = api.application.addApplication.useMutation({
    onSuccess: () => {
      form.reset();
      toast({
        title: "Success",
        description: "Job applied",
      });
    },
    onError: (error) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    },
  });

  const formSubmission = (data: z.infer<typeof formSchema>) => {
    if (!allow) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please submit resume and cover letter",
      });
    }
    submitJob.mutate({
      fullName: data.fullName,
      email: data.email,
      job: data.job,
      jobCode: data.jobCode,
      resume: files[0] ?? "none",
      coverLetter: files[1] ?? "none",
    });
  };
  return (
    <section className="col-span-12 gap-4 bg-[#e5edf7]">
      <Container className="mb-32 lg:container">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(formSubmission)}
            className="space-y-6"
          >
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email address"
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
              name="job"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Jon Applied for</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter job name"
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
              name="jobCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Job Code</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter job code"
                      {...field}
                      value={field.value ?? ""}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid gap-2">
              <FormLabel>Resume & cover letter</FormLabel>
              <CldUploadWidget
                options={{ sources: ["local"] }}
                uploadPreset="craftlore"
                onSuccess={(result: CloudinaryUploadWidgetResults) => {
                  const info = result.info;
                  if (typeof info != "string")
                    setFiles((prev) => {
                      const flag = prev.every(
                        (file) => file != info?.secure_url,
                      );
                      if (flag) prev.push(info?.secure_url ?? "");
                      return prev;
                    });
                  setAllow(true);
                }}
              >
                {({ open }) => {
                  function handleOnClick() {
                    open();
                  }
                  return (
                    <Button
                      type="button"
                      onClick={handleOnClick}
                      className="w-fit bg-white text-gray-900 hover:text-white"
                    >
                      Upload files
                    </Button>
                  );
                }}
              </CldUploadWidget>
            </div>
            <Button type="submit" variant={"secondary"}>
              Submit
            </Button>
          </form>
        </Form>
      </Container>
    </section>
  );
};
