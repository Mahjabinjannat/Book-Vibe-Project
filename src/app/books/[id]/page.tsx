import ReadList from "@/component/Buttons/ReadList";
import WishList from "@/component/Buttons/WishList";

import Image from "next/image";

const BookDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5001/books/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch book details");
  }

  const book = await res.json();

  return (
    <main className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Book Image */}
        <div className="bg-[#F3F3F3] rounded-[17px] h-[500px] flex items-center justify-center">
          <Image
            src={book.image}
            alt={book.bookName}
            width={300}
            height={400}
            className="h-[80%] w-auto object-contain"
          />
        </div>

        {/* Book Information */}
        <div>
          {/* Category */}
          <p className="text-[#23BE0A] text-sm font-semibold mb-3">
            {book.category}
          </p>

          {/* Book Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#131313] mb-3">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-lg text-gray-600 mb-6">
            By: <span className="font-medium">{book.author}</span>
          </p>

          <hr className="border-[#131313]/15 mb-6" />

          {/* Review */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Review</h2>

            <p className="text-gray-600 leading-7">{book.review}</p>
          </div>

          {/* Book Details */}
          <div className="space-y-3 mb-6">
            <p>
              <span className="font-semibold">Total Pages:</span>{" "}
              {book.totalPages}
            </p>

            <p>
              <span className="font-semibold">Publisher:</span> {book.publisher}
            </p>

            <p>
              <span className="font-semibold">Year of Publishing:</span>{" "}
              {book.yearOfPublishing}
            </p>

            <p>
              <span className="font-semibold">Rating:</span> ⭐ {book.rating}
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {book.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-4 py-2 rounded-full bg-[#23BE0A]/10 text-[#23BE0A] text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <WishList book={book} />

            <ReadList book={book} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;
