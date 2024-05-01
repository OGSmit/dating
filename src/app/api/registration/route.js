import { dbConnect } from "@/app/lib/db";
import User from '@/models/user';
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    // Извлекаем данные из запроса
    const conString = 'mongodb+srv://jackkerouac1613:R8QL3SXaGJpmBO9y@tinder.smyb7tb.mongodb.net/UsersDB?retryWrites=true&w=majority&appName=Tinder';
    const data = await req.json();
    const { name, email, password, aboutMe, birthday, gender, horoscope, purposeOfDating } = data
    try {
        // Устанавливаем соединение с базой данных
        await dbConnect(conString);

        // Хешируем пароль
        const hashedPassword = await bcrypt.hash(password, 10);

        // Создаем нового пользователя в базе данных
        const newUser = await User.create({
            aboutMe,
            birthday,
            email,
            gender,
            horoscope,
            name,
            password: hashedPassword,
            purposeOfDating
        });

        // Возвращаем успешный ответ с данными нового пользователя
        return new NextResponse(JSON.stringify(newUser), { status: 200 });
    } catch (error) {
        console.log(error)
        // Возвращаем ответ с ошибкой при возникновении исключения
        return new NextResponse(JSON.stringify(error), { status: 422 });
    }
}
