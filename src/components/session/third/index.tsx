import { Box, Flex, Text } from "@chakra-ui/react";
import { ProjectCard } from "../../../shared/components/projectCard";
import project1 from "../../../assets/imagens/project1.png";
import project2 from "../../../assets/imagens/project2.png";
import project3 from "../../../assets/imagens/project3.png";
import project4 from "../../../assets/imagens/project4.png";
import { FeatureKeys } from "../../../shared/constants/projects";
import { getTranslatedMessage } from "../../../shared/i18n/i18n";

interface Props {
  onSlugChange: (slug: FeatureKeys) => void;
}

export default function Third({ onSlugChange }: Props) {
  const projects: {
    slug: FeatureKeys;
    img: string;
    title: string;
    description: string;
    link: string;
    imagePosition: "left" | "right";
  }[] = [
      {
        slug: "isotron",
        title: getTranslatedMessage("isotronTitle"),
        img: project1,
        description: getTranslatedMessage("isotronDescription"),
        link: "isotron",
        imagePosition: "right",
      },
      {
        slug: "lifemed",
        title: getTranslatedMessage("lifemedTitle"),
        img: project2,
        description: getTranslatedMessage("lifemedDescription"),
        link: "lifemed",
        imagePosition: "left",
      },
      {
        slug: "luna",
        title: getTranslatedMessage("lunaTitle"),
        img: project3,
        description: getTranslatedMessage("lunaDescription"),
        link: "luna",
        imagePosition: "right",
      },
      {
        slug: "lifesync",
        title: getTranslatedMessage("lifesyncTitle"),
        img: project4,
        description: getTranslatedMessage("lifesyncDescription"),
        link: "lifesync",
        imagePosition: "left",
      },
    ];

  return (
    <Flex
      w={"70%"}
      h={"100%"}
      pt={"6rem"}
      gap="5rem"
      align="center"
      justify="space-evenly"
      textColor={"gray.100"}
      fontSize={"3.65rem"}
      flexDir={"column"}
      overflow="hidden"
    >
      <Box textAlign="center" w="fit-content" mx="auto" id="projetos">
        <Text
          fontFamily={"Playfair Display"}
          fontSize={"4rem"}
          fontWeight={"bold"}
          color={"black"}
        >
          {getTranslatedMessage("projects")}
        </Text>

        <Box
          w="60%"
          h="4px"
          bg="#885784"
          mx="auto"
          mt="0.25rem"
          borderRadius="2px"
        />
      </Box>

      <Flex flexDir={"column"} gap={"5rem"} pb={"10rem"}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.img}
            title={project.title}
            description={project.description}
            imagePosition={project.imagePosition}
            link={project.slug}
            onSlugChange={onSlugChange}
          />
        ))}
      </Flex>
    </Flex>
  );
}
