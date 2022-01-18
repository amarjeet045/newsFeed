import React, { useState, useEffect } from "react";

export default function FeedApiContext() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      var raw = undefined;
      var myHeaders = new Headers();
      var requestOptions = {
        method: "GET",
        body: raw,
        headers: myHeaders,
        redirect: "follow",
      };
      const result = await fetch(
        `https://s3-ap-southeast-1.amazonaws.com/he-public-data/newsf6e2440.json`,
        requestOptions
      );
      let res = await result.json();
      const data = []
      res.forEach(doc =>{
       

        if(doc.PUBLISHER.indexOf("(")>0)
        {
            // console.log(doc.PUBLISHER)
        }
        else{
            data.push(doc)  
        }

      })
      
      
      setApiData(data);
    }

    fetchUsers();
  }, []);
  const value = {
    apiData,
  
  };
  return value;
}
