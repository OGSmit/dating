import { dbConnect, disconnect } from "@/app/lib/db";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";
import User from '@/models/user'

export async function POST(req) {
    const {name, email, password} = await req.json();

    await dbConnect();

    return bcrypt.hash(password, 10)
        .then((hash) => User.create({
            name, 
            email, 
            password: hash
        }))
        .then(res => new NextResponse(JSON.stringify(res), {status: 200}))
        .catch(error => new NextResponse(JSON.stringify(error), {status: 422}))
}