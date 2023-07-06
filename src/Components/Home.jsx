import React from "react";
import { Outlet } from "react-router-dom";
import {
  Box,
} from "@mui/material";
import "../App.css";

const Home = () => {
  var name = "Brian";

  //alert 'string'
  console.log(typeof name);

  //cast to boolean
  var bool = !!name;

  //alert 'boolean'
  console.log(typeof bool);

  return (
    <>
      <Box sx={{ m: 3 }}>{bool ? "true" : "false"}</Box>
      <Outlet />
    </>
  );
};

export default Home;
