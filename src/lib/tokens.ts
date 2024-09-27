import {
  createVerificationToken,
  getVerificationTokenByToken,
  deleteVerificationTokenByToken,
  getVerificationTokenByEmail,
  deleteVerificationTokenByEmail,
} from "@/data/verification-token";
import { v4 as uuid } from "uuid";

export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600);

  const existingToken = await getVerificationTokenByToken(token);
  const existingEmail = await getVerificationTokenByEmail(email);

  if (existingToken) await deleteVerificationTokenByToken(token);
  if (existingEmail) await deleteVerificationTokenByEmail(email);

  const verificationToken = await createVerificationToken({ email, token, expires });

  return verificationToken;
};
