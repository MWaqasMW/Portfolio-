// pages/api/query.js

import connectDb from "@/app/lib/utils";
import { Qurey } from "@/app/lib/modal";
import { NextResponse } from "next/server";

async function toJSON(body) {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  const chunks = [];

  async function read() {
    const { done, value } = await reader.read();

    if (done) {
      return JSON.parse(chunks.join(""));
    }

    const chunk = decoder.decode(value, { stream: true });
    chunks.push(chunk);
    return read();
  }

  return read();
}

// Use body parsing middleware
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

export async function POST(req, res) {
  if (req.method !== "POST") {
    return NextResponse.json({ error: "Method Not Allowed" });
  }

  //   const { name, email, subject, message } = req.body;
  //   const { body } = await req.json();
  const body = await toJSON(req.body);
  console.log("body", body);
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
