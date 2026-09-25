"use client";
import { BooksContext } from "@/context/BooksContext";
import Image from "next/image";
import React, { useContext } from "react";

export default function ListedBookspage() {
  const { wishList, readList } = useContext(BooksContext);
  return (
    <div className="container mx-auto">
      <h1 className="font-extrabold text-[20px] text-[#131313] text-center bg-[#131313]/5 rounded-[15px] py-6 mt-5">
        Books
      </h1>
      <div className="text-center">
        <select
          defaultValue="sortBy"
          className="select bg-[#23BE0A] text-white font-semibold text-[15px] py-2.5 px-4 border-none rounded-[7px] mt-[25px] w-[10%]"
        >
          <option disabled={true} value="sortBy">
            Sort By
          </option>
          <option value="rating">Rating</option>
          <option value="pages">Number of Pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readList.length ? (
            readList.map((book) => (
              <div key={book.id}>
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={100}
                  height={140}
                />
              </div>
            ))
          ) : (
            <p>No Books in the readList!</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="WishList Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {wishList.length ? (
            wishList.map((book) => (
              <div key={book.id}>
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={100}
                  height={140}
                />
              </div>
            ))
          ) : (
            <p>No Books in the wishList!</p>
          )}
        </div>
      </div>
    </div>
  );
}
