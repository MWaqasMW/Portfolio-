// pages/api/query.js

import connectDb from "@/app/lib/utils";
import { Qurey } from "@/app/lib/modal";
import { NextResponse } from "next/server";
import Decode from "@/app/utils/Decode";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }
  const body = await Decode(req.body);
  try {
    await connectDb();
    const newQuery = new Qurey({ ...body });
    await newQuery.save();

    return NextResponse.json(newQuery, { status: 201 });
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to save query!");
  }
}
