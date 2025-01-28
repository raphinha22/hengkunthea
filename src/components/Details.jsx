import { useParams } from "react-router-dom";
import all from "./all";

const Details = () => {
  const { id } = useParams();
  const { text } = all.find((d) => (d.id = id));

  return <div>{text}</div>;
};

export default Details;
