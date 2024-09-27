"use client";

import { Github } from "lucide-react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { DEFALUT_LOGIN_REDIRECT } from "@/routes";

export default function SignInGithubButton() {
  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center gap-3"
      onClick={() => signIn("github", { callbackUrl: DEFALUT_LOGIN_REDIRECT })}>
      <Github className="h-5 w-5" />
      Sign in with GitHub
    </Button>
  );
}
