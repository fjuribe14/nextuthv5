"use client";

import Image from "next/image";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import GoogleIcon from "@/assets/icons/google.svg";
import { DEFALUT_LOGIN_REDIRECT } from "@/routes";

export default function SignInGoogleButton() {
  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center gap-3"
      onClick={() => signIn("google", { callbackUrl: DEFALUT_LOGIN_REDIRECT })}>
      <Image className="h-5 w-5" src={GoogleIcon} alt="Google Icon" />
      Sign in with Google
    </Button>
  );
}
