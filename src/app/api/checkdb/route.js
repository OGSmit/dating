import { dbConnect, disconnect } from "@/app/lib/db";
import { NextResponse } from "next/server";
import User from '@/models/user'

// Ручка делает запрос и возвращает список всех объектов в DB, для просмотра - URL:'.../api/checkDB'
export async function GET() {
  await dbConnect();
  
  const users = await User.find() 
  
  return new NextResponse(JSON.stringify(users), {status: 200});

  //   return NextResponse.json({ messsage: "Hello World" });
}