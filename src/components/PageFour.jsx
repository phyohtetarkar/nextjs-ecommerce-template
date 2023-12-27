import { Button, Spinner, Text } from "@chakra-ui/react";
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
    <div style={{ marginTop: "80px", textAlign: "center" }}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <img src="/images/qr-code.png" alt="" />

          <Text my={4} mx={12} fontWeight="bold">
            Present this QR code at the store to try and collect your product.
          </Text>
          <Button
            leftIcon={<img src="/images/whatsapp.png" width="26px" alt="" />}
            marginTop="20px"
          >
            Send to WhatsApp
          </Button>
        </>
      )}
    </div>
  );
}
