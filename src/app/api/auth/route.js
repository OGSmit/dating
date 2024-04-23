/*import authMiddleware from './authMiddleware';
import { dbConnect, disconnect } from "@/app/lib/db";

export default function GET(req, res) {
    await dbConnect();


    authMiddleware(req, res, () => {
      // Если пользователь авторизован, можно продолжить выполнение кода
      res.status(200).json({ message: 'User is authenticated', user: req.user });
    })
    .then(res => {
        return User.findById(req.user._id)
        .orFail(() => {
        next(new NotFoundError(notFoundErrorMessage));
        })
        .then((user) => res.send({ data: user }))
}
    })
}*/