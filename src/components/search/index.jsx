import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Input } from "./styled";

const SearchInput = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) navigate(`/search/${value}`);
    console.log(value);
  };

  return (
    <Paper
      onSubmit={handleSubmit}
      component={"form"}
      sx={{ border: `2px solid #76323f `, pl: 2, boxShadow: "none" }}
    >
      <Input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Search..."
      />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
