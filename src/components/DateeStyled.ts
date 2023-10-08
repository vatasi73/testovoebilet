import { styled, Typography, Box, Divider } from "@mui/material";

export const StyledAirport = styled(Typography)({
  position: "absolute",
  top: -24,
  left: -11,
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0em",
  color: "rgba(183, 186, 193, 1)",
});
export const StyledCircle = styled(Box)({
  position: "relative",
  display: "flex",
  height: "8px",
  padding: "4px",
  background: "rgba(196, 196, 196, 1)",
  borderRadius: "50%",
});
export const StyledFlyTime = styled(Typography)({
  display: "flex",
  maxWidth: "140px",
  width: "100%",
  margin: "0 auto",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "20px",
  letterSpacing: "0em",
  color: "rgba(183, 186, 193, 1)",
});
export const StyledDivider = styled(Divider)({
  maxWidth: "261px",
  width: "100%",
  height: "1px",
  marginTop: "3px",
  background: "rgba(196, 196, 196, 1)",
});
