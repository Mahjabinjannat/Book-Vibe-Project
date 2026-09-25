"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBookType } from "@/types/BookType";
import React, { use } from "react";
import { toast } from "react-toastify";

const ReadList = ({ book }: { book: IBookType }) => {
  const { readList, setReadList } = use(BooksContext);
  const handleReadList = () => {
    const alreadyExists = readList.some((item) => book.id === item.id);
    if (!alreadyExists) {
      setReadList([...readList, book]);
      toast.success("Added To ReadList");
    }
  };
  return (
    <div>
      <button
        className="bg-[#23BE0A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1da008] transition cursor-pointer"
        onClick={handleReadList}
      >
        Add to Read
      </button>
    </div>
  );
};

export default ReadList;
