import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Stack from "@mui/material/Stack";

import { Feed, Navbar, VideoDetail } from "./components";
const App = () => {
  const [searchedText, setSearchedText] = useState("New");
  return (
    <Stack direction="column" justifyContent="center">
      <BrowserRouter>
        <Navbar
          searchedText={searchedText}
          setSearchedText={setSearchedText}
        ></Navbar>

        <Routes>
          <Route
            path="/"
            exact
            element={<Feed searchedText={searchedText}></Feed>}
          ></Route>
          <Route
            path="/search/:searchedText"
            element={<Feed searchedText={searchedText}></Feed>}
          ></Route>
          <Route
            path="/video/:videoId"
            element={<VideoDetail></VideoDetail>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </Stack>
  );
};

export default App;
