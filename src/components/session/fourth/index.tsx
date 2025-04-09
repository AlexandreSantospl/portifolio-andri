import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import CardProjects from "./cardProject";
import { projects } from "../../../shared/constants/projects";
export default function Fourth() {
  return (
    <Flex
      w={"85%"}
      h={"fit-content"}
      align="center"
      justify="space-evenly"
      textColor={"gray.100"}
      fontSize={"3.65rem"}
      flexDir={"column"}
      gap={12}
      id="projetos"
    >
      <Flex flexDir={"column"} align={"center"} justify={"space-evenly"}>
        <Text fontSize={"3rem"} color={"gray.100"} fontWeight={"bold"}>
          Projetos
        </Text>
        <Text fontSize={"2rem"} color={"gray.200"} fontWeight={"bold"}>
          Ideias que construí até agora
        </Text>
      </Flex>
      <Grid
        templateColumns="repeat(3, 1fr)"
        w="100%"
        h="fit-content"
        gap={14}
        justifyContent="center"
      >
        {projects.map(({ description, img, link, techs, title }, index) => (
          <GridItem colSpan={1} key={index + link} minW="280px">
            <Flex
              w="100%"
              align="center"
              justify={
                index % 3 === 0
                  ? "flex-start"
                  : index % 3 === 2
                  ? "flex-end"
                  : "center"
              }
            >
              <CardProjects
                description={description}
                img={img}
                link={link}
                techs={techs}
                title={title}
              />
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
