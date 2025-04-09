import { Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { icons } from "./icons";

const AnimatedIcon = ({ icon, onClick, index }: any) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: 20,
      x: index % 2 === 0 ? -30 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      rotate: 0,
      transition: {
        delay: index * 0.05,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.15,
      rotate: [0, 10, -10, 0],
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={variants}
    >
      <img
        src={icon}
        alt={icon}
        style={{
          width: "6.5rem",
          height: "6.5rem",
          cursor: "pointer",
          objectFit: "contain",
          filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.3))",
        }}
        onClick={onClick}
      />
    </motion.div>
  );
};

export default function Third() {
  return (
    <Flex
      w={"85%"}
      h={"88vh"}
      align="center"
      justify="space-evenly"
      textColor={"gray.100"}
      fontSize={"3.65rem"}
      flexDir={"column"}
      overflow="hidden"
      id="conhecimentos"
    >
      <Flex flexDir={"column"} align={"center"}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Text fontSize={"3rem"} color={"gray.100"} fontWeight={"bold"}>
            Meus conhecimentos
          </Text>
          <Text fontSize={"2rem"} color={"gray.200"} fontWeight={"bold"}>
            Tecnologias que impulsionam meus projetos
          </Text>
        </motion.div>
      </Flex>

      <Grid templateColumns="repeat(6, 1fr)" w={"100%"} gap={14}>
        {icons.map(({ icon, onClick }, index) => (
          <GridItem colSpan={1} key={index}>
            <Flex
              w={"100%"}
              align={"center"}
              paddingX={4}
              justify={
                index === 0 || index === 6 || index === 12
                  ? "flex-start"
                  : index === 5 || index === 11 || index === 17
                  ? "flex-end"
                  : "center"
              }
            >
              <AnimatedIcon icon={icon} onClick={onClick} index={index} />
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  );
}
