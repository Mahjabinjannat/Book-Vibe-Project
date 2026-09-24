"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="flex justify-between container mx-auto items-center py-6 ">
      <h1 className="font-bold text-[23px] text-[#131313]">
        <Link href="/">Book Vibe</Link>
      </h1>
      <ul className="flex justify-between gap-10">
        <li
          className={`text-[12px] font-semibold text-[#131313] opacity-[80%]`}
        >
          <Link
            href="/"
            className={` ${pathName === "/" ? "text-[#23BE0A] border border-[#23BE0A] py-2 px-4 rounded-[6px]" : ""}`}
          >
            Home
          </Link>
        </li>
        <li
          className={`text-[12px] font-semibold text-[#131313] opacity-[80%]`}
        >
          <Link
            href="./listed-books"
            className={`  ${pathName === "/listed-books" ? "text-[#23BE0A] border border-[#23BE0A] py-2 px-4 rounded-[6px]" : ""}`}
          >
            Listed Books
          </Link>
        </li>
        <li
          className={`text-[12px] font-semibold text-[#131313] opacity-[80%]`}
        >
          <Link
            href="/read-books"
            className={`${pathName === "/read-books" ? "text-[#23BE0A] border border-[#23BE0A] py-2 px-4 rounded-[6px]" : ""}`}
          >
            Book to Read
          </Link>
        </li>
      </ul>
      <div className="flex gap-4">
        <button className="bg-[#23BE0A] py-2 px-4 text-[12px] rounded-[7px] text-white font-bold cursor-pointer">
          Sign In
        </button>
        <button className="bg-[#59C6D2] py-2 px-4 text-[12px] rounded-[7px] text-white font-bold cursor-pointer">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
