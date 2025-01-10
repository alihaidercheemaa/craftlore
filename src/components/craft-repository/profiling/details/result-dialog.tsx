import { z } from "zod";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "~/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "~/components/ui/alert";
import {
  Trophy,
  AlertTriangle,
  Copy,
  Check,
  Gift,
  AlertCircle,
} from "lucide-react";
import { api } from "~/trpc/react";
import { useOpen } from "~/hooks/use-profile";
import { useSearchParams } from "next/navigation";
import { useTracker } from "~/hooks/use-tracker";

const discountFormSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

type DiscountFormValues = z.infer<typeof discountFormSchema>;

interface QuizResultDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  data?: {
    success: boolean;
    message: string;
  } | null;
}

export const QuizResultDialog = ({
  isOpen,
  onOpenChange,
  data,
}: QuizResultDialogProps) => {
  const [copied, setCopied] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const searchParams = useSearchParams();
  const currentSectionId = searchParams.get("sectionId");
  const { setEmail, progress, setProgress, setSection } = useOpen();
  const { sectionList } = useTracker();
  const form = useForm<DiscountFormValues>({
    resolver: zodResolver(discountFormSchema),
  });

  const validateDiscount = api.craft.validateDiscount.useMutation({
    onSuccess: (data) => {
      setShowEmailForm(() => false);
      if (data.code) {
        setEmail(form.getValues("email"));
        setProgress({ completed: progress.completed + 1 });
        setSection({
          id: currentSectionId ?? "",
          completed: true,
        });

        const idx = sectionList.indexOf(currentSectionId ?? "");
        if (idx !== -1 && idx + 1 < sectionList.length) {
          const nextSectionId = sectionList[idx + 1];
          setSection({
            id: nextSectionId ?? '',
            completed: false,
          });
        }
      }
    },
  });

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const onSubmit = (values: DiscountFormValues) => {
    validateDiscount.mutate(values);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {data?.success ? (
              <>
                <Trophy className="h-5 w-5 text-primary" />
                Congratulations!
              </>
            ) : (
              <>
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Quiz Results
              </>
            )}
          </DialogTitle>
          <DialogDescription className="text-base">
            {data?.message}
          </DialogDescription>
        </DialogHeader>

        {data?.success && (
          <div className="mt-4 space-y-4">
            {!showEmailForm ? (
              <Button
                variant="outline"
                className="w-full"
                onClick={() => setShowEmailForm(true)}
              >
                Validate Your Discount
              </Button>
            ) : (
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your email"
                            type="email"
                            {...field}
                            value={field.value ?? ""}
                          />
                        </FormControl>
                        <p className="text-sm text-muted-foreground">
                          Your email will validate the code and track your
                          progress
                        </p>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {validateDiscount.error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>
                        {validateDiscount.error.message}
                      </AlertDescription>
                    </Alert>
                  )}
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={validateDiscount.isPending}
                  >
                    {validateDiscount.isPending
                      ? "Validating..."
                      : "Validate Discount"}
                  </Button>
                </form>
              </Form>
            )}

            {validateDiscount.data?.code && (
              <div className="rounded-lg border bg-muted p-4">
                <div className="flex items-center justify-between">
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    Your total discount is{" "}
                    {validateDiscount.data?.totalDiscount}%{" "}
                    {validateDiscount.data?.code}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(validateDiscount.data?.code ?? "")
                    }
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>
            )}

            <Alert>
              <Gift className="h-4 w-4" />
              <AlertTitle>How to use your discount</AlertTitle>
              <AlertDescription>
                Enter this code at checkout to receive your discount. This code
                is valid for one-time use only.
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="mt-4 flex justify-end gap-3">
          {!data?.success && (
            <Button
              variant="outline"
              onClick={() => {
                onOpenChange(false);
              }}
            >
              Try Again
            </Button>
          )}
          <Button
            onClick={() => {
              onOpenChange(false);
            }}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
