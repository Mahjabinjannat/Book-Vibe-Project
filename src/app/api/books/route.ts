import { NextResponse } from "next/server";
import books from "../../../../public/booksData.json";

export async function GET() {
  return NextResponse.json(books);
}
