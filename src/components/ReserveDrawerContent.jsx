import {
  Button,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Input,
} from "@chakra-ui/react";

export function ReserveDrawerContent(props) {
  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Find a Mocha Store</DrawerHeader>

      <DrawerBody>
        <Input placeholder="Enter your location" />
      </DrawerBody>

      <DrawerFooter>
        <Button
          variant="outline"
          mr={3}
          onClick={props.reserveDisclosure.onClose}
        >
          Cancel
        </Button>
        <Button colorScheme="blue">Pay</Button>
      </DrawerFooter>
    </DrawerContent>
  );
}
