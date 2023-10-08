import { Box, Tab, Typography } from "@mui/material";
import { useState } from "react";
import { StyledDepartureTime, StyledTabs } from "./TabsStyled";
import { useAppDispatch } from "../store";
import { setArrivalTime, setDepartureTime } from "../features/searchSlice";

const time = [
  {
    departure: "09:20",
    arrival: "11:05",
  },
  {
    departure: "10:20",
    arrival: "12:05",
  },
  {
    departure: "11:20",
    arrival: "13:05",
  },
];
const Tabs = () => {
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    dispatch(setDepartureTime(time[newValue].departure));
    dispatch(setArrivalTime(time[newValue].arrival));
  };

  return (
    <Box sx={{ mt: 3 }}>
      <StyledTabs onChange={handleChange} value={value}>
        {time.map((el, i) => (
          <Tab
            key={i}
            label={
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StyledDepartureTime>
                  {el.departure + " - "}
                </StyledDepartureTime>
                <Typography sx={{ fontSize: "14px" }}> {el.arrival}</Typography>
              </Box>
            }
            disableRipple={true}
          />
        ))}
      </StyledTabs>
    </Box>
  );
};
//
export default Tabs;
