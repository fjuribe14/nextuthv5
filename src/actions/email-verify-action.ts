"use server";

import { db } from "@/lib/db";

export const emailVerifyAction = async (token: string) => {
  try {
    const existingToken = await db.verificationToken.findUnique({ where: { token } });

    if (!existingToken) {
      return null;
    }

    if (existingToken.expires < new Date()) {
      return null;
    }

    return await db.user.update({
      where: { email: existingToken.email },
      data: { emailVerified: new Date() },
    });
  } catch {
    return null;
  }
};
