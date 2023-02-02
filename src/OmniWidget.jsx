import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useRef } from "react";

export function OmniWidget() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <div style={{ display: "flex", gap: "20px" }}>
        <Button
          ref={btnRef}
          colorScheme="blue"
          onClick={onOpen}
          width="fit-content"
        >
          Reserve online, ship from store
        </Button>

        <Button
          ref={btnRef}
          colorScheme="blue"
          onClick={onOpen}
          width="fit-content"
          variant="outline"
        >
          Discover online, purchase at store
        </Button>
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

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Find a Mocha Store</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
