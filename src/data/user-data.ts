import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const createUser = async ({
  email,
  name,
  password,
}: {
  email: string;
  name: string;
  password: string;
}) =>
  await db.user.create({
    data: { email: `${email}`, name, password: await bcrypt.hash(password.trim(), 10) },
  });

export const getUserByEmail = async (email: string) =>
  await db.user.findUnique({ where: { email } });

export const getUserById = async (id: string) => await db.user.findUnique({ where: { id } });
