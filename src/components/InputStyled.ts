import { styled, TextField } from "@mui/material";

export const StyledInput = styled(TextField)({
  width: "208px",
  border: "none",
  mt: 3,
  "& .MuiInputBase-input": {
    color: "rgba(92, 92, 92, 1)",
    fontSize: "14px",
    fontWeight: 700,
    lineHeight: "16px",
    letterSpacing: "0em",
    display: "flex",
    flexDirection: "row-reverse",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    height: "40px",
    background: "rgba(255, 255, 255, 1)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
});
