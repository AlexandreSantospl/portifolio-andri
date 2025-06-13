import { Flex, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function FirstHeader() {
  const [, setActiveSection] = useState("Inicio");
  const navRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();
  const location = useLocation();

  const sections = ["Página Inicial", "Sobre", "Projetos", "Contato"];

  const scrollToSection = (section: string) => {
    setActiveSection(section);

    const scrollToId = (id: string, offset = 100) => {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

    if (section === "Página Inicial") {
      if (location.pathname !== "/") {
        navigate("/", { replace: false });
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (section === "Sobre") {
      if (location.pathname !== "/sobre") {
        navigate("/sobre");
      } else {
        scrollToId("sobre", 100);
      }
    } else if (section === "Projetos") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => scrollToId("projetos", 100), 100);
      } else {
        scrollToId("projetos", 100);
      }
    } else if (section === "Contato") {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const footer = document.getElementById("rodape") || document.body;
          footer.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const footer = document.getElementById("rodape") || document.body;
        footer.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
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
  );
}
