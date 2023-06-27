import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  let { id } = params;
  try {
    await connect();
    const posts = await Post.findById(id);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
export const DELETE = async (request, { params }) => {
  let { id } = params;
  try {
    await connect();
    await Post.findByIdAndDelete(id);
    return new NextResponse("post has beeen deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
