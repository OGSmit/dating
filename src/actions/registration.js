'use server'
import { dbConnect } from "@/app/lib/db";
import { ObjectId } from 'mongodb';
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


    const aboutUser =  {
      alcohol: newUser.aboutMe.alcohol,
      car: newUser.aboutMe.car,
      children: newUser.aboutMe.children,
      maritalStatus: newUser.aboutMe.maritalStatus,
      pets: newUser.aboutMe.pets,
      smoking: newUser.aboutMe.smoking,
      _id: newUser.aboutMe._id
    }


    return {
      aboutMe: aboutUser,
      birthday: newUser.birthday,
      email: newUser.email,
      gender: newUser.gender,
      horoscope: newUser.horoscope,
      name: newUser.name,
      purposeOfDating: newUser.purposeOfDating,
      _id: newUser._id,
    }


  } catch (error) {
    console.log(error)
    // Возвращаем ответ с ошибкой при возникновении исключения
    return {
      errorMsg: error.errmsg
    };
  }
}