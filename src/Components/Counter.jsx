import React, {useEffect, useState} from "react";
import { Button, Box, Typography, } from "@mui/material";
import "../App.css";

function Counter() {
  const initialCount = 0;
  const [counter, setCounter] = useState(initialCount);
  useEffect(()=>{
    document.title= counter
  })

  return (
    <div className="App">
      <div className="main">
        <h1>Counter : <Typography component="span" variant="h1" color={counter > 10 ? 'error' : '#fff'}>{counter}</Typography></h1>
        <Box>
          <Button variant="contained" sx={{m:2}} onClick={() => setCounter(initialCount)}>Reset</Button>
          <Button variant="contained" sx={{m:2}} onClick={() => setCounter(counter + 1)}>Increment</Button>
          <Button variant="contained" sx={{m:2}} onClick={() => setCounter(counter - 1)}>Decrement</Button>
          <Button variant="contained" sx={{m:2}} onClick={() => setCounter(counter + 5)}>Increment 5</Button>
        </Box>
      </div>
    </div>
  );
}

export default Counter;
