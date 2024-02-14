import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Sidebar from "./Sidebar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const Feed = ({ searchedText }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const [selectedContent, setSelectedContent] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedContent}`)
      .then((data) => {
        setVideos(data.items);
      })
      .catch((err) => console.log(err));
  }, [selectedContent]);

  useEffect(() => {
    setSelectedContent(searchedText);
  }, [searchedText]);

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems={"center"}
      sx={{ height: "91.1vh", background: "#000", color: "#fff" }}
    >
      <Box
        sx={{
          height: `${matches ? "100%" : "15%"}`,
          width: `${matches ? "15%" : "100%"}`,
        }}
      >
        <Sidebar
          selectedContent={selectedContent}
          setSelectedContent={setSelectedContent}
        ></Sidebar>
        <Typography
          sx={{
            height: "10%",
            display: `${matches ? "flex" : "none"}`,
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          2023 Prinshu, All Rights Reserved &#174;
        </Typography>
      </Box>
      <Box
        sx={{
          height: `${matches ? "100%" : "85%"}`,
          width: `${matches ? "85%" : "100%"}`,
        }}
        p={2}
      >
        <Typography variant="h4" sx={{ fontWeight: "900", height: "10%" }}>
          {selectedContent} <span style={{ color: "red" }}>videos</span>
        </Typography>
        <Videos videos={videos}></Videos>
      </Box>
    </Stack>
  );
};

export default Feed;
