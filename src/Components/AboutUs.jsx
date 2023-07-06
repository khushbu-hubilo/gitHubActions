import { Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../App.css";

function AboutUs() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
  },[]);
  const tick = () => {
    setCounter((oldValue) => oldValue + 1);
  };

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        className="main"
        variant="h1"
        sx={{ fontSize: "120px", m: "auto", color:'primary.light', ...(counter >= 15 && {color: "#ff0000"}), ...(counter >= 30 && {color: "#00ff00"}), }}
      >
        {counter}
      </Typography>
    </Box>
  );
}

export default AboutUs;
