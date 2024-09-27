import Link from "next/link";
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import AuthFormLogin from "@/components/(auth)/auth-form-login";
import SignInGoogleButton from "@/components/(auth)/signin-google-button";
import SignInGithubButton from "@/components/(auth)/signin-github-button";

export default function LoginPage() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Authentication</CardTitle>
        <CardDescription>Sign in to your account</CardDescription>
      </CardHeader>
      <CardContent>
        <AuthFormLogin />
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <SignInGoogleButton />
        <SignInGithubButton />
      </CardFooter>
      <CardFooter className="flex items-center justify-center text-sm underline">
        <Link href="/register">Don&apos;t have an account?</Link>
      </CardFooter>
    </Card>
  );
}
