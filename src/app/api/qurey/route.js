// pages/api/qurey.js

import connectDb from "@/app/lib/utils";
import { Qurey } from "@/app/lib/modal";

export async function POST(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    await connectDb();
    const newQurey = new Qurey({ ...req.body });
    await newQurey.save();

    return res.status(200).json(newQurey);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ error: "Server error" });
  }
}
