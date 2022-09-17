import { useAppContext } from "./context/AppContext";
import { NavLink } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";

const Favorites = () => {
  const { favorite, addToFavorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id: any) => {
    const boolean = favorite.some((book) => book.id === id);
    return boolean;
  };

  return (
    <>
      <h1 className="font-bold text-3xl mt-6 mb-6 text-sky-700">
        Favorite Content
      </h1>
      <div className="w-3/5 min-h-[80vh] grid grid-cols-3 gap-4 justify-center m-auto">
        {favorite.length > 0 ? (
          favorite !== null &&
          favorite.length > 0 &&
          favorite.map((book: any) => (
            <div
              key={book.id}
              className="text-center max-h-[560px] bg-slate-200 m-5 p-5 items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300"
            >
              <div>
                <h2>{book.title}</h2>
              </div>
              <div className="mt-1 p-1">
                <img
                  src={book.image_url}
                  alt="#"
                  className="w-72 h-96 flex items-center mx-auto"
                />
              </div>
              <div>
                {favoritesChecker(book.id) ? (
                  <button
                    onClick={() => removeFromFavorites(book.id)}
                    className="bg-indigo-700 text-slate-50 mt-2 p-2 rounded-sm"
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
            </div>
          ))
        ) : (
          <div className="text-center bg-slate-200 m-5 p-5 items-center font-bold h-64">
            You dont have <br />
            any favorite <br />
            content! 😥
            <NavLink
              to="/"
              className="ml-1 mr-1 mt-6 p-6 bg-slate-100 flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300 rounded-md"
            >
              <HiArrowLeft className="my-auto " />
              <p className="font-bold ml-2">Home</p>
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default Favorites;
