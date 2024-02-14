import React, { useRef } from "react";
import Stack from "@mui/material/Stack";
import { logo } from "../utils/constants";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { pink } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
const Navbar = ({ searchedText, setSearchedText }) => {
  const inputRef = useRef();
  const navigate = useNavigate();
  let searched;
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      spacing={2}
      alignItems="center"
      p={1}
      sx={{ backgroundColor: "#000" }}
    >
      <Box sx={{ flexGrow: 7 }}>
        <img src={logo} alt="logo" height={45}></img>
      </Box>
      <Paper
        component="form"
        sx={{
          flexGrow: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50px",
          padding: "0.5rem",
          gap: "10px",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          setSearchedText(searched);
          inputRef.current.firstChild.value = "";
          navigate(`/search/${searched}`);
        }}
      >
        <SearchIcon sx={{ color: pink[500] }} />
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => {
            searched = e.target.value;
          }}
          ref={inputRef}
        />
      </Paper>
    </Stack>
  );
};

export default Navbar;
