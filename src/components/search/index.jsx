import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

import { Input } from "./styled";

const SearchInput = () => {
  return (
    <Paper
      component={"form"}
      sx={{ border: `2px solid #76323f `, pl: 2, boxShadow: "none" }}
    >
      <Input type="text" placeholder="Search..." />
      <IconButton>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;
