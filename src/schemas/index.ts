import { z } from "zod";

export const LoginSchema = z.object({
  password: z.string().min(6),
  email: z.string().email().min(1, { message: "Email is required" }),
});
export const RegisterSchema = z.object({
  password: z.string().min(6),
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email().min(1, { message: "Email is required" }),
});
