import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <span className="text-9xl">😭</span>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild>
        <Link href="/">{"<- Return Home"}</Link>
      </Button>
    </div>
  );
}
