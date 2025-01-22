import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
export async function POST(request: Request) {
 try {
    const { name, email, password, role} = await request.json()
    if (!name || !email || !password) {
        return NextResponse.json(
          {  error: "Missing Required Field"},
          {status: 400}
        )
    }
    const existingUser = await prisma.user.findUnique({
        where: {email}
    })
    if (existingUser) {
        return NextResponse.json({
            error: "User Already exist"
        },
        {status: 400}
    )
    }
    const hashedPassword = await bcrypt.hash(password, 20)
    const user = await prisma.user.create({
        data: {
            email, name, password:hashedPassword, role:role as "ADMIN" | "MODERATOR" |"USER"
        }
    })
    // REMOVE PASSWORD

    const {password: _, ...userWithoutPassword } = user
    return NextResponse.json(userWithoutPassword, {status: 201})
 } catch (error) {
    console.error("SignUp error:", error)
    return NextResponse.json({error: "Error creating User"}, {status: 500})
 }
}