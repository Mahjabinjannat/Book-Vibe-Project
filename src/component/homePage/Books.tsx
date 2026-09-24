import React from "react";
import BookCard from "../shared/BookCard";

const getProducts = async () => {
  const res = await fetch("http://localhost:5001/books/");
  return res.json();
};

const Books = async () => {
  const books = await getProducts();
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-[#131313] font-bold text-[35px] text-center">
        Books
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
