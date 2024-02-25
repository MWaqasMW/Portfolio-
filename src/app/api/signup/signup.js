// pages/api/query.js

import { cryptPass, connectDb } from "@/app/lib/utils";
import { User } from "@/app/lib/modal";
import { NextResponse } from "next/server";
import Decode from "@/app/utils/Decode";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
  const body = await Decode(req.body);
  try {
    await connectDb();
    const { password, ...rest } = body;
    const pass = await cryptPass(password);
    const user = new User({ ...rest, password: pass });
    await user.save();
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong!");
  }
}
