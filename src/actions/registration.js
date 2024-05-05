'use server'
import { dbConnect } from "@/app/lib/db";
import User from "@/utils/db/schema/user";
import bcrypt from "bcryptjs";

export default async function registration(formdata) {
  const { name, email, password, aboutMe, birthday, gender, horoscope, purposeOfDating } = formdata;
  const conString = 'mongodb+srv://jackkerouac1613:R8QL3SXaGJpmBO9y@tinder.smyb7tb.mongodb.net/UsersDB?retryWrites=true&w=majority&appName=Tinder';

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


    return {
      birthday: newUser.birthday,
      email: newUser.email,
      gender: newUser.gender,
      horoscope: newUser.horoscope,
      name: newUser.name,
      purposeOfDating: newUser.purposeOfDating,
    }


  } catch (error) {
    console.log(error)
    // Возвращаем ответ с ошибкой при возникновении исключения
    return {
      errorMsg: error.errmsg
    };
  }
}