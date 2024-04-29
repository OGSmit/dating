import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export default async function authMiddleware(req, res) {
  const cookieStore = cookies()
  const token = cookieStore.get('token')

  let payload;

  try {
    payload = jwt.verify(token.value, 'super-puper-secret-key');
  } catch (err) {
    return NextResponse.json({message: 'Неправильный формат токена'}, {status: 401});
  }

  req.user = payload;

  return req.user;
}
