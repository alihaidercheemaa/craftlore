"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";
import { Gift, Trophy, Timer, Loader2, Check, Copy } from "lucide-react";
import { useQuizStore } from "~/hooks/use-quiz";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { useState } from "react";

type QuizQuestion = {
  quizId: string;
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
};

type QuizCardProps = {
  questions: QuizQuestion[];
};

export const QuizCard = ({ questions }: QuizCardProps) => {
  const { answers, setAnswer, clearAnswers } = useQuizStore();
  const [resultDialog, setResultDialog] = useState<{
    isOpen: boolean;
    data: { success: boolean; message: string; couponCode?: string } | null;
  }>({
    isOpen: false,
    data: null,
  });
  const [copied, setCopied] = useState(false);

  const handleOptionChange = (quizId: string, value: string) => {
    setAnswer(quizId, value);
  };

  const submitMutation = api.craft.submitQuizAnswers.useMutation({
    onSuccess: (data) => {
      //   toast({
      //     title: "Quiz Submitted!",
      //     description: data.message,
      //     variant: data.success ? "default" : "destructive",
      //   });
      setResultDialog({
        isOpen: true,
        data,
      });
      clearAnswers();
    },
    onError: (error) => {
      //   toast({
      //     title: "Submission Failed",
      //     description: error.message,
      //     variant: "destructive",
      //   });
      setResultDialog({
        isOpen: true,
        data: { success: false, message: error.message },
      });
    },
  });

  const handleSubmit = () => {
    // if (answers.length !== questions.length) {
    //   toast({
    //     title: "Incomplete Quiz",
    //     description: "Please answer all questions before submitting.",
    //     variant: "destructive",
    //   });
    //   return;
    // }

    if (answers.length !== questions.length) {
      setResultDialog({
        isOpen: true,
        data: {
          success: false,
          message: "Please answer all questions before submitting.",
        },
      });
      return;
    }

    submitMutation.mutate({
      answers: answers.map((answer) => ({
        quizId: answer.quizId,
        selectedOption: answer.selectedOption,
      })),
    });
  };

  const copyToClipboard = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Instructions Card */}
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Trophy className="h-6 w-6 text-primary" />
            Knowledge Check Challenge
          </CardTitle>
          <CardDescription className="text-base">
            Complete this quiz to test your understanding and unlock special
            rewards!
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <Alert>
            <Gift className="h-4 w-4" />
            <AlertTitle>Rewards Await!</AlertTitle>
            <AlertDescription>
              Score 80% or higher to receive an exclusive discount code for your
              next purchase.
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
              <Timer className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">No Time Limit</p>
                <p className="text-sm text-muted-foreground">
                  Take your time to answer
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
              <Trophy className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">{questions.length} Questions</p>
                <p className="text-sm text-muted-foreground">
                  Multiple choice format
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-white p-4 shadow-sm">
              <Gift className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Instant Rewards</p>
                <p className="text-sm text-muted-foreground">
                  Get code upon completion
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Questions */}
      <div className="grid gap-6">
        {questions.map((question, questionIndex) => (
          <Card key={question.quizId} className="overflow-hidden">
            <CardHeader className="border-b bg-muted/20">
              <CardTitle className="flex items-center gap-2 font-montserrat text-lg">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-sm text-white">
                  {questionIndex + 1}
                </span>
                {question.question}
              </CardTitle>
            </CardHeader>

            <CardContent className="p-6">
              <RadioGroup
                className="space-y-3"
                value={
                  answers.find((a) => a.quizId === question.quizId)
                    ?.selectedOption
                }
                onValueChange={(value) =>
                  handleOptionChange(question.quizId, value)
                }
              >
                {[
                  question.option1,
                  question.option2,
                  question.option3,
                  question.option4,
                ].map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center space-x-3 rounded-lg border p-4 transition-all hover:border-primary hover:bg-muted/10"
                  >
                    <RadioGroupItem
                      value={option}
                      id={`${question.quizId}-option${index + 1}`}
                    />
                    <span className="flex-1">{option}</span>
                  </label>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="border-t-4 border-t-primary">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-medium">Ready to submit?</h3>
              <p className="text-sm text-muted-foreground">
                You&apos;ve answered {answers.length} out of {questions.length}{" "}
                questions
              </p>
            </div>
            <Button
              onClick={handleSubmit}
              disabled={
                submitMutation.isPending || answers.length !== questions.length
              }
              className="min-w-[120px]"
            >
              {submitMutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Checking...
                </>
              ) : (
                "Submit Quiz"
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={resultDialog.isOpen}
        onOpenChange={(open) =>
          setResultDialog((prev) => ({ ...prev, isOpen: open }))
        }
      >
        
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {resultDialog.data?.success ? (
                <>
                  <Trophy className="h-5 w-5 text-primary" />
                  Congratulations!
                </>
              ) : (
                <>
                  <AlertTitle className="h-5 w-5 text-destructive" />
                  Quiz Results
                </>
              )}
            </DialogTitle>
            <DialogDescription className="text-base">
              {resultDialog.data?.message}
            </DialogDescription>
          </DialogHeader>

          {resultDialog.data?.success && resultDialog.data?.couponCode && (
            <div className="mt-4 space-y-4">
              <div className="rounded-lg border bg-muted p-4">
                <div className="flex items-center justify-between">
                  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                    {resultDialog.data.couponCode}
                  </code>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={async () => {
                      if (resultDialog.data?.couponCode) {
                       await  copyToClipboard(resultDialog.data.couponCode);
                      }
                    }}
                  >
                    {copied ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </div>

              <Alert>
                <Gift className="h-4 w-4" />
                <AlertTitle>How to use your discount</AlertTitle>
                <AlertDescription>
                  Enter this code at checkout to receive your discount. This
                  code is valid for one-time use only.
                </AlertDescription>
              </Alert>
            </div>
          )}

          <div className="mt-4 flex justify-end gap-3">
            {!resultDialog.data?.success && (
              <Button
                variant="outline"
                onClick={() => {
                  setResultDialog((prev) => ({ ...prev, isOpen: false }));
                  clearAnswers();
                }}
              >
                Try Again
              </Button>
            )}
            <Button
              onClick={() =>
                setResultDialog((prev) => ({ ...prev, isOpen: false }))
              }
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
