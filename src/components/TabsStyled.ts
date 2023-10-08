import { Tabs, Typography, styled } from "@mui/material";

export const StyledTabs = styled(Tabs)({
  "& button": {
    width: "107px",
    minHeight: "39px",
    textTransform: "none",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "16px",
    borderRadius: "10px",
    border: "solid 1px rgba(183, 186, 193, 1)",
    color: "rgba(92, 92, 92, 1)",
    padding: 0,
  },
  "& button:not(:last-child)": {
    marginRight: "20px",
  },
  "& button.Mui-selected": {
    width: "130px",
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "rgba(34, 34, 34, 1)",
    background: "rgba(34, 34, 34, 1)",
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
});

export const StyledDepartureTime = styled(Typography)({
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "21.09px",
  letterSpacing: "0em",
  marginRight: "2px",
});
