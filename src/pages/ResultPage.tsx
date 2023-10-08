import Card from "../components/Card";
import Cards from "../components/Cards";
import { selectBack } from "../features/searchSlice";
import { useSelector } from "react-redux";

const ResultPage = () => {
  const back = useSelector(selectBack);
  return <>{back === "" ? <Card /> : <Cards />}</>;
};

export default ResultPage;
