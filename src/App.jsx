import { useState, useEffect } from "react";
import { Heading, Image } from "@chakra-ui/react";
import logo from "./assets/spacex.png";
import * as API from "./services/launches";
import Launch from "./components/Launch";
function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);

    /*
    async function makeRequest() {
      const data = await API.getAllLaunches();
      setLaunches(data);
    }
    makeRequest();
    */
  }, []);

  return (
    <>
      <Image mx="auto" src={logo} width={300} />
      <Heading mx="4" as="h1" size="md">
        SpaceX Launches
      </Heading>
      <>
        {launches.map((launch) => (
          <Launch
            key={`${launch.flight_number}${launch.mission_name}`}
            {...launch}
          />
        ))}
      </>
    </>
  );
}

export default App;
