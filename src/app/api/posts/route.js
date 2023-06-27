import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");
  try {
    await connect();
    const posts = await Post.find(username && { username });
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const POST = async (request) => {
  const body = await request.json();
  const newPost = await new Post(body);
  console.log(`🚀 ~ newPost:`, newPost);
  try {
    await connect();
    await newPost.save();
    return new NextResponse(JSON.stringify("posts has been created"), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
