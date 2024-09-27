"use server";

import { z } from "zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { LoginSchema } from "@/schemas";
import { DEFALUT_LOGIN_REDIRECT } from "@/routes";
import { getUserByEmail } from "@/data/user-data";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields." };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser?.email || !existingUser?.password) {
    return { error: "Invalid credentials." };
  }

  if (!existingUser?.emailVerified) {
    const verificationToken = await generateVerificationToken(email);

    if (verificationToken) {
      const comfirmLink = await sendVerificationEmail({ email, token: verificationToken?.token });
      return {
        success: `Please verify your email.`,
        link: comfirmLink,
      };
    }

    return { error: "Failed to send verification email. try again" };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFALUT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials." };
        default:
          return { error: "Something went wrong." };
      }
    }

    throw error;
  }
};
