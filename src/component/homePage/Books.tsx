// import React from "react";
// import BookCard from "../shared/BookCard";
// import { IBookType } from "@/types/BookType";

// const getProducts = async () => {
//   const res = await fetch("http://localhost:5001/books/");
//   return res.json();
// };

// const Books = async () => {
//   const books = await getProducts();
//   return (
//     <div className="container mx-auto mt-20">
//       <h1 className="text-[#131313] font-bold text-[35px] text-center">
//         Books
//       </h1>
//       <div className="grid grid-cols-3 gap-4">
//         {books.map((book: IBookType) => (
//           <BookCard key={book.id} book={book} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Books;

"use client";

import { useEffect, useState } from "react";
import BookCard from "../shared/BookCard";
import { IBookType } from "@/types/BookType";

const Books = () => {
  const [books, setBooks] = useState<IBookType[]>([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await fetch("/api/books");

        if (!res.ok) {
          throw new Error(`Failed to fetch books: ${res.status}`);
        }

        const data: IBookType[] = await res.json();
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    getBooks();
  }, []);

  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-[#131313] font-bold text-[35px] text-center">
        Books
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
