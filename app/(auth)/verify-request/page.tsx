"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { authClient } from "@/lib/auth-client";
import { Loader } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

function Page() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [emailPending, setEmailPending] = useState(false);

  const isOtpCompleted = otp.length === 6;
  const params = useSearchParams();
  const email = params.get("email") as string;

  async function verifyOTP() {
    setEmailPending(true);
    await authClient.signIn.emailOtp({
      email: email,
      otp: otp,
      fetchOptions: {
        onSuccess: () => {
          toast.success("Email verified");
          router.push("/");
        },
        onError: () => {
          toast.error("Invalid OTP/Email");
        },
      },
    });
    setEmailPending(false);
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">Please Check your email</CardTitle>
        <CardDescription>
          We have sent you an otp. Please Enter to verify it.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center justify-center space-y-3">
          <InputOTP
            value={otp}
            onChange={(value) => setOtp(value)}
            maxLength={6}
            className="gap-2"
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-muted-foreground">
            Enter the 6-digit code sent to your email
          </p>
        </div>

        <Button
          onClick={verifyOTP}
          disabled={emailPending || !isOtpCompleted}
          className="w-full cursor-pointer"
        >
          {emailPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              Verifying....
            </>
          ) : (
            <>Verify Otp</>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export default Page;
