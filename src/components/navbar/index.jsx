import { Stack, Box } from "@mui/material";

import { Logo, Linki } from "./styled";
import { SearchInput } from "../index";
const Navbar = () => {
  return (
    <Stack
      justifyContent={"space-between"}
      alignItems={"center"}
      p={2}
      sx={{
        flexDirection: { md: "row" },
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: "#fcfaf5",
      }}
    >
      <Linki>
        <Logo>Bekk.dev</Logo>
      </Linki>
      <SearchInput />
      <Box />
    </Stack>
  );
};

export default Navbar;
