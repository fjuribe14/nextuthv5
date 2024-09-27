"use server";
import { db } from "@/lib/db";

export const createVerificationToken = async ({
  email,
  token,
  expires,
}: {
  email: string;
  token: string;
  expires: Date;
}) => {
  try {
    const verificationToken = await db.verificationToken.create({
      data: {
        email,
        token,
        expires,
      },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    return await db.verificationToken.findUnique({ where: { token } });
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    return await db.verificationToken.findFirst({ where: { email } });
  } catch {
    return null;
  }
};

export const deleteVerificationTokenByToken = async (token: string) => {
  try {
    return await db.verificationToken.delete({ where: { token } });
  } catch {
    return null;
  }
};
export const deleteVerificationTokenByEmail = async (email: string) => {
  try {
    return await db.verificationToken.delete({ where: { email } });
  } catch {
    return null;
  }
};
