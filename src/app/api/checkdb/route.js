import { dbConnect } from "@/app/lib/db";
import User from '@/models/user';
import { NextResponse } from "next/server";

// Ручка делает запрос и возвращает список всех объектов в DB, для просмотра - URL:'.../api/checkdb'
export async function GET() {
  const conString = 'mongodb+srv://jackkerouac1613:R8QL3SXaGJpmBO9y@tinder.smyb7tb.mongodb.net/UsersDB?retryWrites=true&w=majority&appName=Tinder';
  const anotherStr = 'mongodb+srv://og88:G55UyVHSuqi9OXqj@clusterog.lvybamu.mongodb.net/?retryWrites=true&w=majority&appName=ClusterOG'
  await dbConnect(conString);
  
  const users = await User.find() 
  
  return new NextResponse(JSON.stringify(users), {status: 200});

  //   return NextResponse.json({ messsage: "Hello World" });
}