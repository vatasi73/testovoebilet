import { StyledButton } from "./ButtonStyled";
type ButtonProps = {
  submit: () => void;
  formData: {
    goTo: string;
    goFrom: string;
    goThere: string;
  };
};
const Button = ({ submit, formData }: ButtonProps) => {
  const { goTo, goFrom, goThere } = formData;

  return (
    <StyledButton
      disableRipple
      onClick={submit}
      type="submit"
      sx={{
        backgroundColor:
          goTo && goFrom && goThere !== "" ? "" : "rgba(183, 186, 193, 1)",
        color: goTo && goFrom && goThere !== "" ? "" : "rgba(255, 255, 255, 1)",
      }}
    >
      Найти билеты
    </StyledButton>
  );
};

export default Button;
