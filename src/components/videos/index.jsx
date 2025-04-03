import React from "react";
import { Box, Stack } from "@mui/material";

import { VideoCard, ChannelCard } from "../../components";
import { v4 as uuidv4 } from "uuid";

const Videos = ({ videos }) => {
  console.log(videos);

  return (
    <Stack
      width={"100%"}
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={2}
    >
      {videos.map((video) => {
        return (
          <>
            <Box key={uuidv4()}>
              {video.id.videoId && <VideoCard video={video} />}
              {video.id.channelId && <ChannelCard video={video} />}
            </Box>
          </>
        );
      })}
    </Stack>
  );
};

export default Videos;
