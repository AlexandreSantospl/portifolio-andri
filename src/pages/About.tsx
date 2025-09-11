import { Box, Flex, Text, Image, VStack, HStack, useBreakpointValue } from "@chakra-ui/react";
import ai from "../assets/icons/ai.svg";
import figma from "../assets/icons/figma.svg";
import id from "../assets/icons/id.svg";
import or from "../assets/icons/or.svg";
import ps from "../assets/icons/ps.svg";
import andri from "../assets/imagens/andri-onda.svg";
import { getTranslatedMessage } from "../shared/i18n/i18n";

const object = [
  { id: 1, img: id, title: getTranslatedMessage("figma"), description: getTranslatedMessage("levelAdvanced") },
  { id: 4, img: ai, title: getTranslatedMessage("adobeIllustrator"), description: getTranslatedMessage("levelIntermediate") },
  { id: 5, img: ps, title: getTranslatedMessage("adobePhotoshop"), description: getTranslatedMessage("levelIntermediate") },
];

const secondObject = [
  { id: 2, img: figma, title: getTranslatedMessage("adobeInDesign"), description: getTranslatedMessage("levelBeginner") },
  { id: 3, img: or, title: getTranslatedMessage("blender"), description: getTranslatedMessage("levelBeginner") },
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
            {getTranslatedMessage("about")}
          </Text>
          <Text
            color="#828282"
            fontFamily="Nunito"
            fontSize={descriptionFontSize}
            pt={4}
            dangerouslySetInnerHTML={{ __html: getTranslatedMessage("aboutMe") }}
          />
        </Flex>
        <Flex
          w="65%"
          minH="100vh"
          align="flex-start"
          justify="flex-end"
          overflow="hidden"
          position="relative"
        >
          <Image src={andri} w="95%" minH="75vh" objectFit="cover" transform="translateX(3.25rem) translateY(-1rem)" />
        </Flex>


      </Flex>

      {/* Softwares */}
      <VStack w="100%" spacing={{ base: 12, md: 20 }} mt={{ base: 12, md: 20 }} >
        <Text style={titleStyle}>{getTranslatedMessage("softwares")}</Text>

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
      <VStack w="100%" mt={{ base: 12, md: 20 }} spacing={16} px="5.5%">
        <Flex align={'center'} justify={'center'} width={'100vw'} >
          <Text style={titleStyle}>{getTranslatedMessage("academicExperience")}</Text>

        </Flex>
        <Flex flexDir={"column"} w="100%" gap={6}>
          <Flex flexDir={"column"}>

            <Text style={expTitleStyle} mb={1}>{getTranslatedMessage("graphicDesignCourse")}</Text>
            <Text fontSize={descriptionFontSize}>
              {getTranslatedMessage("graphicDesignCourseDescription")}
            </Text>
          </Flex>
          <Flex flexDir={"column"}>

            <Text style={expTitleStyle} mb={1}>{getTranslatedMessage("studyGroup")}</Text>

            <Text fontSize={descriptionFontSize}>
              {getTranslatedMessage("studyGroupDescription")}
            </Text>
          </Flex>
          <Flex flexDir={"column"}>

            <Text style={expTitleStyle} mb={1}>{getTranslatedMessage("graduation")}</Text>

            <Text fontSize={descriptionFontSize}>
              {getTranslatedMessage("graduationDate")}
            </Text>
          </Flex>
        </Flex>
      </VStack>

      {/* Experiências profissionais */}
      <VStack w="100%" mt={{ base: 12, md: 20 }} spacing={16} px="5.5%">
        <Flex align={'center'} justify={'center'} width={'100vw'}>
          <Text style={titleStyle}>{getTranslatedMessage("professionalExperience")}</Text>
        </Flex>

        <Flex direction={{ base: "column", md: "row" }} w="100%" gap={{ base: 4, md: 20 }}>
          <Box w={{ base: "100%", md: "35%" }}>
            <Text style={expTitleStyle} mb={1}>{getTranslatedMessage("pretoNoBranco")}</Text>
            <Text fontSize={descriptionFontSize} color="#828282">{getTranslatedMessage("jobTitle")}</Text>
            <Text fontSize={descriptionFontSize} color="#828282">{getTranslatedMessage("pretoNoBrancoDate")}</Text>
          </Box>
          <Box w={{ base: "100%", md: "35%" }}>
            <Text style={expTitleStyle} mb={1}>{getTranslatedMessage("fokvs")}</Text>
            <Text fontSize={descriptionFontSize} color="#828282">{getTranslatedMessage("jobTitle")}</Text>
            <Text fontSize={descriptionFontSize} color="#828282">{getTranslatedMessage("fokvsDate")}</Text>
          </Box>
        </Flex>
      </VStack>

      {/* Idiomas */}
      <VStack w="100%" mt={{ base: 12, md: 20 }} spacing={16} px="5.5%">
        <Flex align={'center'} justify={'center'} width={'100vw'}>
          <Text style={titleStyle}>{getTranslatedMessage("languages")}</Text>

        </Flex>
        <Flex direction={{ base: "column", md: "row" }} w="100%" gap={{ base: 4, md: 20 }}>
          <Box w={{ base: "100%", md: "35%" }}>
            <Text style={expTitleStyle} mb={1}>{getTranslatedMessage("english")}</Text>
            <Text fontSize={descriptionFontSize} color="#828282">{getTranslatedMessage("intermediate")}</Text>
          </Box>
          <Box w={{ base: "100%", md: "35%" }}>
            <Text style={expTitleStyle} mb={1}>{getTranslatedMessage("spanish")}</Text>
            <Text fontSize={descriptionFontSize} color="#828282">{getTranslatedMessage("basic")}</Text>
          </Box>
        </Flex>
      </VStack>
    </Flex>
  );
}
