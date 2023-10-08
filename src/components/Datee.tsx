import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import DateInfo from "./DateInfo";
import {
  StyledAirport,
  StyledCircle,
  StyledDivider,
  StyledFlyTime,
} from "./DateeStyled";
import Tabs from "./Tabs";
import {
  selectArrivalTime,
  selectBack,
  selectDepartureTime,
  selectThere,
} from "../features/searchSlice";

type Datee = {
  from: string;
  to: string;
};
const Datee = ({ from, to }: Datee) => {
  const there = useSelector(selectThere);
  const back = useSelector(selectBack);
  const departureTime = useSelector(selectDepartureTime);
  const arrivalTime = useSelector(selectArrivalTime);
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "left",
        flexDirection: "column",
        maxWidth: "563px",
        width: "100%",
        marginLeft: "48px",
        paddingRight: "22px",
        paddingTop: "41px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "563px",
          width: "100%",
        }}
      >
        <DateInfo
          city={from}
          date={there}
          time={back !== "" ? "22:57" : departureTime}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "297px",
            width: "100%",
            marginTop: "16px",
            marginRight: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              maxWidth: "297px",
              width: "100%",
            }}
          >
            <StyledCircle>
              <StyledAirport>SVO</StyledAirport>
            </StyledCircle>
            <StyledDivider />
            <StyledCircle>
              <StyledAirport>ROV</StyledAirport>
            </StyledCircle>
          </Box>
          <StyledFlyTime>В пути 1 ч 55 мин</StyledFlyTime>
        </Box>
        <DateInfo
          city={to}
          date={there}
          time={back !== "" ? "11:05" : arrivalTime}
        />
      </Box>
      {back === "" && <Tabs />}
    </Box>
  );
};

export default Datee;
