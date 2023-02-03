import { Spinner, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function PageFour() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer = setTimeout(() => setLoading(false), 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div style={{ marginTop: "200px", textAlign: "center" }}>
      {loading ? <Spinner /> : <Text>Your order has been placed!</Text>}
    </div>
  );
}
