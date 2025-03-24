import { Flex } from "@chakra-ui/react";
import { contact } from "../constants/contact";

export default function ContactMapper() {
  return (
    <Flex gap={4}>
      {contact.map(({ img, link }, index) => (
        <img
          key={index}
          src={img}
          alt={img}
          style={{
            width: "26px",
            height: "26px",
            cursor: "pointer",
            backgroundColor: img === contact[2].img ? "#A7A7A7" : "",
            borderRadius: img === contact[2].img ? "100%" : "",
          }}
          onClick={() => {
            window.open(link);
          }}
        />
      ))}
    </Flex>
  );
}
