// pages/api/query.js

import { connectDb } from "@/app/lib/utils";
import { FeedBack } from "@/app/lib/modal";
import { NextResponse } from "next/server";
import Decode from "@/app/utils/Decode";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
  const body = await Decode(req.body);
  try {
    await connectDb();
    const feedBack = new FeedBack({ ...body });
    await feedBack.save();

    return NextResponse.json(feedBack, { status: 201 });
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong!");
  }
}
export async function GET(req) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
  try {
    await connectDb();
    const feedBack = await FeedBack.find();
    console.log("feed", feedBack);

    return NextResponse.json(feedBack, { status: 201 });
  } catch (error) {
    console.error(error.message);
    throw new Error("Something went wrong!");
  }
}
