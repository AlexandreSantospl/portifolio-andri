import { Flex, Image, Text } from "@chakra-ui/react";
import be from "../../../assets/icons/be.svg";
import email from "../../../assets/icons/email.svg";
import instagram from "../../../assets/icons/instagram.svg";
import linkedin from "../../../assets/icons/linkedin.svg";
import wpp from "../../../assets/icons/wpp.svg";
import styled from "@emotion/styled";

const IconButton = styled.div`
  display: inline-block;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.95);
    opacity: 0.6;
  }
`;

export default function Fourth() {
  const contact: {
    img: string;

    link: string;
  }[] = [
      {
        img: instagram,
        link: "https://www.linkedin.com/in/andrieli-brentano",
      },
      {
        img: linkedin,
        link: "https://www.instagram.com/andri_brentano?igsh=ZnNmZTA3OXV4YW9i",
      },
      {
        img: be,
        link: "https://www.behance.net/andrielbrentan",
      },
      {
        img: email,
        link: "mailto:andri.brentano@gmail.com",
      },
      {
        img: wpp,
        link: "https://wa.me/5191459386",
      },
    ];

  return (
    <Flex
      w={{ base: "90%", md: "80%", lg: "70%" }}
      h={"100%"}
      pt={{ base: "4rem", md: "5rem", lg: "6rem" }}
      gap={{ base: "2rem", md: "2.5rem", lg: "3rem" }}
      align="center"
      pb={{ base: "3rem", md: "4rem", lg: "5rem" }}
      justify="space-evenly"
      textColor={"gray.100"}
      fontSize={"3.65rem"}
      flexDir={"column"}
      overflow="hidden"
      id="rodape"
    >
      <Flex flexDir="row" gap={{ base: "1rem", md: "1.5rem", lg: "2rem" }}>
        {contact.map((contact) => (
          <IconButton key={contact.link}>
            <a href={contact.link} target="_blank" rel="noopener noreferrer">
              <Image src={contact.img} alt={contact.link} w={{ base: "32px", md: "40px", lg: "48px" }} h={{ base: "32px", md: "40px", lg: "48px" }} />
            </a>
          </IconButton>
        ))}
      </Flex>

      <Flex>
        <Text fontFamily={"Poppins"} fontSize={{ base: "0.8rem", md: "0.9rem", lg: "1rem" }} color={"#828282"}>
          Andrieli Brentano 2025
        </Text>
      </Flex>
    </Flex>
  );
}