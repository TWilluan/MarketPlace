import {z} from "zod"

export const AuthcredentialValidator = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password must be at least 8 characters long" }),
});

export type TAuthcredentialValidator = z.infer<typeof AuthcredentialValidator>;