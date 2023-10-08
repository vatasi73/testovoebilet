import { CardMedia, Box } from "@mui/material";
import baggage from "../assets/багаж.png";
import bag from "../assets/сумка.png";
const Baggage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "37px",
        gap: "10px",
        marginTop: "-5px",
        marginRight: "20px",
        paddingTop: "41px",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: "20px",
          width: "20px",
          alignSelf: "flex-start",
          marginTop: "16px",
        }}
        image={bag}
        alt="green iguana"
      />
      <CardMedia
        component="img"
        sx={{ height: "37px", width: "20px", objectFit: "contain" }}
        image={baggage}
        alt="green iguana"
      />
    </Box>
  );
};

export default Baggage;
