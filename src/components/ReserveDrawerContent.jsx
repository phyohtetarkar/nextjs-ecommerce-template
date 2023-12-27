import {
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useState } from "react";
import { ListOfStores } from "./ListOfStores";

export function ReserveDrawerContent(props) {
  const [page, setPage] = useState(0);
  const [location, setLocation] = useState("");

  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader></DrawerHeader>

      <DrawerBody>
        {page === 0 ? (
          <div style={{ textAlign: "center" }}>
            <Heading
              fontSize="2xl"
              color="gray.600"
              style={{ marginTop: "230px" }}
            >
              Enter your details
            </Heading>

            <InputGroup mt={10}>
              <InputLeftAddon>
                <img src="/images/pin.png" width="26" alt="" />
              </InputLeftAddon>
              <Input
                placeholder="Enter your current location"
                isRequired
                onChange={(event) => setLocation(event.target.value)}
              />
            </InputGroup>

            <InputGroup my={6}>
              <InputLeftAddon>+91</InputLeftAddon>
              <Input type="tel" placeholder="Phone" isRequired />
            </InputGroup>

            <Button
              colorScheme="blue"
              width="100%"
              my={3}
              onClick={() => setPage(1)}
            >
              Find Stores
            </Button>
          </div>
        ) : null}

        {page === 1 ? <ListOfStores location={location} /> : null}
      </DrawerBody>

      <DrawerFooter></DrawerFooter>
    </DrawerContent>
  );
}
