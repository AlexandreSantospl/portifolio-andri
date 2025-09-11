import {
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";
import { getTranslatedMessage } from "../../shared/i18n/i18n";
import { FeatureKeys } from "../constants/projects";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
  imagePosition?: "left" | "right";
  onSlugChange: (slug: FeatureKeys) => void;
}

export const ProjectCard = ({
  image,
  title,
  description,
  imagePosition = "left",
  link,
  onSlugChange,
}: ProjectCardProps) => {
  const isImageLeft = imagePosition === "left";
  const [showFullDescription, setShowFullDescription] = useState(false);

  const designerFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem", xl: "1.3rem" });
  const titleFontSize = useBreakpointValue({ base: "1.5rem", md: "2rem", lg: "2.5rem", xl: "3rem" });
  const descFontSize = useBreakpointValue({ base: "1rem", md: "1.1rem", lg: "1.2rem", xl: "1.3rem" });
  const buttonFontSize = useBreakpointValue({ base: "0.9rem", md: "1rem", lg: "1.05rem", xl: "1.1rem" });

  const isLgOrUp = useBreakpointValue({ base: false, lg: true });

  const toggleDescription = () => setShowFullDescription((prev) => !prev);

  const shouldShowToggle = !isLgOrUp && description.length > 100;

  return (
    <Flex
      w="100%"
      direction={{ base: "column", lg: isImageLeft ? "row" : "row-reverse" }}
      align="center"
      justify="space-between"
      bgColor="white"
      borderRadius={"24px"}
    >
      <Image
        src={image}
        alt={title}
        w={{ base: "100%", lg: "50%" }}
        minH={{ base: "auto", md: "40vh", lg: "55vh" }}
        borderRightRadius={{ base: "24px", lg: imagePosition === "left" ? "0" : "24px" }}
        borderLeftRadius={{ base: "24px", lg: imagePosition === "right" ? "0" : "24px" }}
        objectFit="cover"
      />

      <Flex
        w={{ base: "100%", lg: "50%" }}
        direction="column"
        justify="center"
        align="flex-start"
        px={{ base: "1.5rem", md: "2rem", lg: "3rem", xl: "4.375rem" }}
        py={{ base: "1.5rem", lg: 0 }}
        position="relative"
      >
        <Text
          color="#885784"
          fontSize={designerFontSize}
          fontWeight="bold"
          fontFamily="Nunito"
        >
          {getTranslatedMessage("jobTitle")}
        </Text>
        <Text
          pt={{ base: "0.5rem", md: "0.75rem" }}
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
          pt={{ base: "1rem", md: "1.5rem", lg: "2rem" }}
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
            {showFullDescription
              ? getTranslatedMessage("seeLess")
              : getTranslatedMessage("seeMore")}
          </Button>
        )}

        <Button
          onClick={() => onSlugChange(link as FeatureKeys)}
          borderColor="#885784"
          borderRadius="24px"
          border="1px"
          bgColor="white"
          color="#885784"
          fontFamily="Nunito"
          fontSize={buttonFontSize}
          fontWeight="bold"
          mt={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
          _hover={{ bg: "#885784", color: "white" }}
        >
          <Text px="0.5rem">{getTranslatedMessage("seeProject")}</Text>
        </Button>
      </Flex>
    </Flex>
  );
};