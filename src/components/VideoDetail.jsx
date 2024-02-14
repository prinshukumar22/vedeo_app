import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/lazy";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
const VideoDetail = () => {
  const { videoId } = useParams();
  const [suggestedVideos, setSuggestedVideos] = useState([]);
  const [VideoDetail, setVideoDetail] = useState(null);
  useEffect(() => {
    fetchFromAPI(
      `videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`
    )
      .then()
      .catch((err) => console.log(err));
  }, [videoId]);
  useEffect(() => {
    fetchFromAPI(`search?part=id&q=${videoId}`)
      .then()
      .catch((err) => console.log(err));
  }, [videoId]);
  return (
    <Grid container>
      <Grid item xs={12} md={10}>
        <ReactPlayer url={`https://youtu.be/${videoId}`}></ReactPlayer>
      </Grid>
      <Grid item xs={12} md={2}></Grid>
    </Grid>
  );
};

export default VideoDetail;
