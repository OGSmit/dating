import connect from '@/utils/db/db.js';
import User from '@/utils/db/schema/user.js';
import { NextResponse } from 'next/server';

export async function POST(req) {
  await connect();
  console.log('connect ok')
  const { username, email, password } = req.json();

  try {
    const user = new User({ username, email, password });

    const res = await user.save();

    return NextResponse.json({
      success: res,
    })
  } catch (error) {

    if (error instanceof Error) {
      return NextResponse.json({ error: true });
    }
    return NextResponse.json({ error: 'Вы меня поймали' });
  }
}

export async function GET(req) {
  await connect();
  console.log('connect ok');

  try {
    const users = await User.find({}); // Находим всех пользователей

    return NextResponse.json({
      success: true,
      data: users,
    });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: true });
    }
    return NextResponse.json({ error: 'Вы меня поймали' });
  }
}
