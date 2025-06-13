import { Box, Flex, Text } from "@chakra-ui/react";
import { ProjectCard } from "../../../shared/components/projectCard";
import project1 from "../../../assets/imagens/project1.png";
import project2 from "../../../assets/imagens/project2.png";
import project3 from "../../../assets/imagens/project3.png";
import project4 from "../../../assets/imagens/project4.png";

export default function Third() {
  const projects: {
    img: string;
    title: string;
    description: string;
    link: string;
    imagePosition: "left" | "right";
  }[] = [
    {
      title: "Isotron",
      img: project1,
      description:
        "O projeto consistiu no desenvolvimento de um sistema de gestão e estatísticas para uma empresa que comercializa produtos radioativos para clínicas e hospitais. ",
      link: "isotron",
      imagePosition: "right",
    },
    {
      title: "LifeMed",
      img: project2,
      description:
        "Este projeto foi desenvolvido com foco em criar uma plataforma digital que funciona como um e-commerce, mas com um modelo B2B voltado exclusivamente para o setor de saúde.",
      link: "lifemed",
      imagePosition: "left",
    },
    {
      title: "Luna",
      img: project3,
      description:
        "Este projeto foi desenvolvido com o objetivo de promover uma melhor compreensão e qualidade do sono por meio do monitoramento contínuo dos hábitos noturnos do usuário.",
      link: "luna",
      imagePosition: "right",
    },
    {
      title: "LifeSync",
      img: project4,
      description:
        "A interface deste projeto foi cuidadosamente pensada para garantir uma navegação fluida e acessível, com foco na organização e na usabilidade.",
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
          Projetos
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
            link={project.link}
          />
        ))}
      </Flex>
    </Flex>
  );
}
