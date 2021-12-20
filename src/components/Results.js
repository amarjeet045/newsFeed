import React from "react";
import Grid from "@mui/material/Grid";
import { Card, Box } from "@mui/material";
import moment from "moment";
export default function Results(value) {
  console.log(value.value);
  return (
    <div>
      {value.value.length > 0 ? (
        <>
        <h2>Searched Result {value.value.length}</h2>
          <Grid container spacing={2}></Grid>
          {value.value.map((val) => {
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
            );
          })}
        </>
      ) : (
        ""
      )}
    </div>
  );
}
