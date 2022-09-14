import { createContext, useContext, ReactNode } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type FavoriteItem = {
  favorite: string;
  id: number;
  quantity: any;
};

type AppContextProviderTypes = {
  children: ReactNode;
};

type AppContext = {
  favorite: FavoriteItem[];
  addToFavorites: (book: any) => void;
  removeFromFavorites: (id: number) => void;
  favQuantity: number;
};

const AppContext = createContext({} as AppContext);

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppContextProvider = ({ children }: AppContextProviderTypes) => {
  const [favorite, setFavorite] = useLocalStorage<FavoriteItem[]>(
    "favorite-items",
    []
  );

  const addToFavorites = (book: any) => {
    const previousBook = [...favorite];
    const newFavBook = previousBook.concat(book);
    setFavorite(newFavBook);
  };

  const removeFromFavorites = (id: number) => {
    const previousFavorite = [...favorite];
    const newFavBook = previousFavorite.filter((book) => book.id !== id);
    setFavorite(newFavBook);
  };

  const favQuantity = favorite.length;

  return (
    <AppContext.Provider
      value={{ favorite, addToFavorites, removeFromFavorites, favQuantity }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
