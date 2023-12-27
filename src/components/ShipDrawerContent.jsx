import {
  Divider,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { PageFour } from "./PageFour";

export function ShipDrawerContent(props) {
  const [page, setPage] = useState(0);

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
        <Text
          fontSize="sm"
          display="inline"
          color="green.500"
          fontWeight="bold"
        >
          Available
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
      <DrawerHeader>Reservation successful</DrawerHeader>

      <DrawerBody>
        {page === 0 ? (
          <>
            <Input placeholder="Enter your location" marginBottom={4} />
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

        {page === 1 ? (
          <>
            <img
              src="/images/page1.png"
              alt="Enter details"
              style={{ cursor: "pointer" }}
              onClick={() => setPage(2)}
            />
          </>
        ) : null}

        {page === 2 ? (
          <>
            <img
              src="/images/page2.png"
              alt="Enter details"
              style={{ cursor: "pointer" }}
              onClick={() => setPage(3)}
            />
          </>
        ) : null}

        {page === 3 ? (
          <>
            <img
              src="/images/page3.png"
              alt="Enter details"
              style={{ cursor: "pointer" }}
              onClick={() => setPage(4)}
            />
          </>
        ) : null}

        {page === 4 ? <PageFour /> : null}
      </DrawerBody>

      <DrawerFooter></DrawerFooter>
    </DrawerContent>
  );
}
