import React, { useContext, useState } from "react";
import FeedApiContext from "./FeedApiContext";
const ResultContext = React.createContext();
export function useResultData() {
  return useContext(ResultContext);
}
export default function ResultData({ children }) {
  const [searchResult, setSearchResult] = useState([]);
  const [searchLocation,setSearchLocation] =  useState("")
  function handleSearchResult(apiData, toSearch,location) {
    setSearchLocation(location)
    const data = [];
    apiData.forEach((doc) => {
      const val = {
        PUBLISHER: doc.PUBLISHER,
        TITLE: doc.TITLE,
      };
      data.push(val);
    });
    const filtered = data.filter((doc) => {
      return Object.values(doc).join("").toLowerCase().includes(toSearch);
    });
    setSearchResult(filtered)
    return filtered;
  }
  const value = {
    handleSearchResult,
    searchResult,
    searchLocation
  };
  return (
    <ResultContext.Provider value={value}>{children}</ResultContext.Provider>
  );
}
