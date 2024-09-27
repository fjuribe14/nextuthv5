import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-4">
      <h2 className="text-3xl font-bold">🔐 Auth</h2>
      <p>a simple authentication service</p>
      <Button asChild>
        <Link href="/login">{"Lest's get started ->"}</Link>
      </Button>
    </div>
  );
}
