

import { decryptJWT } from "@/app/api/core/application/features/utilities/authentication/Session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


const protectedPaths = ["/admin/edit",]
const publicPaths = ["/admin/login", "/admin/logout"];

export default async function authMiddleware(request: NextRequest) {
    const path= request.nextUrl.pathname;
    const isProtectedPath = protectedPaths.includes(path);
    const isPublicPath = publicPaths.includes(path);

    const cookie= (await cookies()).get("session")?.value;
    const session = cookie ? await decryptJWT(cookie) : null;
    const userId= session?.userId;

    if ( isProtectedPath && !userId) {
        return NextResponse.redirect(new URL("/admin/login", request.nextUrl));
    }

    if (isPublicPath && userId) {
        return NextResponse.redirect(new URL("/admin/edit", request.nextUrl));
    }

};