// pages/api/query.js

import { connectDb } from "@/app/lib/utils";
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
export async function GET(req) {
  if (req.method !== "GET") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }

  // Extract the token from cookies
  const token = req.cookies.get("token");
  console.log("token,------", token);
  try {
    // const isValidToken = await verifyToken(token);
    if (!token) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error verifying token:", error.message);
    return NextResponse.json(
      { error: "Token verification failed" },
      { status: 401 }
    );
  }

  try {
    await connectDb();
    const newQuery = await Qurey.find();
    return NextResponse.json(newQuery, { status: 201 });
  } catch (error) {
    console.error(error.message);
    throw new Error("Failed to save query!");
  }
}
