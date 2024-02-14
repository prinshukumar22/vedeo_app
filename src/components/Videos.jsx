import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Videos = ({ videos }) => {
  console.log(videos);
  return (
    <Grid container spacing={2} sx={{ overflow: "auto", height: "90%" }}>
      {videos.map((video, index) => {
        return (
          <Grid item xs={12} md={3} key={index}>
            <CardActionArea>
              <Link
                to={`/video/${video.id.videoId}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <Card
                  sx={{
                    height: "290px",
                    backgroundColor: `${
                      video.id.kind.split("#")[1] === "channel"
                        ? "inherit"
                        : "#1e1e1e"
                    }`,
                    color: "#fff",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    src={video.snippet.thumbnails.high.url}
                    alt="thumbnail"
                    sx={{
                      borderRadius: `${
                        video.id.kind.split("#")[1] === "channel" ? "50%" : ""
                      }`,
                      objectFit: `${
                        video.id.kind.split("#")[1] === "channel"
                          ? "contain"
                          : "cover"
                      }`,
                    }}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ fontSize: "1rem", fontWeight: "800" }}
                    >
                      {video.snippet.title}
                    </Typography>

                    {video.id.kind.split("#")[1] === "video" && (
                      <Typography
                        variant="body2"
                        sx={{
                          color: "gray",
                          fontWeight: "900",
                          display: "flex",
                          fontSize: "1rem",
                        }}
                      >
                        {video.snippet.channelTitle}

                        <CheckCircleIcon
                          sx={{ marginLeft: "5px" }}
                        ></CheckCircleIcon>
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Link>
            </CardActionArea>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Videos;
