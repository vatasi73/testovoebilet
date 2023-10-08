import { styled, Button } from "@mui/material";

export const StyledButton = styled(Button)({
  position: "absolute",
  right: 0,
  bottom: -90,
  width: "158px",
  height: "40px",
  borderRadius: "10px",
  textTransform: "none",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "19.6px",
  background: "gray",
  color: "rgba(255, 255, 255, 1)",
  backgroundColor: "rgba(92, 135, 219, 1)",
  "&:hover": {
    color: "rgba(255, 255, 255, 1)",
    background: "rgba(62, 103, 183, 1)",
  },
  "&:active": {
    color: "rgba(255, 255, 255, 0.5)",
    background: "rgba(92, 135, 219, 1)",
  },
  "& .MuiTouchRipple-root": {
    color: "white",
  },
});
