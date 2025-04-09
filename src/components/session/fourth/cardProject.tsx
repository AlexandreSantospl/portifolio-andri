import { Flex, HStack, Text, Tooltip } from "@chakra-ui/react";
import { motion } from "framer-motion";
import icon from "../../../assets/icons/git.svg";
import { IProject } from "../../../shared/types";
import { techIcons } from "../third/icons";

export default function CardProjects({
  description,
  img,
  link,
  techs,
  title,
}: IProject) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      style={{ width: "100%" }}
    >
      <Flex
        w={"100%"}
        h={"35.5rem"}
        borderTopRadius={"1rem"}
        flexDir={"column"}
        bgColor={"gray.300"}
        fontFamily={"Poppins"}
        cursor="pointer"
        position="relative"
        overflow="hidden"
        _hover={{
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
          "& .project-image": {
            transform: "scale(1.05)",
          },
        }}
        onClick={() => window.open(link)}
      >
        <Flex h={"16.25rem"} w={"100%"} overflow="hidden">
          <motion.img
            className="project-image"
            src={img}
            alt="Imagem do projeto"
            style={{
              width: "100%",
              height: "16.25rem",
              objectFit: "cover",
              cursor: "pointer",
              transition: "transform 0.5s ease",
            }}
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
          />
        </Flex>

        <Flex
          flexDir={"column"}
          h={"19.25rem"}
          px={"1.5rem"}
          justify={"space-evenly"}
          
        >
          <motion.div
            initial={{ y: 10 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Flex flexDir={"column"} fontSize={"1.125rem"} gap={4}>
              <Text fontSize={"1.75rem"} fontWeight="bold" color="white">
                {title}
              </Text>
              <Text color="gray.200">{description}</Text>
              <Flex flexDir="row" gap={4}>
                <Text fontWeight={"bold"} color="white">
                  Tech stack:
                </Text>
                <HStack spacing={5} wrap="wrap">
                  {techs.map((tech) => {
                    const iconSrc = techIcons[tech.trim()];
                    return iconSrc ? (
                      <Tooltip key={tech} label={tech} hasArrow>
                        <motion.img
                          src={iconSrc}
                          alt={tech}
                          style={{
                            width: "1.5rem",
                            height: "1.5rem",
                            objectFit: "contain",
                          }}
                          whileHover={{ scale: 1.2 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        />
                      </Tooltip>
                    ) : (
                      <Text key={tech} fontSize="sm" color="gray.500">
                        {tech}
                      </Text>
                    );
                  })}
                </HStack>
              </Flex>
            </Flex>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Flex justify={"space-between"} align={"center"} fontSize={"1rem"}>
              <Flex
                gap={2}
                alignItems="center"
                _hover={{ color: "blue.500" }}
                transition="color 0.2s"
              >
                <motion.img
                  src={icon}
                  alt="Ícone 1"
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    cursor: "pointer",
                    objectFit: "contain",
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(link);
                  }}
                />
                <Text>View Code</Text>
              </Flex>

              <Flex
                gap={2}
                alignItems="center"
                _hover={{ color: "blue.500" }}
                transition="color 0.2s"
              >
                <motion.img
                  src={icon}
                  alt="Ícone 2"
                  style={{
                    width: "1.25rem",
                    height: "1.25rem",
                    cursor: "pointer",
                    objectFit: "contain",
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(link, "_blank");
                  }}
                />
                <Text>Live Preview</Text>
              </Flex>
            </Flex>
          </motion.div>
        </Flex>

        <motion.div
          className="hover-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
            pointerEvents: "none",
          }}
        />
      </Flex>
    </motion.div>
  );
}
