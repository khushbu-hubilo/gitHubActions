import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Name(props) {
  const [isLogin, setLogin] = useState(true);
  const [searchField, setSearchFiled] = useState("");
  const [data, setData] = useState([]);
  const [newUsername, setNewUserName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [severity, setSeverity] = useState("success");

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  };
  useEffect(() => {
    console.log("calling ue")
    fetchData();
  }, []);

  const DeleteRow = (index) => {
    const a = data.filter((i) => i.id !== index);
    setData(a);
    setToastMessage("Deleted...");
    setOpenSnackbar(true);
    setSeverity("error");
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  const addUser = () => {
    const newItem = {
      username: newUsername.trim(),
      phone: newNumber.trim(),
      email: newEmail.trim(),
    };
    if (newItem) {
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data1) => {
          setData([...data, data1]);
          console.log("calling add::::")
          setNewUserName("");
          setNewNumber("");
          setNewEmail("");
          setOpenSnackbar(true);
          setToastMessage("Added...");
          setSeverity("success");
        });
    }
  };

  const updateUser = (id) => {
    const user = data.find((user) => user.id === id);

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(
        setOpenSnackbar(true),
        setToastMessage("Updated..."),
        setSeverity("info")
      );
  };

  return (
    <Box p={3}>
      {
        <Box>
          {/* <Box style={{ color: isLogin ? "red" : "#4169e1" }}> */}
          {/* {personInfo} */}
          <TextField
            id="outlined-basic"
            type="search"
            label="Search User name"
            size="small"
            variant="outlined"
            onChange={(e) => {
              setSearchFiled(e.target.value);
            }}
            sx={{ mb: 2, bgcolor: "primary.light" }}
            fullWidth
          />
          {data && (
            <TableContainer component={Paper}>
              <Table
                sx={{
                  minWidth: 650,
                  bgcolor: "primary.light",

                  "& th, & td": {
                    color: "#fff",
                    borderColor: "primary.dark",
                  },
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: "700" }}>id</TableCell>
                    <TableCell sx={{ fontWeight: "700" }}>User Name</TableCell>
                    <TableCell sx={{ fontWeight: "700" }}>
                      Phone Number
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }}>
                      Email Address
                    </TableCell>
                    <TableCell sx={{ fontWeight: "700" }}>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell>
                      <TextField
                        size="small"
                        label="username"
                        placeholder="Username"
                        value={newUsername}
                        onChange={(e) => {
                          setNewUserName(e.target.value);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        size="small"
                        type="number"
                        label="Phone"
                        placeholder="Phone"
                        value={newNumber}
                        onChange={(e) => {
                          setNewNumber(e.target.value);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        size="small"
                        type="email"
                        label="Email"
                        placeholder="Email"
                        value={newEmail}
                        onChange={(e) => {
                          setNewEmail(e.target.value);
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Button variant="contained" onClick={addUser}>
                        Add User
                      </Button>
                    </TableCell>
                  </TableRow>
                  {data
                    ?.filter((item) => {
                      return item.username.toLowerCase().includes(searchField);
                    }).map((data, index) => (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                        key={index}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>
                        <TableCell>{data.username}</TableCell>
                        <TableCell>{data.phone}</TableCell>
                        <TableCell>{data.email}</TableCell>
                        <TableCell>
                          <Button
                            variant="contained"
                            color="info"
                            sx={{ mr: 2 }}
                            onClick={() => updateUser(data.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="contained"
                            color="error"
                            onClick={() => DeleteRow(data.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      }
      <Button
        onClick={() => {
          setLogin(!isLogin);
        }}
        variant="contained"
        color={isLogin ? "error" : "info"}
        sx={{ my: 2 }}
      >
        {isLogin ? "Logout" : "LogIn"}
      </Button>

      {/* {backgroundModification} */}
      <Box>
        <p>
          My favorite color is
          <Typography component="span" variant="body1">
            {isLogin ? "red" : "blue"}
          </Typography>
        </p>
        <p>{props.children}</p>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} variant="filled" severity={severity}>
          {toastMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Name;
