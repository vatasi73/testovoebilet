import { Box } from "@mui/material";

import Irrevocable from "./Irrevocable";
import Logo from "./Logo";
import Datee from "./Datee";
import Baggage from "./Baggage";
import Price from "./Price";
import { selectFrom, selectTo } from "../features/searchSlice";
import { useSelector } from "react-redux";

const Card = () => {
  const from = useSelector(selectFrom);
  const to = useSelector(selectTo);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        maxWidth: "980px",
        height: "200px",
        width: "100%",
        margin: "5em auto",
        boxShadow: "0px 0px 14px rgba(112, 121, 153, 0.3)",
        borderRadius: "15px",
        paddingLeft: "23px",
      }}
    >
      <Irrevocable />
      <Logo />
      <Datee from={from} to={to} />
      <Baggage />
      <Price />
    </Box>
  );
};

export default Card;
