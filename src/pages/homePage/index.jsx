//import material ui
import { Box, Container, Stack, Typography } from "@mui/material";

//react
import { useState } from "react";
//components
import { Category, Videos } from "../../components";

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");

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
          <Videos />
        </Container>
      </Box>
    </Stack>
  );
};

export default HomePage;
