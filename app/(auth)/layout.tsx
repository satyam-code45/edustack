import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="relative flex items-center justify-center min-h-svh">
      <Link href="/" className={buttonVariants({
        variant: "outline",
        className: "absolute top-8 left-8"
      })}>
        <ArrowLeft />
      Go Back to Home</Link>
      <div className="flex w-full max-w-sm flex-col gap-4">
        <Link 
          className="flex items-center gap-2 self-center font-bold text-2xl justify-center"
          href="/"
        >
          EduStack
        </Link>
        {children}

        <div className="text-balance text-center text-xs text-muted-foreground">
          By Clicking Continue, you will agree to our <span className="hover:text-primary hover:underline ">Terms & Condition</span>.
        </div>
      </div>
    </div>
  );
}
