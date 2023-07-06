import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
  InputLabel,
  FormControl,
} from "@mui/material";
import React from "react";
import "../App.css";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const [gender, setGender] = React.useState("");

  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      firstName: "Khushbu",
      lastName: "Vaghela",
      age: "30",
      gender: "Female",
    },
  });
  console.log("Watching::", watch());
  const handleChange = (event) => {
    setGender(event.target.value);
  };
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ width: "30vw", mt:6 ,mx: "auto", p: 4, bgcolor:"primary.light", borderRadius:'20px',  }}>
     <Typography textAlign="center" variant="h4" fontWeight={600} sx={{ marginBottom:4}}>
          This is sign in page
        </Typography>
      <Box>
       
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={{ m: 2 }}>
            <TextField
              {...register("firstName")}
              label="First name"
              fullWidth
            />
          </Box>
          <Box sx={{ m: 2 }}>
            <TextField {...register("lastName")} label="Last name" fullWidth />
          </Box>
          <Box sx={{ m: 2 }}>
            <TextField
              {...register("age", {
                valueAsNumber: true,
              })}
              label="age"
              type="number"
              fullWidth
            />
          </Box>
          <Box sx={{ m: 2 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                {...register("gender")}
                value={gender}
                label="Gender"
                onChange={handleChange}
                defaultValues="female"
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ m: 2 }}>
            <Button type="submit" variant="contained" size="large" fullWidth>
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default SignIn;
