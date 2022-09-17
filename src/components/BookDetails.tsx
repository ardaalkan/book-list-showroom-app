import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BOOK_DETAILS_URL } from "../API";

interface bookType {
  title: string;
  image_url: string;
  description: string;
  authors: string;
  genres: string;
}

const BookDetails = () => {
  const [book, setBook] = useState<bookType>();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${BOOK_DETAILS_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  console.log(book?.title);

  return (
    <>
      <div className="flex display-row m-auto mt-12 w-10/12">
        <div className="w-1/3">
          <h2 className="font-bold text-2xl text-blue-600">{book?.title}</h2>
          <img
            className="h-[340px] m-auto mt-6"
            src={book?.image_url}
            alt="url"
          />
        </div>
        <div className="w-2/3 mt-12 text-left">
          <h2 className="font-bold mb-1">Description</h2>
          <p className="mb-4">{book?.description}</p>

          <h2 className="font-bold mb-1">Authors</h2>
          <p className="mb-4">{book?.authors}</p>

          <h2 className="font-bold mb-1">Genres</h2>
          <p>{book?.genres}</p>
        </div>
      </div>
    </>
  );
};

export default BookDetails;