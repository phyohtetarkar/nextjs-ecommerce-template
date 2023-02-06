import {
  Button,
  Divider,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export function ReserveDrawerContent(props) {
  const [page, setPage] = useState(0);
  const [location, setLocation] = useState("");

  function Store({ heading, address }) {
    return (
      <div
        style={{ margin: "16px 0 0 16px", cursor: "pointer" }}
        onClick={() => setPage(1)}
      >
        <Heading size="sm" color="gray.600">
          {heading}
        </Heading>
        <Text fontSize="sm" color="gray.500">
          {address}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Bengaluru, Karnataka, 560029, IN
        </Text>
        <Text fontSize="sm" display="inline" color="green.500">
          Open
        </Text>
        <Text fontSize="sm" display="inline" color="gray.500">
          {" "}
          | Closes at 9:30 pm
        </Text>

        <Divider color="gray.300" marginTop={4} />
      </div>
    );
  }

  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Find a Mocha Store</DrawerHeader>

      <DrawerBody>
        {page === 0 ? (
          <div style={{ textAlign: "center" }}>
            <Heading
              fontSize="2xl"
              color="gray.600"
              style={{ marginTop: "190px" }}
            >
              Enter your details
            </Heading>

            <Input
              placeholder="Location"
              mt={10}
              isRequired
              onChange={(event) => setLocation(event.target.value)}
            />

            <InputGroup my={6}>
              <InputLeftAddon>+91</InputLeftAddon>
              <Input type="tel" placeholder="Phone" isRequired />
            </InputGroup>

            <Button color="blue.400" my={3} onClick={() => setPage(1)}>
              Submit
            </Button>
          </div>
        ) : null}

        {page === 1 ? (
          <>
            <Input
              placeholder="Enter your location"
              marginBottom={4}
              defaultValue={location}
            />

            <Text color="gray.500" ml={4} mb={6}>
              Found 5 stores near {location}
            </Text>

            <Store heading="Forum Mall" address="The Forum 17, Ground Floor" />
            <Store heading="HSR Layout" address="NFS HSR, NO-427, 27TH MAIN" />
            <Store
              heading="Indiranagar"
              address="2014, 100 Ft Rd, Hal II Stage"
            />
            <Store
              heading="Jayanagar"
              address="G. Floor, Subasari Mehndra Tower"
            />
            <Store heading="Brigade Road" address="Municipal No. 210" />
          </>
        ) : null}
      </DrawerBody>

      <DrawerFooter></DrawerFooter>
    </DrawerContent>
  );
}
