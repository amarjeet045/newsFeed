import React, { useState, useEffect } from "react";
import FeedApiContext from "../context/FeedApiContext";
import Search from "./Search";
import { Card, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import moment from "moment";
import { useResultData } from "../context/ResultApiContext";
import ResultCards from "./ResultCards";
export default function Publisher() {
  const { apiData } = FeedApiContext();
  const { searchResult,searchLocation } = useResultData();
  console.log(searchLocation,window.location.href)
  console.log(searchResult)
  const [serachFlag,setSearchFlag] =  useState(false)
  const currentRoute =  new URL(window.location.href)
  console.log(currentRoute)

  console.log(decodeURI(window.location.pathname.split("/")[2]).replace("(blog)",""));
  let v = apiData.filter(
    (doc) => doc.PUBLISHER === decodeURI(window.location.pathname.split("/")[2])
  );
 

   v.sort((a, b) => parseFloat(b.TIMESTAMP) - parseFloat(a.TIMESTAMP));

  return (
    <>
      
      {searchResult.length>0?<ResultCards />:""}
      {v.map((val) => {
        console.log(val.TIMESTAMP);
        return (
          <Grid container spacing={2} key={val.TIMESTAMP} className="individualCards" >
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              style={{
                marginTop: "20px",
                display: "block",
                margin: "20px auto",
              }}
            >
              <Card style={{ backgroundColor: "#4f4f4f", color: "#fff" }}>
                <h2>{val.TITLE}</h2>
                <h2>{val.PUBLISHER}</h2>
                <p>{val.HOSTNAME}</p>
                <p>{val.CATEGORY}</p>
                <p>{moment(val.TIMESTAMP).format("Do MMM YYYY HH:mm a")}</p>
                <a
                  rel="noreferrer"
                  href={val.URL}
                  className="external"
                  target="_blank"
                  style={{
                    color: "#fff",
                    display: "block",
                    paddingBottom: "20px",
                  }}
                >
                  Read More
                </a>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
}
