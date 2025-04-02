//import material ui
import { Box, Container, Stack, Typography } from "@mui/material";

//react
import { useState, useEffect } from "react";
//components
import { Category, Videos } from "../../components";

//service
import { ApiService } from "../../service/api.service";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ApiService.fetching(
          `search?part=snippet&q${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const selectedCategoryHandler = (category) => setSelectedCategory(category);
  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box p={2}>
        <Container maxWidth={"90%"}>
          <Typography mb={2} fontWeight={"bold"} variant="h4">
            {selectedCategory} <span style={{ color: "#76323f" }}>Videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default HomePage;
