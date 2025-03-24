import { Flex, Text } from "@chakra-ui/react";
import icon from "../../../assets/icons/git.svg";
import { IProject } from "../../../shared/types";

export default function CardProjects({
  description,
  img,
  link,
  techs,
  title,
}: IProject) {
  return (
    <Flex
      w={"100%"}
      h={"35.5rem"}
      borderTopRadius={"1rem"}
      flexDir={"column"}
      bgColor={"gray.300"}
      fontFamily={"Poppins"}
      onClick={() => window.open(link)}
    >
      <Flex h={"16.25rem"} w={"100%"}>
        <img
          src={img}
          alt="Imagem do projeto"
          style={{
            width: "100%",
            height: "16.25rem",
            objectFit: "cover",
            cursor: "pointer",
          }}
          onClick={() => console.log("ula")}
        />
      </Flex>

      <Flex
        flexDir={"column"}
        h={"19.25rem"}
        px={"1.5rem"}
        justify={"space-evenly"}
      >
        <Flex flexDir={"column"} fontSize={"1.125rem"} gap={2}>
          <Text fontSize={"1.75rem"}>{title}</Text>
          <Text>{description}</Text>
          <Flex flexWrap={"wrap"}>
            <Text fontWeight={"bold"}>Tech stack:&nbsp;</Text>
            <Text
              dangerouslySetInnerHTML={{
                __html: ` <span style="display:block;">${techs}</span>`,
              }}
            />
          </Flex>
        </Flex>

        <Flex justify={"space-between"} align={"center"} fontSize={"1rem"}>
          <Flex gap={2}>
            <img
              src={icon}
              alt="Ícone 1"
              style={{
                width: "1.25rem",
                height: "1.25rem",
                cursor: "pointer",
                objectFit: "contain",
              }}
              onClick={() => console.log(link)}
            />
            <Text>Like Preview</Text>
          </Flex>
          <Flex gap={2}>
            <img
              src={icon}
              alt="Ícone 2"
              style={{
                width: "1.25rem",
                height: "1.25rem",
                cursor: "pointer",
                objectFit: "contain",
              }}
              onClick={() => console.log("ula")}
            />
            <Text>Like Preview</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
