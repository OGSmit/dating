import mongoose from "mongoose";

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
      avatar: {
        type: String,
        defalut: ''
      },
      likes: [{
        type: mongoose.Schema.Types.Array,
        default: [],
      }],
      dislike: {
        type: mongoose.Schema.Types.Array,
        default: [],
      },
      likedby: {
        type: mongoose.Schema.Types.Array,
        default: [],
      },
      dislikedby: {
        type: mongoose.Schema.Types.Array,
        default: [],
      },
      aboutme: {
        birthday: {
          type: String,
          required: true,
          default: 'false',
          age: {
            type: Number,
            default: 0
          }
        },
        interesting: {
          type: String,
          default: 'false'
        },
        socialicons: {
          type: String,
          default: 'false',
          required: true
        },
      },
      verifications: {
        type: Boolean,
        default: false
      },
      location: {
        type: String,
        default: 'false'
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      gender: {
        type: String,
        default: '',
        required: true
      }
    },
    { versionKey: false },
);


export default mongoose.models.Users || mongoose.model('Users', userSchema);