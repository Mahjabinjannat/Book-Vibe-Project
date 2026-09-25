import { IBookType } from "@/types/BookType";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BookCard = ({ book }: { book: IBookType }) => {
  return (
    <div className="border border-[#131313]/15 rounded-[17px]  flex items-center flex-col py-5 space-y-2">
      <div className="h-[200px] w-[70%] bg-[#F3F3F3] flex items-center justify-center rounded-[17px]">
        <Image
          src={book.image}
          alt={book.bookName}
          width="200"
          height="200"
          className="h-[80%] w-[90%] object-contain"
        />
      </div>
      <div className="w-[70%] text-left space-y-2">
        <p className="text-[#23BE0A] text-[12px] font-semibold">
          {book.category}
        </p>
        <p>{book.bookName}</p>
        <p>By: {book.author}</p>
        <hr className="text-[#131313]/15 border-dashed" />
        <p>{book.tags[0]}</p>
        <p>{book.rating}</p>
        <Link href={`/books/${book.id}`}>
          <button className="bg-[#131313]/15 py-2 px-4 rounded-[7px] text-gray-700 cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
