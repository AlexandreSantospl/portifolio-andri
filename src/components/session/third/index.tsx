import { Box, Flex, Text } from "@chakra-ui/react";
import { ProjectCard } from "../../../shared/components/projectCard";

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
        img: '/imagens/project1.png',
        description: getTranslatedMessage("isotronDescription"),
        link: "isotron",
        imagePosition: "right",
      },
      {
        slug: "lifemed",
        title: getTranslatedMessage("lifemedTitle"),
        img: '/imagens/project2.png',
        description: getTranslatedMessage("lifemedDescription"),
        link: "lifemed",
        imagePosition: "left",
      },
      {
        slug: "luna",
        title: getTranslatedMessage("lunaTitle"),
        img: '/imagens/luna.svg',
        description: getTranslatedMessage("lunaDescription"),
        link: "luna",
        imagePosition: "right",
      },
      {
        slug: "lifesync",
        title: getTranslatedMessage("lifesyncTitle"),
        img: '/imagens/lifesync.svg',
        description: getTranslatedMessage("lifesyncDescription"),
        link: "lifesync",
        imagePosition: "left",
      },
    ];

  return (
    <Flex
      w={{ base: "90%", md: "80%", lg: "70%" }}
      h={"100%"}
      pt={{ base: "4rem", md: "5rem", lg: "6rem" }}
      gap={{ base: "3rem", md: "4rem", lg: "5rem" }}
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
          fontSize={{ base: "2.5rem", md: "3rem", lg: "4rem" }}
          fontWeight={"bold"}
          color={"black"}
        >
          {getTranslatedMessage("projects")}
        </Text>

        <Box
          w={{ base: "80%", md: "70%", lg: "60%" }}
          h={{ base: "3px", md: "4px" }}
          bg="#885784"
          mx="auto"
          mt={{ base: "0.2rem", md: "0.25rem" }}
          borderRadius="2px"
        />
      </Box>

      <Flex flexDir={"column"} gap={{ base: "3rem", md: "4rem", lg: "5rem" }} pb={{ base: "4rem", md: "7rem", lg: "10rem" }}>
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