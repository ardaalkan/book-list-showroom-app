import { useState, useEffect, useRef } from "react";
import { API_URL } from "../API";
// const book_limit = 10;

const useFetch = () => {
  const isMounted = useRef(false);
  const [books, setBooks] = useState<any>([]);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    isMounted.current = true;
    async function init() {
      //   const page = 1;
      //   const nextPage = page * book_limit;
      try {
        const response = await fetch(API_URL);
        if (response.body) {
          const json = await response.json();
          if (isMounted.current) setBooks(json);
        } else {
          throw response;
        }
      } catch (e) {
        if (isMounted.current) setError(e);
      } finally {
        if (isMounted.current) setLoading(false);
      }
    }
    init();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return { books, error, loading };
};

export default useFetch;

// `https://example-data.draftbit.com/books?_limit=${book_limit}&offset=${nextPage}`
