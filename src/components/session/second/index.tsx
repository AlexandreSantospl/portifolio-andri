import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { getTranslatedMessage } from "../../../shared/i18n/i18n";
import myPicture from "../../../assets/imagens/myPicture.png";

export default function Second() {
  const titleFontSize = useBreakpointValue({
    base: "2rem",
    md: "2.5rem",
    lg: "3rem",
    xl: "3.5rem",
    "2xl": "4rem",
  });
  const descriptionFontSize = useBreakpointValue({
    base: "1rem",
    md: "1.1rem",
    lg: "1.25rem",
    xl: "1.4rem",
    "2xl": "1.6rem",
  });

  return (
    <Flex
      w="100%"
      h={{ base: "auto", md: "100vh" }}
      align="center"
      justify="space-between"
      pl={{ base: "4%", md: "6%", lg: "7.5%" }}
      pr={{ base: "4%", md: "0" }}
      position="relative"
      overflow="hidden"
      direction={{ base: "column", md: "row" }}
      py={{ base: 8, md: 0 }}
    >
      <Flex
        w={{ base: "100%", md: "35%" }}
        h="100%"
        align={{ base: "center", md: "flex-start" }}
        justify="center"
        flexDir="column"
        textAlign={{ base: "center", md: "left" }}
        zIndex={1}
      >
        <Text
          color="#885784"
          fontSize={{ base: "1rem", md: "1.1rem", lg: "1.25rem" }}
          fontWeight="bold"
          fontFamily="Nunito"
        >
          {getTranslatedMessage("jobTitle")}
        </Text>
        <Text
          pt="0.75rem"
          color="black"
          fontFamily="Playfair Display"
          fontWeight="bold"
          fontSize={titleFontSize}
        >
          {getTranslatedMessage("greeting")}
        </Text>
        <Text
          color="#828282"
          fontFamily="Nunito"
          fontSize={descriptionFontSize}
          pt={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
        >
          {getTranslatedMessage("shortBio")}
        </Text>
      </Flex>

      <Flex
        w="65%"
        minH="100vh"
        align="flex-start"
        justify="flex-end"
        overflow="hidden"
      >
        <Image src={myPicture} w="90%" minH="75vh" />
      </Flex>
    </Flex>
  );
}