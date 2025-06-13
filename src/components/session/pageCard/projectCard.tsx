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
}: FeatureSectionProps) => {
  return (
    <Flex
      direction="column"
      gap="32px"
      w={"100%"}
      px={"7.5rem"}
      pt={"8.125rem"}
    >
      <Flex w="100%" justify={"space-between"}>
        <Flex
          w="40%"
          h={"100%"}
          direction="column"
          justify="center"
          gap="16px"
          align={"start"}
        >
          <Text
            pt="0.75rem"
            color="black"
            fontFamily="Playfair Display"
            fontWeight="bold"
            fontSize={"4rem"}
          >
            {title}
          </Text>

          <Box
            color="#828282"
            fontSize="1.125rem"
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
            mt="2.5rem"
            _hover={{ bg: "#885784", color: "white" }}
          >
            {buttonLabel}
          </Button>
        </Flex>

        <Box w="50%">
          <Image
            src={imageMain}
            w="100%"
            h="80%"
            objectFit="cover"
            borderRadius={"24px"}
            fallback={<Skeleton {...skeletonProps} />}

          />
        </Box>
      </Flex>

      <Flex w="100%" gap="38px">
        <Flex w="50%" direction="column" gap="48px">
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

        <Flex w="50%" justify="center" align="center">
          <Image
            src={imageBottomRight}
            w="100%"
            h={"90%"}
            fallback={<Skeleton {...skeletonProps} />}

          />
        </Flex>
      </Flex>
    </Flex>
  );
};
