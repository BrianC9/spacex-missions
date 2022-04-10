import { Link, useParams } from "react-router-dom";
/* Para poder leer los parámetros de la url necesitamos el hook de react router */
import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Spacer,
  Badge,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import * as API from "../services/launches";

export default function LaunchDetails() {
  const [launchIndividual, setLaunchIndividual] = useState({});
  const { launchId } = useParams();
  useEffect(() => {
    API.getLaunchByFlightNumber(launchId).then(setLaunchIndividual);
  }, [launchId]);
  const {
    mission_name,
    launch_year,
    details,
    launch_success,
    launch_date_local,
  } = launchIndividual;
  let successTagColor = launch_success ? "green" : "red";
  let successTagText = launch_success ? "Success" : "Failed";
  console.log(launchIndividual, launchId);
  return (
    <>
      {Object.keys(launchIndividual).length === 0 ? (
        <Box bg="gray.100" p={4} m={4} borderRadius="lg">
          <Text>Cargando lanzamiento</Text>
        </Box>
      ) : (
        <>
          <Box bg="gray.100" p={4} m={4} borderRadius="lg">
            <Flex display="flex">
              <Text fontSize="lg">
                Mission <strong>{mission_name}</strong> ({launch_year})
              </Text>
              <Spacer />
              <Badge p={2} colorScheme={successTagColor}>
                {successTagText}
              </Badge>
            </Flex>
            <Image
              mx={"auto"}
              src={launchIndividual.links?.mission_patch_small}
              alt="Patch"
            />
            <Text>{details}</Text>
            <Box>
              <Link to={`/rocket/${launchIndividual.rocket?.rocket_id}`}>
                <Button mt={2} colorScheme="purple">
                  Rocket: {launchIndividual.rocket?.rocket_name}
                </Button>
              </Link>
            </Box>
          </Box>
        </>
      )}
    </>
  );
}
