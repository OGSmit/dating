import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export default async function authMiddleware(req, res) {
    if (!req || !req[Symbol.for('headers')]) {
        // Обработка ситуации, когда заголовки отсутствуют или не доступны
        console.error('Заголовки отсутствуют или недоступны');
        return;
      }
    
      // Получаем объект заголовков из запроса
      const headers = req[Symbol.for('headers')];
    
      // Извлекаем заголовок Authorization
      const authorizationHeader = headers.get('authorization');
    
      // Проверяем, удалось ли извлечь значение заголовка Authorization
      if (!authorizationHeader) {
        console.error('Заголовок Authorization отсутствует');
        return;
      }

  //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjI2NjMzZjQ3NTczYmZjNGRhZTg1MzgiLCJpYXQiOjE3MTM3OTMyMzIsImV4cCI6MTcxNDM5ODAzMn0.sJ_e6_NpSNoec6Gts95IU7oDEtTbjTJ4XUWywhgNQWU';
  let payload;

  try {
    payload = jwt.verify(authorizationHeader, 'super-puper-secret-key');
  } catch (err) {
    return NextResponse.json({message: 'Неправильный формат токена'}, {status: 401});
  }

  req.user = payload;

  return req.user;
}
