import {
  useEffect,
  useState,
} from "react";

const KEY =
  "github_recent_searches";

export const useRecentSearches =
  () => {
    const [searches, setSearches] = useState([]);

    useEffect(() => {
      const saved =
        JSON.parse(
          localStorage.getItem(KEY)
        ) || [];

      setSearches(saved);
    }, []);

    const addSearch = (
      username
    ) => {
      const updated = [
        username,
        ...searches.filter(
          (item) =>
            item !== username
        ),
      ].slice(0, 5);

      localStorage.setItem(
        KEY,
        JSON.stringify(updated)
      );

      setSearches(updated);
    };

    return {
      searches,
      addSearch,
    };
  };