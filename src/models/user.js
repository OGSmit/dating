import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema(
    {
      email: {
        type: String,
        unique: true,
        required: [true, '400 Поле "email" должно быть заполнено'],
      },
      password: {
        type: String,
        minlength: [8, '400 Минимальная длина поля "password" - 8'],
        required: true,
        select: false,
      },
      name: {
        type: String,
        minlength: [2, '400 Минимальная длина поля "name" - 2'],
        maxlength: [30, '400 Максимальная длина поля "name" - 30'],
      },
    },
    { versionKey: false },
);


export default mongoose.models.Users || mongoose.model('Users', userSchema);