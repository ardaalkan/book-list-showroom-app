import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { BOOK_DETAILS_URL } from "../API";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  type books = {
    title: string;
  };
  
  return (
    <>
      <div>
        <div>
          <h2>{book.title}</h2>
        </div>
      </div>
    </>
  );
};

export default BookDetails;

// fetch, auth, darktheme context
