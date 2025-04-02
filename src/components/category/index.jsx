import React from "react";
//import materila ui
import { Stack } from "@mui/material";
import { category } from "../../utils/index";

import { Button } from "./styled";

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={"row"} gap={"15px"} sx={{ overflowX: "scroll" }}>
      {category.map((item) => {
        return (
          <Button
            key={item.name}
            onClick={() => selectedCategoryHandler(item.name)}
            $isSelected={item.name === selectedCategory}
          >
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </Button>
        );
      })}
    </Stack>
  );
};

export default Category;
