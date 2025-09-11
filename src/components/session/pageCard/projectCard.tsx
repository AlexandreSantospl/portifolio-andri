import { Box, Button, Flex, Image, Skeleton, Text } from "@chakra-ui/react";

type FeatureSectionProps = {
  title: string;
  descriptionHtml: string;
  buttonLink: string;
  buttonLabel: string;
  imageMain: string;
  imageBottomLeftTop: string;
  imageBottomLeftBottom: string;
  imageBottomRight: string;
  slug: string;
  slugSelected?: string;
};
const skeletonProps = {
  borderRadius: "24px",
  startColor: "gray.100",
  endColor: "gray.200",
  fadeDuration: 0.4,
  w: "100%",
  h: "100%",
  boxShadow: "md",
};

export const FeatureSection = ({
  title,
  descriptionHtml,
  buttonLink,
  buttonLabel,
  imageMain,
  imageBottomLeftTop,
  imageBottomLeftBottom,
  imageBottomRight,
  slugSelected,
  slug,
}: FeatureSectionProps) => {
  return (
    <Flex
      hidden={slug !== slugSelected}
      key={slugSelected}
      direction="column"
      gap={{ base: "16px", md: "24px", lg: "32px" }}
      w={"100%"}
      px={{ base: "1.5rem", md: "3rem", lg: "5rem", xl: "7.5rem" }}
      pt={{ base: "4rem", md: "6rem", lg: "8.125rem" }}
    >
      <Flex w="100%" justify={"space-between"} direction={{ base: "column", md: "row" }} gap={{ base: "16px", md: 0 }}>
        <Flex
          w={{ base: "100%", md: "40%" }}
          h={"100%"}
          direction="column"
          justify="center"
          gap={{ base: "8px", md: "12px", lg: "16px" }}
          align={"start"}
        >
          <Text
            pt="0.75rem"
            color="black"
            fontFamily="Playfair Display"
            fontWeight="bold"
            fontSize={{ base: "2.5rem", md: "3rem", lg: "4rem" }}
          >
            {title}
          </Text>

          <Box
            color="#828282"
            fontSize={{ base: "1rem", md: "1.125rem" }}
            fontFamily={"Poppins"}
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
          <Button
            as="a"
            href={buttonLink}
            bgColor={"transparent"}
            borderColor="#885784"
            borderRadius="24px"
            border="1px"
            color="#885784"
            fontFamily="Nunito"
            fontWeight="bold"
            mt={{ base: "1.5rem", md: "2rem", lg: "2.5rem" }}
            _hover={{ bg: "#885784", color: "white" }}
          >
            {buttonLabel}
          </Button>
        </Flex>

        <Box w={{ base: "100%", md: "50%" }}>
          <Image
            src={imageMain}
            w="100%"
            h={{ base: "auto", md: "80%" }}
            objectFit="cover"
            borderRadius={"24px"}
            fallback={<Skeleton {...skeletonProps} />}
          />
        </Box>
      </Flex>

      <Flex w="100%" gap={{ base: "16px", md: "24px", lg: "38px" }} direction={{ base: "column", md: "row" }}>
        <Flex w={{ base: "100%", md: "50%" }} direction="column" gap={{ base: "16px", md: "24px", lg: "48px" }}>
          <Image
            src={imageBottomLeftTop}
            w="100%"
            objectFit="cover"
            fallback={<Skeleton {...skeletonProps} />}
          />
          <Image
            src={imageBottomLeftBottom}
            w="100%"
            objectFit="cover"
            fallback={<Skeleton {...skeletonProps} />}
          />
        </Flex>

        <Flex w={{ base: "100%", md: "50%" }} justify="center" align="center">
          <Image
            src={imageBottomRight}
            w="100%"
            h={{ base: "auto", md: "90%" }}
            fallback={<Skeleton {...skeletonProps} />}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};