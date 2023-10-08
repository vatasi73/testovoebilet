import { Box, Typography } from "@mui/material";
const Irrevocable = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 0,
        left: 0,
        width: "132px",
        height: "26px",
        background: "rgba(139, 165, 216, 1)",
        borderRadius: "14px 0px 15px 0px",
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "14px",
          letterSpacing: "0em",
          textAlign: "center",
          color: "rgba(255, 255, 255, 1)",
        }}
      >
        Невозрватный
      </Typography>
    </Box>
  );
};

export default Irrevocable;
