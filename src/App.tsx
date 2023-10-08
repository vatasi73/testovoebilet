import { Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import ResultPage from "./pages/ResultPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          mb: "2rem",
          mt: "2rem",
        }}
      >
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/avia/info" element={<ResultPage />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
