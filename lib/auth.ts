import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { emailOTP } from "better-auth/plugins";
import { prisma } from "./prisma";
import { resend } from "./resend";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  socialProviders: {
    github: {
      clientId: process.env.AUTH_GITHUB_CLIENT_ID!,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp, type }) {
        await resend.emails.send({
          from: "EduStack <onboarding@resend.dev>",
          to: [email],
          subject: "Otp Verification",
          html: `<p>Your OTP is <strong>${otp}</strong></p>`,
        });
      },
    }),
  ],
});
