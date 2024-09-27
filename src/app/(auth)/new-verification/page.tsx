"use client";

import Link from "next/link";
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";
import { LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Logo from "@/assets/img/android-chrome-512x512.png";
import { useCallback, useEffect } from "react";

export default function NewVerificationPage() {
  const search = useSearchParams();
  const token = search.get("token");

  const onSubmit = useCallback(async () => {
    console.log(token);
    // await emailVerifyAction(token)
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-center gap-2">
          <Image className="h-5 w-5" src={Logo} alt="logo" />
          NextAuth.js
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-2">
        <LoaderCircle className="h-5 w-5 animate-spin" />
        <CardDescription>Comfirming your code.</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link href="/login">Back to login</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
