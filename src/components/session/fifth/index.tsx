import { Divider, Flex, Text, Box } from "@chakra-ui/react";
import ContactMapper from "../../../shared/components/contactMapper";
import { motion } from "framer-motion";
import { useState } from "react";

export default function FifthFooter() {
  const [activeSection, setActiveSection] = useState("Inicio");

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box w="100%" pt="4rem">
      <Flex flexDir="column" w="85%" mx="auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ width: '100%' }}
        >
          <Flex
            bg="black.200"
            h="12vh"
            align="center"
            justify="space-between"
            color="gray.200"
            pt="1.5rem"
            fontSize="1.25rem"
            fontFamily="Poppins"
          >
            <Flex flexDir="column" w="30%">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Text
                  fontSize="1.5rem"
                  fontWeight="bold"
                  color={"#13B0F5"}
                  bgGradient="linear(to-tl, #13B0F5, #CA24B4)"
                  bgClip="text"
                  cursor="pointer"
                  onClick={() => scrollToSection("Inicio")}
                  whiteSpace="nowrap"
                >
                  {"{ Gabi }"}
                </Text>
              </motion.div>

            </Flex>

            <Flex gap={14} align="center">
              <Flex gap={14}>
                {["+55 (53) 991683603", "gabrielacardosodarosa4@gmail.com"].map((item, index) => (
                  <motion.div key={index} whileHover={{ scale: 1.05 }}>
                    <Text
                      fontSize="1.125rem"
                      cursor="pointer"
                      _hover={{
                        bgGradient: "linear(to-tl, #CA24B4, #13B0F5)",
                        bgClip: "text"
                      }}
                      transition="all 0.2s"
                      whiteSpace="nowrap"
                    >
                      {item}
                    </Text>
                  </motion.div>
                ))}
              </Flex>
              <ContactMapper />
            </Flex>
          </Flex>
        </motion.div>

        <Divider my={4} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ width: '100%' }}
        >
          <Flex
            bg="black.200"
            h="12vh"
            align="center"
            justify="space-between"
            color="gray.200"
            fontSize="1.25rem"
            fontFamily="Poppins"
            id="contato"
          >
            <Flex gap={14}>
              {["Inicio", "Sobre", "Conhecimentos", "Projetos", "Contato"].map((item) => (
                <motion.div key={item} whileHover={{ scale: 1.1 }}>
                  <Text
                    cursor="pointer"
                    fontWeight={activeSection === item ? "bold" : "normal"}
                    position="relative"
                    _hover={{
                      bgGradient: "linear(to-tl, #13B0F5, #CA24B4)",
                      bgClip: "text"
                    }}
                    _after={{
                      content: '""',
                      position: 'absolute',
                      width: activeSection === item ? '100%' : '0%',
                      height: '2px',
                      bottom: '-4px',
                      left: 0,
                      bgGradient: 'linear(to-r, #13B0F5, #CA24B4)',
                      transition: 'width 0.3s ease',
                    }}
                    whiteSpace="nowrap"
                  >
                    {item}
                  </Text>
                </motion.div>
              ))}
            </Flex>

            <motion.div whileHover={{ scale: 1.02 }}>
              <Flex align="center" gap={1} whiteSpace="nowrap">
                <Text fontWeight="bold">Desenvolvido por</Text>
                <Text
                  fontWeight="bold"
                  bgGradient="linear(to-tl, #13B0F5, #CA24B4)"
                  bgClip="text"
                >
                  Alexandre
                </Text>
                <Text fontWeight="bold">com</Text>
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <Text
                    display="inline-block"
                    fontWeight="bold"
                    bgGradient="linear(to-tl, #13B0F5, #CA24B4)"
                    bgClip="text"
                  >
                    ❤
                  </Text>
                </motion.span>
              </Flex>
            </motion.div>
          </Flex>
        </motion.div>
      </Flex>
    </Box>
  );
}