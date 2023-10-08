import { styled, Typography, Divider } from "@mui/material";

export const StyledPrice = styled(Typography)({
  fontSize: "32px",
  fontWeight: 700,
  lineHeight: "37.5px",
  letterSpacing: "0em",
  color: "rgba(35, 35, 35, 1)",
});

export const StyledPriceDivider = styled(Divider)({
  position: "absolute",
  bottom: 0,
  left: -18,
  display: "flex",
  flexDirection: "column",
  width: "1px",
  backgroundColor: "rgba(221, 227, 238, 1)",
  height: "100%",
  margin: "0 16px",
});
