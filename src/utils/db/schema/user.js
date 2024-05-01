import mongoose from 'mongoose';

// Определение схемы
const userSchema = new mongoose.Schema({
  // Информация о пользователе
  aboutMe: {
    type: {
      // Наличие употребления алкоголя
      alcohol: { type: Boolean, default: false },
      // Наличие автомобиля
      car: { type: Boolean, default: false },
      // Наличие детей
      children: { type: Boolean, default: false },
      // Семейное положение
      maritalStatus: { type: String, default: '' },
      // Наличие домашних животных
      pets: { type: Boolean, default: false },
      // Курение
      smoking: { type: Boolean, default: false }
    }
  },
  // Дата рождения пользователя
  birthday: {
    type: String,
    default: ''
  },
  // Email пользователя
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  // Пол пользователя
  gender: {
    type: String,
    default: ''
  },
  // Знак зодиака пользователя
  horoscope: {
    type: String,
    default: ''
  },
  // Имя пользователя
  name: {
    type: String,
    default: ''
  },
  // Пароль пользователя
  password: {
    type: String,
    required: true,
  },
  // Цель знакомства
  purposeOfDating: {
    type: String,
    default: ''
  }
});

// Создание модели
const User = mongoose.model('User', userSchema);

export default User;
