import { CircularProgress, Box } from "@mui/material";
const Loading = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "0 auto",
        mt: 20,
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
