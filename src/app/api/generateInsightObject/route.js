import { NextResponse } from "next/server";
import generateUniqueId from "@/lib/generateUniqueId";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { ip } = body;
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);

    const insight = {
      insightId: generateUniqueId(15),
      timestamp: Date.now(),
      ip: response.data,
      deviceType: req.headers.get("user-agent"),
      clickEvents: [],
    };

    return NextResponse.json({ insight, status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message, status: 500 });
  }
}
