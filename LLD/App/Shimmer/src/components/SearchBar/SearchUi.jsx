import React, { useEffect, useState } from "react";

const SearchUi = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isResultVisible, setIsResultVisible] = useState(false);
  const [cache, setCache] = useState({});
  useEffect(() => {
    const s = setTimeout(() => {
      fetchData();
    }, 500);

    return () => {
      clearTimeout(s);
    };
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResults(cache[searchText]);
    } else {
      const data = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );

      const json = await data.json();
      console.log(json[1]);
      setCache((prevCache) => ({
        ...prevCache,
        [searchText]: json[1],
      }));
      setSearchResults(json[1]);
      setSearchText("");
    }
  };

  return (
    <div className="w-96 p-5 m-auto">
      <input
        className="border border-blue-200 rounded-xl w-96  cursor-text"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setIsResultVisible(true)}
        onBlur={() => setIsResultVisible(false)}
      />

      {searchResults && isResultVisible && (
        <ul className="p-2 border border-blue-200 w-96 shadow-lg rounded-b-md">
          {searchResults.map((r) => (
            <li
              className="hover:bg-gray-300 cursor-pointer"
              key={r}
            >
              {r}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchUi;
