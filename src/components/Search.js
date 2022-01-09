import React, { useRef, useState, useEffect } from "react";
import FeedApiContext from "../context/FeedApiContext";
import Home from "./Home";
import Results from "./Results";

export default function Search() {
  const inputValue = useRef();
  const { apiData } = FeedApiContext();
  const [searchedValue, setSearchedValue] = useState([]);
  const handleSearch = () => {
    const data = [];
    apiData.forEach((doc) => {
      const val = {
        PUBLISHER: doc.PUBLISHER,
        TITLE: doc.TITLE,
      };
      data.push(val);
    });
    const filtered = data.filter((doc) => {
      return Object.values(doc)
        .join("")
        .toLowerCase()
        .includes(inputValue.current.value.toLowerCase());
    });
    console.log(filtered);

    setSearchedValue(filtered);
  };
  console.log(searchedValue);
  return (
    <div>
      <input type="text" ref={inputValue}></input>
      <button onClick={handleSearch}>Search</button>
      <Results value={searchedValue} />
    </div>
  );
}
