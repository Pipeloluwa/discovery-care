
import { z } from "zod";

export const loginSchema = z.object({
    username: z.string().min(1, {error: "Username is required"}),
    password: z.string().min(8, {error: "Minimum password length must be 8 characters"}),
});