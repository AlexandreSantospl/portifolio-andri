import { Box, Flex, Text, Image, VStack, HStack, useBreakpointValue } from "@chakra-ui/react";
import ai from "../assets/icons/ai.svg";
import figma from "../assets/icons/figma.svg";
import id from "../assets/icons/id.svg";
import or from "../assets/icons/or.svg";
import ps from "../assets/icons/ps.svg";
import andri from "../assets/imagens/andri-onda.svg";

const object = [
  { id: 1, img: id, title: "Figma", description: "Nivel: Avançado" },
  { id: 4, img: ai, title: "Adobe Illustrator", description: "Nivel: Intermediário" },
  { id: 5, img: ps, title: "Adobe Photoshop", description: "Nivel: Intermediário" },
];

const secondObject = [
  { id: 2, img: figma, title: "Adobe InDesign", description: "Nivel: Iniciante" },
  { id: 3, img: or, title: "Blender", description: "Nivel: Iniciante" },
];

export function About() {
  const titleFontSize = useBreakpointValue({ base: "2rem", md: "2.5rem", lg: "3rem" });
  const titleStyle = {
    color: "black",
    fontFamily: "Playfair Display",
    fontWeight: "bold",
    fontSize: titleFontSize,
  }
  const descriptionFontSize = useBreakpointValue({ base: "0.9rem", md: "1rem", lg: "1.25rem" });
  const expTitleFontSize = useBreakpointValue({ base: "1.5rem", md: "1.5rem", lg: "1.5rem" });
  const expTitleStyle = {
    color: "black",
    fontFamily: "Poppins",
    fontWeight: "semi-bold",
    fontSize: expTitleFontSize,
  }
  const subHeadingFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.25rem" });

  return (
    <Flex w="100%" direction="column" p={{ base: 4, md: 8 }}
    >
      {/* Seção Sobre */}
      <Flex
        w="100%"
        flexDirection={{ base: "column", md: "row" }}
        align={{ base: "flex-start", md: "center" }}
        justify="space-between"
        position="relative"
        h={"100vh"}
        px="5.5%"

      >
        <Flex flexDir={"column"} w={{ base: "100%", md: "45%" }} pr={{ base: 0, md: 8 }} pb={{ base: 8, md: 0 }} alignSelf={"flex-start"} pt={32}>
          <Text
            color="black"
            fontFamily="Playfair Display"
            fontWeight="bold"
            fontSize={titleFontSize}
          >
            Sobre
          </Text>
          <Text
            color="#828282"
            fontFamily="Nunito"
            fontSize={descriptionFontSize}
            pt={4}
          >
            Oi! Eu sou formada em Design de Comunicação pela PUCRS e tenho experiência de <b>1 ano em UX/UI Design</b>. Sou apaixonada por tudo que envolve criar com propósito. No tempo livre, você provavelmente vai me encontrar com um livro na mão ou maratonando alguma série ou filme (sou movida por boas narrativas em qualquer formato!).
          </Text>
        </Flex>
        <Flex
          w="65%"
          minH="80vh"
          align="flex-start"
          justify="flex-end"
          overflow="hidden"
          position="relative"
        >
          <Image src={andri} w="90%" minH="55vh" objectFit="cover" transform="translateY(-2.75rem)" />
        </Flex>


      </Flex>

      {/* Softwares */}
      <VStack w="100%" spacing={{ base: 12, md: 20 }} mt={{ base: 12, md: 20 }} >
        <Text style={titleStyle}>Softwares</Text>

        <VStack spacing={{ base: 8, md: 16 }} w="100%">
          <HStack justify="center" spacing={{ base: 16, md: 32 }} wrap="wrap" w="100%" gap={"20rem"}>
            {object.map((item) => (
              <VStack spacing={2} key={item.id} w={{ base: "100px", md: "80px" }} textAlign="center">
                <Box w="80px" h="80px" display="flex" alignItems="center" justifyContent="center">
                  <Image src={item.img} alt={item.title} />
                </Box>
                <Text fontSize={subHeadingFontSize}>{item.title}</Text>
                <Text fontSize={descriptionFontSize} color="#828282">{item.description}</Text>
              </VStack>
            ))}
          </HStack>

          <HStack justify="center" spacing={{ base: 20, md: 40 }} wrap="wrap" w="100%" gap={"20rem"}>
            {secondObject.map((item) => (
              <VStack spacing={2} key={item.id} w={{ base: "100px", md: "80px" }} textAlign="center">
                <Box w="80px" h="80px" display="flex" alignItems="center" justifyContent="center">
                  <Image src={item.img} alt={item.title} />
                </Box>
                <Text fontSize={subHeadingFontSize}>{item.title}</Text>
                <Text fontSize={descriptionFontSize} color="#828282">{item.description}</Text>
              </VStack>
            ))}
          </HStack>
        </VStack>
      </VStack>

      {/* Experiências acadêmicas */}
      <VStack w="100%" mt={{ base: 12, md: 20 }} spacing={16} align="flex-start" px="5.5%">
        <Flex align={'center'} justify={'center'} width={'100vw'}>
          <Text style={titleStyle}>Experiências acadêmicas</Text>

        </Flex>
        <Flex flexDir={"column"} w="100%" gap={6}>
          <Flex flexDir={"column"}>

            <Text style={expTitleStyle} mb={1}>Curso de Design gráfico</Text>
            <Text fontSize={descriptionFontSize}>
              Curso de 8 meses sobre Abode Photoshop, Adobe InDesign e Adobe Illustrator.
              Instituição: MK+ Academy
            </Text>
          </Flex>
          <Flex flexDir={"column"}>

            <Text style={expTitleStyle} mb={1}>Grupo de estudos - FAMECOS</Text>

            <Text fontSize={descriptionFontSize}>
              Ministrei um grupo de estudos junto com a Preto no Branco onde ensinávamos aos estudantes de Design sobre Hard skills e Soft skills tanto do Design quanto do mercado de trabalho. Duração: 4 meses
            </Text>
          </Flex>
          <Flex flexDir={"column"}>

            <Text style={expTitleStyle} mb={1}>Graduação - Design gráfico</Text>

            <Text fontSize={descriptionFontSize}>
              Conclusão: 2025/1
            </Text>
          </Flex>
        </Flex>
      </VStack>

      {/* Experiências profissionais */}
      <VStack w="100%" mt={{ base: 12, md: 20 }} spacing={16} align="flex-start" px="5.5%">
        <Flex align={'center'} justify={'center'} width={'100vw'}>
          <Text style={titleStyle}>Experiências profissionais</Text>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} w="100%" gap={{ base: 4, md: 20 }}>
          <Box w={{ base: "100%", md: "35%" }}>
            <Text style={expTitleStyle} mb={1}>Preto no Branco</Text>
            <Text fontSize={descriptionFontSize} color="#828282">UX/UI Design</Text>
            <Text fontSize={descriptionFontSize} color="#828282">Maio 24 - junho 25</Text>
          </Box>
          <Box w={{ base: "100%", md: "35%" }}>
            <Text style={expTitleStyle} mb={1}>Fokvs</Text>
            <Text fontSize={descriptionFontSize} color="#828282">UX/UI Design</Text>
            <Text fontSize={descriptionFontSize} color="#828282">Julho 25 - Atual</Text>
          </Box>
        </Flex>
      </VStack>

      {/* Idiomas */}
      <VStack w="100%" mt={{ base: 12, md: 20 }} spacing={16} align="flex-start" px="5.5%">
        <Flex align={'center'} justify={'center'} width={'100vw'}>
          <Text style={titleStyle}>Idiomas</Text>

        </Flex>
        <Flex direction={{ base: "column", md: "row" }} w="100%" gap={{ base: 4, md: 20 }}>
          <Box w={{ base: "100%", md: "35%" }}>
            <Text style={expTitleStyle} mb={1}>Inglês</Text>
            <Text fontSize={descriptionFontSize} color="#828282">Intermediário</Text>
          </Box>
          <Box w={{ base: "100%", md: "35%" }}>
            <Text style={expTitleStyle} mb={1}>Espanhol</Text>
            <Text fontSize={descriptionFontSize} color="#828282">Básico</Text>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}
