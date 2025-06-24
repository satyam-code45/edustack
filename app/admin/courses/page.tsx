import { buttonVariants } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import Link from "next/link";

function CoursePage() {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Your Courses</h1>

        <Link className={buttonVariants()} href="/admin/courses/create">
          <PlusCircleIcon />
          Create
        </Link>
      </div>

      <div>
        <h1 className="text-muted-foreground -mt-5">Here are all your courses</h1>
      </div>
    </>
  );
}

export default CoursePage;
