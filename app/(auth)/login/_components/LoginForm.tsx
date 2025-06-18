"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { Loader, Send } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const LoginForm = () => {
  const router = useRouter();
  const [githubPending, setGithubPending] = useState(false);
  const [googlePending, setGooglePending] = useState(false);
  const [emailPending, setEmailPending] = useState(false);
  const [email, setEmail] = useState("");

  async function siginInWithGithub() {
    setGithubPending(true);
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed in successful! Redirecting to Home page...");
        },
        onError: () => {
          toast.error("Internal Server Error");
        },
      },
    });
    setGithubPending(false);
  }

  async function siginInWithGoogle() {
    setGooglePending(true);
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
      fetchOptions: {
        onSuccess: () => {
          toast.success("Signed in successful! Redirecting to Home page...");
        },
        onError: () => {
          toast.error("Internal Server Error");
        },
      },
    });
    setGooglePending(false);
  }

  async function signInWithEmail() {
    setEmailPending(true);
    await authClient.emailOtp.sendVerificationOtp({
      email: email,
      type: "sign-in",
      fetchOptions: {
        onSuccess: () => {
          toast.success("Email Sent!");
          router.push(`/verify-request?email=${email}`);
        },

        onError: () => {
          toast.error("Error sending Email");
        },
      },
    });
    setEmailPending(false);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Welcome Back!</CardTitle>
        <CardDescription>
          Login with your Github or Email Account
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        <Button
          className="w-full cursor-pointer"
          variant="outline"
          onClick={siginInWithGoogle}
          disabled={googlePending}
        >
          {googlePending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Getting You in...</span>
            </>
          ) : (
            <>
              <Image
                src="/search.png"
                alt="google"
                width={32}
                height={32}
                className="h-[18px] w-[18px] rounded-full"
              />
              Sign in with Google
            </>
          )}
        </Button>
        <Button
          className="w-full cursor-pointer"
          variant="outline"
          onClick={siginInWithGithub}
          disabled={githubPending}
        >
          {githubPending ? (
            <>
              <Loader className="size-4 animate-spin" />
              <span>Getting You in...</span>
            </>
          ) : (
            <>
              <Image
                src="/github.png"
                alt="google"
                width={32}
                height={32}
                className="h-[18px] w-[18px] rounded-full"
              />
              Sign in with Github
            </>
          )}
        </Button>

        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-card px-2 text-muted-foreground">
            Or Continue with
          </span>
        </div>

        <div className="grid gap-3">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="user@example.com"
              required
            />
          </div>

          <Button
            onClick={signInWithEmail}
            disabled={emailPending}
            className="cursor-pointer"
          >
            {emailPending ? (
              <>
                <Loader className="size-4 animate-spin" />
                <span>Getting You in...</span>
              </>
            ) : (
              <>
                <Send className="size-4" />
                Sign in with Email
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
