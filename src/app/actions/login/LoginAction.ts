"use server";
import { createSession, deleteSession } from "@/app/api/core/application/features/utilities/authentication/Session";
import { loginSchema } from "@/app/api/core/application/features/Validators/ZodValidators/Admin/LoginValidations";
import { redirect } from "next/navigation";
import { z } from "zod";


export async function login(previousState: any, formData: FormData) {
    const result= loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return { errors:  z.treeifyError(result.error) };
    }

    const uuid = crypto.randomUUID();
    await createSession(uuid);

    redirect("../../");
    
}

export async function logout() {
    await deleteSession();
    redirect("/admin/login");
}