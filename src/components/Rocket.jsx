import { useParams } from "react-router-dom";
export default function Rocket() {
  const { rocketId } = useParams();
  return <div>Soy el rocket {rocketId}</div>;
}
