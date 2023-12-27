import {
  Drawer,
  DrawerOverlay,
  useDisclosure,
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import { useRef } from "react";
// import { ShipDrawerContent } from "./components/ShipDrawerContent";
import { ReserveDrawerContent } from "./components/ReserveDrawerContent";

export function OmniWidget() {
  // const shipDisclosure = useDisclosure();
  const reserveDisclosure = useDisclosure();
  const shipRef = useRef();
  const reserveRef = useRef();

  return (
    <>
      <div style={{ display: "flex", gap: "18px", marginTop: "28px" }}>
        {/* <Box
          borderRadius="6px"
          borderWidth="2px"
          borderColor="blue.300"
          ref={shipRef}
          onClick={shipDisclosure.onOpen}
          cursor="pointer"
        >
          <Box
            backgroundColor="blue.50"
            display="flex"
            px={8}
            gap={2}
            justifyContent="center"
          >
            <img src="/images/truck.png" alt="" width="34" />
            <Heading py={2} size="sm" color="gray.700">
              Ship from nearby store
            </Heading>
          </Box>

          <Text py={1} px={4} fontSize="sm">
            Get this shipped from a nearby store.
          </Text>
        </Box> */}

        <Box
          borderRadius="6px"
          borderWidth="2px"
          borderColor="blue.400"
          ref={reserveRef}
          onClick={reserveDisclosure.onOpen}
          cursor="pointer"
        >
          <Box
            backgroundColor="blue.50"
            display="flex"
            px={8}
            gap={2}
            justifyContent="center"
          >
            <Heading
              py={2}
              size="sm"
              backgroundColor="blue.50"
              color="gray.700"
            >
              FIND IN STORE
            </Heading>
          </Box>
          <Text py={1} px={4} fontSize="sm">
            Try this product at a nearby store.
          </Text>
        </Box>
      </div>

      <div
        style={{
          display: "flex",
          gap: "4px",
          alignItems: "center",
          margin: "6px 4px 28px",
        }}
      >
        <Text color="gray.600" fontSize="xs" marginTop="1px">
          Secured by
        </Text>
        <img
          src="https://d6xcmfyh68wv8.cloudfront.net/assets/razorpay-logo.svg"
          alt="Razorpay"
          width="80px"
        />
      </div>

      {/* <Drawer
        isOpen={shipDisclosure.isOpen}
        placement="right"
        onClose={shipDisclosure.onClose}
        finalFocusRef={shipRef}
        size="sm"
      >
        <DrawerOverlay />

        <ShipDrawerContent shipDisclosure={shipDisclosure} />
      </Drawer> */}

      <Drawer
        isOpen={reserveDisclosure.isOpen}
        placement="right"
        onClose={reserveDisclosure.onClose}
        finalFocusRef={shipRef}
        size="md"
      >
        <DrawerOverlay />

        <ReserveDrawerContent reserveDisclosure={reserveDisclosure} />
      </Drawer>
    </>
  );
}
