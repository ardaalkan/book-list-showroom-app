// import { API_URL } from "../API";
import Book from "../components/Book";
import useFetch from "../hooks/useFetch";

// interface BookLists {
//   books: null;
//   error: null;
//   loading: boolean;
// }

const BookList = () => {
  const { books } = useFetch();

  return (
    <div className="w-3/5 grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center m-auto">
      {books !== null &&
        books.length > 0 &&
        books.map((book: any) => <Book {...book} />)}
    </div>
  );
};

export default BookList;
