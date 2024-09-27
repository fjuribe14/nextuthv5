import Link from "next/link";
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import AuthFormRegister from "@/components/(auth)/auth-form-register";
import SignInGoogleButton from "@/components/(auth)/signin-google-button";
import SignInGithubButton from "@/components/(auth)/signin-github-button";

export default function RegisterPage() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Authentication</CardTitle>
        <CardDescription>Create an account</CardDescription>
      </CardHeader>
      <CardContent>
        <AuthFormRegister />
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <SignInGoogleButton />
        <SignInGithubButton />
      </CardFooter>
      <CardFooter className="flex items-center justify-center text-sm underline">
        <Link href="/login">Already have an account?</Link>
      </CardFooter>
    </Card>
  );
}
