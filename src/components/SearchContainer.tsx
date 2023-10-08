import { Box } from "@mui/material";
import Search from "../features/Search";
const SearchContainer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        maxWidth: "963px",
        background: "rgba(92, 135, 219, 1)",
        borderRadius: "15px 15px 0px 0px",
        margin: "0 auto",
        mt: 5,
        justifyContent: "center",
        padding: "30px",
        paddingBottom: "27px",
      }}
    >
      <Search />
    </Box>
  );
};

export default SearchContainer;
