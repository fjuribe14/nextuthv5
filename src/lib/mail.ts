import { Resend } from "resend";

export const resend = new Resend(process.env.AUTH_RESEND_KEY);

export const sendVerificationEmail = async ({ email, token }: { email: string; token: string }) => {
  try {
    const comfirmLink = `http://localhost:3000/new-verification?token=${token}`;

    console.log(comfirmLink);

    //   const { data, error } =
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: [email],
      subject: "Verify your email",
      html: `<a href="${comfirmLink}">Click here to verify your email</a>`,
    });

    // console.log({ data, error });

    return comfirmLink;
  } catch (error) {
    console.log(error);
    return null;
  }
};
