import { NextResponse } from "next/server";
import books from "../../../../../public/booksData.json";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const book = books.find((book) => book.bookId === Number(id));

  if (!book) {
    return NextResponse.json({ message: "Book not found" }, { status: 404 });
  }

  return NextResponse.json(book);
}
