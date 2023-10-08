import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { Box } from "@mui/material";
import {
  setSearchBack,
  setSearchFrom,
  setSearchThere,
  setSearchTo,
} from "./searchSlice";
import Input from "../components/Input";
import Button from "../components/Button";

const Search = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    goTo: "",
    goFrom: "",
    goThere: "",
    goBack: null || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    const { goTo, goFrom, goThere, goBack } = formData;
    if (goTo !== "" && goFrom !== "" && goThere !== "") {
      dispatch(setSearchFrom(goFrom));
      dispatch(setSearchTo(goTo));
      dispatch(setSearchThere(goThere));
      dispatch(setSearchBack(goBack));
      navigate("/avia/info");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "24px",
        position: "relative",
      }}
    >
      <Input
        text="Откуда"
        name="goFrom"
        value={formData.goFrom}
        onChange={handleChange}
        label="Город вылета"
        required={true}
      />
      <Input
        text="Куда"
        name="goTo"
        value={formData.goTo}
        onChange={handleChange}
        label="Город прилета"
        required={true}
      />
      <Box sx={{ marginTop: "3px", display: "flex", gap: "23px" }}>
        <Input
          text="Туда"
          name="goThere"
          value={formData.goThere}
          onChange={handleChange}
          label="Дата вылета"
          type="date"
          required={true}
        />
        <Input
          text="Обратно"
          name="goBack"
          value={formData.goBack}
          onChange={handleChange}
          label="Дата возвращения"
          type="date"
          required={false}
        />
      </Box>
      <Button submit={handleSubmit} formData={formData} />
    </form>
  );
};

export default Search;
