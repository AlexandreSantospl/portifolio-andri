import {
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  imagePosition?: "left" | "right";
}

export const ProjectCard = ({
  image,
  title,
  description,
  imagePosition = "left",
  link,
}: ProjectCardProps) => {
  const isImageLeft = imagePosition === "left";
  const [showFullDescription, setShowFullDescription] = useState(false);

  const designerFontSize = useBreakpointValue({
    base: "1.1rem",
    md: "1.3rem",
    xl: "1.5rem",
  });

  const titleFontSize = useBreakpointValue({
    base: "2rem",
    md: "2.5rem",
    xl: "3rem",
  });

  const descFontSize = useBreakpointValue({
    base: "1.1rem",
    md: "1.3rem",
    xl: "1.5rem",
  });

  const buttonFontSize = useBreakpointValue({
    base: "1rem",
    md: "1.05rem",
    xl: "1.15rem",
  });

  function useIsWidthAtLeast1100() {
    const [isAtLeast1100, setIsAtLeast1100] = useState(false);

    useEffect(() => {
      function handleResize() {
        setIsAtLeast1100(window.innerWidth >= 1100);
      }

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isAtLeast1100;
  }

  const isLgOrUp = useIsWidthAtLeast1100();

  const toggleDescription = () => setShowFullDescription((prev) => !prev);

  const shouldShowToggle = !isLgOrUp && description.length > 100;

  return (
    <Flex
      w="100%"
      direction={["column", "column", isImageLeft ? "row" : "row-reverse"]}
      align="center"
      justify="space-between"
      bgColor="white"
      borderRadius={"24px"}
    >
      <Image
        src={image}
        alt={title}
        w={["100%", "100%", "50%"]}
        minH="55vh"
        borderRightRadius={imagePosition === "left" ? "0" : "24px"}
        borderLeftRadius={imagePosition === "right" ? "0" : "24px"}
        objectFit="cover"
      />

      <Flex
        w={["100%", "100%", "50%"]}
        direction="column"
        justify="center"
        align="flex-start"
        px={["2rem", "3rem", "4.375rem"]}
        position="relative"
      >
        <Text
          color="#885784"
          fontSize={designerFontSize}
          fontWeight="bold"
          fontFamily="Nunito"
        >
          UI/UX Designer
        </Text>
        <Text
          pt="0.75rem"
          color="black"
          fontFamily="Poppins"
          fontWeight="bold"
          fontSize={titleFontSize}
        >
          {title}
        </Text>

        <Box
          color="#828282"
          fontFamily="Nunito"
          fontSize={descFontSize}
          pt="2rem"
          maxH={
            shouldShowToggle ? (showFullDescription ? "200px" : "4rem") : "auto"
          }
          overflowY={
            shouldShowToggle
              ? showFullDescription
                ? "auto"
                : "hidden"
              : "visible"
          }
          sx={
            shouldShowToggle && !showFullDescription
              ? {
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                }
              : {}
          }
        >
          {description}
        </Box>

        {shouldShowToggle && (
          <Button
            onClick={toggleDescription}
            variant="link"
            color="#885784"
            mt="0.5rem"
            fontSize="0.95rem"
            fontWeight="bold"
          >
            {showFullDescription ? "Ver menos" : "Ver mais"}
          </Button>
        )}

        <Button
          as={Link}
          to={`/projetos/${link}`}
          borderColor="#885784"
          borderRadius="24px"
          border="1px"
          bgColor="white"
          color="#885784"
          fontFamily="Nunito"
          fontSize={buttonFontSize}
          fontWeight="bold"
          mt="2.5rem"
          _hover={{ bg: "#885784", color: "white" }}
        >
          <Text px="0.5rem">Ver Projeto</Text>
        </Button>
      </Flex>
    </Flex>
  );
};
