import React from "react";
import Grid from "@mui/material/Grid";
import { Card, Box } from "@mui/material";
import moment from "moment";
import { useResultData } from "../context/ResultApiContext";
export default function ResultCards() {
  const { searchResult } = useResultData();
  return (
    <div className="resultCards">
      {searchResult.map((val) => {
        return (
          <Grid
            container
            spacing={2}
            key={val.TIMESTAMP}
            className="individualCards"
          >
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
    </div>
  );
}
