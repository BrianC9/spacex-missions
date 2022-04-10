import { Image } from "@chakra-ui/react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./assets/spacex.png";
import LaunchesList from "./components/LaunchesList";
import LaunchDetails from "./components/LaunchDetails";
import Rocket from "./components/Rocket";
function App() {
  return (
    <>
      <Link to={"/"}>
        <Image mx="auto" src={logo} width={300} />
      </Link>
      <Routes>
        <Route path="/" element={<LaunchesList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rocket/:rocketId" element={<Rocket />} />
      </Routes>
    </>
  );
}

export default App;
