import { dbConnect, disconnect } from "@/app/lib/db";
import authMiddleware from '@/utils/middleware/authMiddleware'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import { NextResponse } from "next/server";
import User from '@/models/user'

export async function POST(req) {
    const { email, password } = await req.json();

    await dbConnect();

    try {
        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            console.log('Неправильные email или пароль строка 15');
            return NextResponse.json({ message: 'Неправильные email или пароль строка 15' }, { status: 401 });
        }
        
        const matched = await bcrypt.compare(password, user.password);
        if (!matched) {
            console.log('строка 20');
            return NextResponse.json({ message: 'строка 20' }, { status: 401 });
        }

        const token = jwt.sign({ _id: user._id }, 'super-puper-secret-key', { expiresIn: '7d' });
        console.log(token);
        return new NextResponse(JSON.stringify({ token }), { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: error.message }, { status: 422 });
    }
}

export async function GET(req, res) {
    await dbConnect();

    console.log(req, 'GET')

    try {
        await authMiddleware(req, res); // Проверка аутентификации

        console.log(req.user);
        const user = await User.findById(req.user._id).orFail(); // Получение пользователя

        return NextResponse.json({ message: user }, { status: 200 }); // Возвращаем успешный ответ
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 }); // Возвращаем ошибку
    }
}

