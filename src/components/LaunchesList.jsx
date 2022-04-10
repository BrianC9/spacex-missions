import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import Launch from "./Launch";
import * as API from "../services/launches";

export default function LaunchesList() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
    // Es lo mismo que: API.getAllLaunches().then(data => setLaunches(data));

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
      <Heading mx="4" as="h1" size="md">
        SpaceX Launches
      </Heading>
      {launches.length === 0 ? (
        <div>Cargando historial de lanzamientos...</div>
      ) : (
        <section>
          {launches.map((launch) => (
            <Launch
              key={`${launch.flight_number}${launch.mission_name}`}
              {...launch}
            />
          ))}
        </section>
      )}
    </>
  );
}
