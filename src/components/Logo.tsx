import { CardMedia, Box } from "@mui/material";
import logo from "../assets/лого.png";
import logoName from "../assets/S7Airlines.png";
const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        marginTop: "13px",
        paddingTop: "41px",
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: "39px", width: "39px" }}
        image={logo}
        alt="green iguana"
      />
      <CardMedia
        component="img"
        sx={{ height: "21px", width: "86px", objectFit: "contain" }}
        image={logoName}
        alt="green iguana"
      />
    </Box>
  );
};

export default Logo;
