import { Divider, Flex, Text } from "@chakra-ui/react";
import ContactMapper from "../../../shared/components/contactMapper";

export default function FifthFooter() {
  return (
    <Flex flexDir={"column"} w={"100%"} pt={"4rem"} gap={4}>
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
            <Text fontSize={"1.5rem"} fontWeight="bold">
              {"{Dev}"}
            </Text>
          </Flex>

          <Text fontWeight="bold">{"Duarte"}</Text>
        </Flex>
        <Flex gap={14}>
          <Flex gap={14}>
            {["+55 (53) 9 91085073", "Alexandresantospl283@gmail.com"].map(
              (item, index) => (
                <Text
                  fontSize={"1.125rem"}
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
      <Divider w={"85%"} mx={"auto"} />

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
        fontSize={"1.25rem"}
        px={"7.5%"}
        fontFamily={"Poppins"}
      >
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
        </Flex>
        <Flex justify="flex-end" w="30%" textAlign={"end"} gap={1}>
          <Text fontWeight="bold">Desenvolvido por </Text>
          <Text
            fontWeight="bold"
            bgGradient="linear(to-tl, #13B0F5, #CA24B4)"
            bgClip="text"
          >
            Alexandre
          </Text>
          <Text fontWeight="bold">com</Text>
          <Text
            fontWeight="bold"
            bgGradient="linear(to-tl, #13B0F5, #CA24B4)"
            bgClip="text"
          >
            ❤
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
