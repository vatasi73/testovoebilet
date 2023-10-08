import { Box, Typography } from "@mui/material";
import { StyledInput } from "./InputStyled";
// import DateRangeIcon from "@mui/icons-material/DateRange";
// import IconButton from "@mui/material/IconButton";
interface CustomTextFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  text: string;
  required: boolean;
  type?: string;
}

const Input = ({
  name,
  value,
  onChange,
  label,
  text,
  type,
  required,
}: CustomTextFieldProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <StyledInput
        required={required}
        autoComplete="off"
        placeholder={label}
        variant="outlined"
        name={name}
        onChange={onChange}
        value={value || ""}
        type={type}
      />
      <Typography
        sx={{
          position: "absolute",
          top: -13,
          fontSize: "11px",
          fontWeight: 400,
          lineHeight: "13px",
          letterSpacing: "0em",
          color: "rgba(255, 255, 255, 1)",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};
export default Input;
