import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FeedApiContext from "../context/FeedApiContext";
import Search from "./Search";
import { useResultData } from "../context/ResultApiContext";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import ResultCards from "./ResultCards";
export default function Home(searchValue) {
  const { searchResult,searchLocation } = useResultData();
  console.log(searchLocation,window.location.href)
 
  const { apiData } = FeedApiContext();
  const publisher = apiData.map((pub) => pub.PUBLISHER);
  const filtered = apiData.filter(
    ({ PUBLISHER }, index) => !publisher.includes(PUBLISHER, index + 1)
  );

  return (
    <>
    {searchResult.length>0?<ResultCards />:""}
      {apiData !== undefined ? (
        <>
          <Grid container spacing={2} className="homepageButton">
            {filtered.map((val) => {
              return (
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
                  key={val.TIMESTAMP}
                >
                  <Link className="external" to={`/publisher/${val.PUBLISHER}`}>
                    <Button variant="contained" className="publisherButton">
                      {val.PUBLISHER}
                    </Button>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        ""
      )}
    </>
  );
}
