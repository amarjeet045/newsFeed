import React, { useRef, useState, useEffect } from "react";
import FeedApiContext from "../context/FeedApiContext";
import { useResultData } from "../context/ResultApiContext";
import Home from "./Home";

export const SearchResultValue = React.createContext();
export default function Search() {
  const inputValue = useRef();
  const { apiData } = FeedApiContext();
  const [isSearchActive, setSearchActive] = useState(false);

  const [searchedValue, setSearchedValue] = useState([]);
  const { handleSearchResult } = useResultData();
  const handleSearch = async () => {
    setSearchActive(true);
    
    handleSearchResult(apiData, inputValue.current.value.toLowerCase(),window.location.href);
    inputValue.current.value= ""
  
  };
  console.log(searchedValue);
  return (
    <div>
      <input type="text" ref={inputValue}></input>
      <button onClick={handleSearch}>Search</button>
      {/* <Results value={searchedValue} /> */}
    </div>
  );
}
