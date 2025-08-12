import { NextRequest, NextResponse } from "next/server";
import authMiddleware from "./app/admin/middlewares/authMiddleware";



export default async function middleware(request: NextRequest) {
    authMiddleware(request);
    return NextResponse.next();
}