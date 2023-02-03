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
  Text,
} from "@chakra-ui/react";

export function ShipDrawerContent(props) {
  return (
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader>Find a Mocha Store</DrawerHeader>

      <DrawerBody>
        <Input placeholder="Enter your location" marginBottom={4} />

        <Store heading="Forum Mall" address="The Forum 17, Ground Floor" />
        <Store heading="HSR Layout" address="NFS HSR, NO-427, 27TH MAIN" />
        <Store heading="Indiranagar" address="2014, 100 Ft Rd, Hal II Stage" />
        <Store heading="Jayanagar" address="G. Floor, Subasari Mehndra Tower" />
        <Store heading="Brigade Road" address="Municipal No. 210" />
      </DrawerBody>

      <DrawerFooter>
        <Button variant="outline" mr={3} onClick={props.shipDisclosure.onClose}>
          View All Stores
        </Button>
      </DrawerFooter>
    </DrawerContent>
  );
}

function Store({ heading, address }) {
  return (
    <div style={{ margin: "16px 0 0 16px" }}>
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
