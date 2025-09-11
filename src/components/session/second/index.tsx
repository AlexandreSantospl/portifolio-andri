import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
import { getTranslatedMessage } from "../../../shared/i18n/i18n";
import myPicture from "../../../assets/imagens/myPicture.png";

export default function Second() {
  const titleFontSize = useBreakpointValue({
    base: "2.5rem",
    md: "2rem",
    lg: "3rem",
  });
  const descriptionFontSize = useBreakpointValue({
    base: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
  });

  return (
    <Flex
      w="100%"
      h="100vh"
      align="center"
      justify="space-between"
      pl="7.5%"
      pr="0"
      position="relative"
      overflow="hidden"
    >
      <Flex
        w="35%"
        h="100%"
        align="flex-start"
        justify="center"
        flexDir="column"
        textAlign="left"
        fontSize="3.65rem"
        zIndex={1}
      >
        <Text
          color="#885784"
          fontSize="1.25rem"
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
          pt="2rem"
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
