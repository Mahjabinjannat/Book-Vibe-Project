import Image from "next/image";
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="border border-[#131313]/15 rounded-[17px]  flex items-center flex-col">
      <div className="h-[200px] w-[70%] bg-[#F3F3F3] flex items-center justify-center rounded-[17px]">
        <Image
          src={book.image}
          alt={book.bookName}
          width="150"
          height="200"
          className="h-[80%] w-[80%] object-contain"
        />
      </div>
      <div>
        <p>{book.category}</p>
        <p>{book.bookName}</p>
        <p>By: {book.author}</p>
        <hr className="text-[#131313]/15 border-dashed" />
        <p>{book.tags[0]}</p>
        <p>{book.rating}</p>
      </div>
    </div>
  );
};

export default BookCard;
