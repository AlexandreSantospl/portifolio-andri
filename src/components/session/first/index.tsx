import { Flex, Text, IconButton, useDisclosure } from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import ContactMapper from "../../../shared/components/contactMapper";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function FirstHeader() {
  const [activeSection, setActiveSection] = useState("Inicio");
  const { isOpen } = useDisclosure();
  const navRef = useRef<HTMLDivElement>(null);

  const sections = ["Inicio", "Conhecimentos", "Projetos", "Contato"];

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
        position="fixed"
        right="2rem"
        bottom="2rem"
        zIndex={999}
        flexDir="column"
        gap={2}
      >
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton
            aria-label="Scroll up"
            icon={<ChevronUpIcon />}
            onClick={() =>
              window.scrollBy({ top: -window.innerHeight, behavior: "smooth" })
            }
            bgGradient="linear(to-tl, #13B0F5, #CA24B4)"
            color="white"
            borderRadius="full"
            boxShadow="lg"
          />
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <IconButton
            aria-label="Scroll down"
            icon={<ChevronDownIcon />}
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
            bgGradient="linear(to-tl, #CA24B4, #13B0F5)"
            color="white"
            borderRadius="full"
            boxShadow="lg"
          />
        </motion.div>
      </Flex>

      <Flex
        backgroundColor="black.200"
        position="sticky"
        top={0}
        left={0}
        boxShadow="0px 4px 10px rgba(0, 0, 0, 0.1)"
        zIndex={1000}
        w={"100%"}
        h={"12vh"}
        align="center"
        justify="space-between"
        textColor={"gray.200"}
        pt={"1.5rem"}
        fontSize={"1.25rem"}
        px={"7.5%"}
        fontFamily={"Poppins"}
      >
        <Flex flexDir="column" justify="center" w="30%">
          <Flex justify="flex-start">
            <Text
              fontSize={"1.5rem"}
              fontWeight="bold"
              bgGradient="linear(to-tl, #13B0F5, #CA24B4)"
              bgClip="text"
              cursor="pointer"
              onClick={() => scrollToSection("Inicio")}
            >
              {"{Dev}"}
            </Text>
          </Flex>

          <Text
            fontWeight="bold"
            bgGradient="linear(to-tl, #CA24B4, #13B0F5)"
            bgClip="text"
            cursor="pointer"
            onClick={() => scrollToSection("Inicio")}
          >
            {"Duarte"}
          </Text>
        </Flex>

        <Flex gap={14} ref={navRef}>
          <Flex
            gap={14}
            display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          >
            {sections.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Text
                  onClick={() => scrollToSection(item)}
                  _hover={{
                    cursor: "pointer",
                    bgGradient: "linear(to-tl, #CA24B4, #13B0F5)",
                    bgClip: "text",
                  }}
                  fontWeight={activeSection === item ? "bold" : "normal"}
                  position="relative"
                  _after={{
                    content: '""',
                    position: "absolute",
                    width: activeSection === item ? "100%" : "0%",
                    height: "2px",
                    bottom: "-4px",
                    left: 0,
                    bgGradient: "linear(to-r, #13B0F5, #CA24B4)",
                    transition: "width 0.3s ease",
                  }}
                >
                  {item}
                </Text>
              </motion.div>
            ))}
          </Flex>
          <ContactMapper />
        </Flex>
      </Flex>
    </>
  );
}
