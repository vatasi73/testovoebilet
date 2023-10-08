import { Typography, Box } from "@mui/material";
type DateInfo = {
  city: string;
  date: string;
  time: string;
};

const DateInfo = ({ city, date, time }: DateInfo) => {
  const now: Date = new Date(date);
  const dateOptions: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  const RUDate: Intl.DateTimeFormat = new Intl.DateTimeFormat(
    "ru",
    dateOptions
  );
  return (
    <Box
      sx={{
        width: "113px",
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "28px",
          letterSpacing: "0em",
          color: "rgba(35, 35, 35, 1)",
          textAlign: "left",
          marginBottom: "8px",
        }}
      >
        {time}
      </Typography>
      {city && date ? (
        <>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "16.41px",
              letterSpacing: "0em",
              color: "rgba(92, 92, 92, 1)",
              textAlign: "left",
            }}
          >
            {city}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "16.41px",
              letterSpacing: "0em",
              color: "rgba(92, 92, 92, 1)",
              textAlign: "left",
            }}
          >
            {date && RUDate.format(now)}
          </Typography>
        </>
      ) : (
        <Typography>нет данных</Typography>
      )}
    </Box>
  );
};

export default DateInfo;
