import { Flex, Text } from "@chakra-ui/react";
import ContactMapper from "../../../shared/components/contactMapper";

export default function FirstHeader() {
  return (
    <Flex
      backgroundColor="black.200"
      position="sticky"
      top={0}
      left={0}
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
      zIndex={1000}
      w={"100%"}
      h={"12vh"}
      align="center"
      justify="space-between"
      textColor={"gray.200"}
      pt={"1.5rem"}
      fontSize={"1.25rem"}
      px={"7.5%"}
      fontFamily={"Poppins"}
    >
      <Flex flexDir="column" justify="center" w="30%">
        <Flex justify="flex-start">
          <Text
            fontSize={"1.5rem"}
            fontWeight="bold"
            bgGradient="linear(to-tl, #13B0F5, #CA24B4)"
            bgClip="text"
          >
            {"{Dev}"}
          </Text>
        </Flex>

        <Text
          fontWeight="bold"
          bgGradient="linear(to-tl, #CA24B4, #13B0F5)"
          bgClip="text"
        >
          {"Duarte"}
        </Text>
      </Flex>
      <Flex gap={14}>
        <Flex gap={14}>
          {["Inicio", "Sobre", "Conhecimentos", "Projetos", "Contato"].map(
            (item, index) => (
              <Text
                key={index}
                onClick={() => console.log(item)}
                _hover={{ cursor: "pointer" }}
              >
                {item}
              </Text>
            )
          )}
        </Flex>
        <ContactMapper />
      </Flex>
    </Flex>
  );
}
