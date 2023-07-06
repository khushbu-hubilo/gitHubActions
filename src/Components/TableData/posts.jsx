import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function Posts() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    return setData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "80%", mt: 2, mx: "auto" }}>
      <Grid container spacing={2}>
        {data.slice(0, 12).map((d, index) => (
          <Grid key={index} item xs={4} sx={{flex:1}}>
            <Box sx={{ textAlign: "center", border: "1px solid", flex:1 }}>
              <Box sx={{'& img':{height:'100%', width:'100%'}}}>
                <img src={d.url} alt={d.url} />
              </Box>
              <Box mb={2}>{d.title.slice(0, 20)}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Posts;
