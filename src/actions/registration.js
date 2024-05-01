import { dbConnect } from "@/app/lib/db";
import bcrypt from "bcryptjs";

export default async function registration(formdata) {
  const { name, email, password } = formdata;

  await dbConnect();

  return bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name,
      email,
      password: hash
    }))
    .then(res => new NextResponse(JSON.stringify(res), { status: 200 }))
    .catch(error => new NextResponse(JSON.stringify(error), { status: 422 }))
}