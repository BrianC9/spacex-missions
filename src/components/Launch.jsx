import { HiCalendar } from "react-icons/hi";
import { Box, Flex, Spacer, Badge, Text, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/es";
export default function Launch(launch) {
  const { mission_name, launch_year, launch_success, launch_date_local } =
    launch;
  let successTagColor = launch_success ? "green" : "red";
  let successTagText = launch_success ? "Success" : "Failed";
  return (
    <Box bg="gray.100" p={4} m={4} borderRadius="lg">
      <Flex display="flex">
        <Text fontSize="2x1">
          Mission <strong>{mission_name}</strong> ({launch_year})
        </Text>
        <Spacer />
        <Badge p={2} colorScheme={successTagColor}>
          {successTagText}
        </Badge>
      </Flex>
      <Flex align="center">
        <Icon as={HiCalendar} color="gray.600" />
        <Text fontSize="sm" ml="1">
          {dayjs(launch_date_local).locale("es").format("D MMMM, YYYY")}
        </Text>
      </Flex>
      <Link to={`/launch/${launch.flight_number}`}>
        <Button mt={2} colorScheme="purple">
          Más detalles
        </Button>
      </Link>
    </Box>
  );
}
