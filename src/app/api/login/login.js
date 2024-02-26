// pages/api/query.js

import { unCryptPass, connectDb, generateTokens } from "@/app/lib/utils";
import { User } from "@/app/lib/modal";
import { NextResponse } from "next/server";
import Decode from "@/app/utils/Decode";
import { createError } from "@/app/lib/utils";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
  const body = await Decode(req.body);
  const { email, password } = body;
  try {
    await connectDb();
    const user = await User.findOne({ email });
    if (!user) return NextResponse.json(createError(404, "user not found"));
    const isCorrect = await unCryptPass(user?.password, password);
    if (!isCorrect) {
      return NextResponse.json(createError(401, "Password is Incorrect"));
    }

    const token = await generateTokens(user);

    const response = NextResponse.json({
      message: "Login Succesfully",
      status: 201,
    });
    response.cookies.set("token", token?.accessToken, {
      httpOnly: true,
    });
    return response;
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong!", error.message);
  }
}
