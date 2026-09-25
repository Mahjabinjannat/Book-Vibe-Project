"use client";
import React, { ReactNode, useState } from "react";
import { createContext } from "react";
import { IBookType } from "@/types/BookType";

interface BooksContextType {
  readList: IBookType[];
  setReadList: React.Dispatch<React.SetStateAction<IBookType[]>>;
  wishList: IBookType[];
  setWishList: React.Dispatch<React.SetStateAction<IBookType[]>>;
}

export const BooksContext = createContext<BooksContextType>({
  readList: [],
  setReadList: () => {},
  wishList: [],
  setWishList: () => {},
});

const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [readList, setReadList] = useState<IBookType[]>([]);
  const [wishList, setWishList] = useState<IBookType[]>([]);

  const sharedData = {
    readList,
    setReadList,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={sharedData}>{children}</BooksContext.Provider>
  );
};

export default BooksProvider;
