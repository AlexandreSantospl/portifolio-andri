import { Flex, Text, useDisclosure, Box } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion"; // Lembre de ter framer-motion instalado

export default function FirstHeader() {
  const [activeSection, setActiveSection] = useState("Inicio");
  const { isOpen } = useDisclosure();
  const navRef = useRef<HTMLDivElement>(null);

  const sections = ["Página Inicial", "Sobre", "Projetos", "Contato"];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const offset = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Flex
        backdropFilter="blur(4px)"
        position="fixed"
        top={0}
        left={0}
        zIndex={1000}
        w="100%"
        h="70px"
        align="center"
        justify="space-between"
        px="7.5%"
        fontSize="1.25rem"
        fontFamily="Poppins"
      >
        <Flex flexDir="column" justify="center" w="30%">
          <Text
            fontSize={"1.125rem"}
            fontFamily={"Poppins"}
            lineHeight={"180%"}
            color={"black"}
          >
            Andrieli Brentano
          </Text>
        </Flex>

        <Flex gap={"2rem"} ref={navRef} display={{ base: "none", md: "flex" }}>
          {sections.map((section) => (
            <motion.div
              key={section}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Text
                onClick={() => scrollToSection(section)}
                cursor="pointer"
                fontWeight={"light"}
                fontSize={"1.125rem"}
                fontFamily={"Poppins"}
                lineHeight={"28px"}
                color={"black"}
                position="relative"
              >
                {section}
              </Text>
            </motion.div>
          ))}
        </Flex>
      </Flex>
    </>
  );
}
