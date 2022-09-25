import { useAppContext } from "./context/AppContext";
import { useNavigate } from "react-router-dom";
// import { useMemo } from "react";
import { UserAuth } from "./context/AutContext";

// interface BookLists {
//   books: null;
//   error: null;
//   loading: boolean;
// }

const Book = (book: any) => {
  const { favorite, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();
  const { user } = UserAuth();

  // const favMemo = useMemo(() => {
  // }, [book.id]);

  const favoritesChecker = (id: any) => {
    const boolean = favorite.some((book) => book.id === id);
    return boolean;
  };

  return (
    <div>
      <div
        key={book.id}
        className="text-center bg-slate-200 m-5 p-5 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
      >
        <div>
          <h2 className="font-semibold">{book.title}</h2>
        </div>
        <div className="mt-1 p-1">
          <img
            src={book.image_url}
            alt="#"
            className="w-72 h-96 flex items-center mx-auto"
            onClick={() => navigate(`/books/${book.id}`)}
          />
        </div>
        {user ? (
          <div>
            {favoritesChecker(book.id) ? (
              <button
                onClick={() => removeFromFavorites(book.id)}
                className="bg-indigo-900 text-slate-50 mt-2 p-2 rounded-md"
              >
                Remove Favorite
              </button>
            ) : (
              <button
                onClick={() => addToFavorites(book)}
                className="bg-indigo-700 text-slate-50 mt-2 p-2 rounded-sm"
              >
                Add to Favorite
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Book;
