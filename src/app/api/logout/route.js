import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET () {
    try {
        const cookieStore = cookies();

        cookieStore.delete('token');

        return NextResponse.json({message: 'Cookies is delete'}, {status: 200})
    } catch (e) {
        return NextResponse.json({message: 'Cookies is not deleted', e}, {status: 555})
    }
}