import { Box, Divider } from "@mui/material";
import { selectFrom, selectTo } from "../features/searchSlice";
import Irrevocable from "./Irrevocable";
import Logo from "./Logo";
import Datee from "./Datee";
import Baggage from "./Baggage";
import Price from "./Price";
import { StyledWraper } from "./CardsStyled";
import { useSelector } from "react-redux";

const Cards = () => {
  const from = useSelector(selectFrom);
  const to = useSelector(selectTo);
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "980px",

        width: "100%",
        margin: "5em auto",
        boxShadow: "0px 0px 14px rgba(112, 121, 153, 0.3)",
        borderRadius: "15px",
      }}
    >
      <Box sx={{ maxWidth: "980px", width: "100%" }}>
        <StyledWraper>
          <Irrevocable />
          <Logo />
          <Datee from={from} to={to} />
          <Baggage />
        </StyledWraper>
        <Divider
          sx={{
            marginBottom: "-1px",
            marginLeft: "40px",
            marginRight: "1px",
            borderStyle: "dashed",
            borderColor: "rgba(139, 165, 216, 1)",
          }}
        />
        <StyledWraper>
          <Irrevocable />
          <Logo />
          <Datee from={to} to={from} />
          <Baggage />
        </StyledWraper>
      </Box>
      <Price />
    </Box>
  );
};

export default Cards;
