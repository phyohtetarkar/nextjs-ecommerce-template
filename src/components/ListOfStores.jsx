import {
  Button,
  Divider,
  Heading,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PageFour } from "./PageFour";

export function ListOfStores({ location }) {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  function Store({ heading, address }) {
    return (
      <div style={{ margin: "16px 0 0 16px" }}>
        <Heading size="sm" color="gray.600">
          {heading}
        </Heading>

        <Text fontSize="sm" color="gray.500" style={{ marginTop: "6px" }}>
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

        <Button
          colorScheme="blue"
          size="sm"
          ml={20}
          mt={-3}
          onClick={() => setPage(1)}
        >
          Reserve at Store
        </Button>

        <Divider color="gray.300" marginTop={4} />
      </div>
    );
  }

  return loading ? (
    <div
      style={{
        margin: "300px 0",
        textAlign: "center",
      }}
    >
      <Text>Hold tight, we are fetching nearby stores</Text>
      <Spinner style={{ marginTop: "24px" }} />
    </div>
  ) : (
    <>
      {page === 0 ? (
        <>
          <Input
            placeholder="Enter your location"
            marginBottom={4}
            defaultValue={location}
          />
          <Text color="gray.600" ml={4} mb={6}>
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

      {page === 1 ? (
        <>
          <Heading fontSize="xl" textAlign="center" marginBottom={2}>
            Pay ₹ 1 to reserve this product
          </Heading>
          <img
            src="/images/page1.png"
            alt="Checkout Page 1"
            style={{ cursor: "pointer", margin: "0 auto" }}
            onClick={() => setPage(2)}
            width="430"
          />
        </>
      ) : null}

      {page === 2 ? (
        <>
          <img
            src="/images/page2.png"
            alt="Checkout Page 2"
            style={{ cursor: "pointer", margin: "0 auto" }}
            onClick={() => setPage(3)}
            width="430"
          />
        </>
      ) : null}

      {page === 3 ? <PageFour /> : null}
    </>
  );
}
