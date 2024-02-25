// pages/api/query.js

import { unCryptPass, connectDb, generateTokens } from "@/app/lib/utils";
import { User } from "@/app/lib/modal";
import { NextResponse } from "next/server";
import Decode from "@/app/utils/Decode";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
  const body = await Decode(req.body);
  const { email, password } = body;
  try {
    await connectDb();
    const user = await User.findOne({ email });
    if (!user) return next(createError(404, "user not found"));
    const isCorrect = await unCryptPass(user?.password, password);
    if (!isCorrect) {
      return next(createError(401, "Password is Incorrect"));
    }
    const { password: userPassword, ...others } = user?._doc;

    const token = await generateTokens(user);

    const data = {
      ...others,
      token,
    };

    return NextResponse.json(data, { status: 201 });
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong!");
  }
}
