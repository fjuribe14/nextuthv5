"use server";

import { z } from "zod";
import { RegisterSchema } from "@/schemas";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";
import { createUser, getUserByEmail } from "@/data/user-data";

export const registerAction = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields." };

  const { email, name, password } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (existingUser) return { error: "User already exists." };

  await createUser({ email, name, password });

  const verificationToken = await generateVerificationToken(email);

  if (verificationToken) {
    const comfirmLink = await sendVerificationEmail({ email, token: verificationToken?.token });
    return { success: `Confirmation email sent.<br /><a href="${comfirmLink}">Link</a>` };
  }

  return { error: "Failed to send confirmation email. try again" };
};
