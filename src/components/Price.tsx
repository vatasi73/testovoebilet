import { Box } from "@mui/material";
import { StyledPrice, StyledPriceDivider } from "./PriceStyled";
import { useSelector } from "react-redux";
import { selectBack } from "../features/searchSlice";

const Price = () => {
  const back = useSelector(selectBack);
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        maxWidth: "190px",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: "34px",
      }}
    >
      <StyledPrice>{back === "" ? "4 150 ₽" : "8 300 ₽"}</StyledPrice>
      <StyledPriceDivider />
    </Box>
  );
};

export default Price;
