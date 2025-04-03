import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  Avatar,
} from "@mui/material";
import moment from "moment";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({ video }) => {
  return (
    <Card sx={{ width: "320px", boxShadow: "none", borderRadius: 0 }}>
      <CardMedia
        image={video?.snippet?.thumbnails?.high?.url}
        alt={video?.snippet?.channelTitle}
        sx={{ width: "100%", height: "180px" }}
      />
      <CardContent
        sx={{ background: " #fcfaf5", height: "200px", position: "relative" }}
      >
        <>
          <Typography my={"5px"} sx={{ opacity: "0.4" }}>
            {moment(video?.snippet?.publishedAt).fromNow()}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video?.snippet?.title.slice(0, 50)}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ opacity: "0.6", marginBottom: "10px" }}
          >
            {video?.snippet?.description.slice(0, 40)}
          </Typography>
        </>
        <>
          <Stack
            position={"absolute"}
            bottom={"10px"}
            alignItems={"center"}
            gap={"5px"}
            direction={"row"}
          >
            <Avatar src={video?.snippet?.thumbnails?.high?.url} />
            <Typography variant="subtitle2" color="gray" ml={"4px"}>
              {video?.snippet?.channelTitle}
              <CheckCircle color="gray" fontSize="12px" />
            </Typography>
          </Stack>
        </>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
