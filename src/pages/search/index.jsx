import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//service
import { ApiService } from "../../service/api.service";

//import material ui
import { Box, Container, Stack, Typography } from "@mui/material";

//components
import { Videos } from "../../components";

const Search = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q${id}`);
        setVideos(data.items);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    fetchData();
  }, [id]);
  return (
    <Stack>
      <Box p={2}>
        <Container maxWidth={"90%"}>
          <Typography mb={2} fontWeight={"bold"} variant="h4">
            <span style={{ color: "#76323f" }}>{id}</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Search;
