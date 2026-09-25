"use client";
import { BooksContext } from "@/context/BooksContext";
import { IBookType } from "@/types/BookType";
import React, { use } from "react";
import { toast } from "react-toastify";

const WishList = ({ book }: { book: IBookType }) => {
  const { wishList, setWishList } = use(BooksContext);
  const handleWishList = () => {
    const alreadyExists = wishList.some((item) => book.id === item.id);
    if (!alreadyExists) {
      setWishList([...wishList, book]);
      toast.success("Added to WishList");
    }
  };
  return (
    <div>
      <button
        className="border border-[#23BE0A] text-[#23BE0A] px-6 py-3 rounded-lg font-semibold hover:bg-[#23BE0A]/10 transition cursor-pointer"
        onClick={handleWishList}
      >
        Add to Wishlist
      </button>
    </div>
  );
};

export default WishList;
