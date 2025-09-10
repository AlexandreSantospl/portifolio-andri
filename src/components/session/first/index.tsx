import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { getTranslatedMessage } from "../../../shared/i18n/i18n";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../../shared/i18n/interface";

export default function FirstHeader({
  setSlug,
  setPage,
}: {
  setSlug: (slug: string | undefined) => void;
  setPage: (page: "home" | "about") => void;
}) {
  const [, setActiveSection] = useState("homePage");

  const sections = [
    { key: "homePage", label: getTranslatedMessage("homePage") },
    { key: "about", label: getTranslatedMessage("about") },
    { key: "projects", label: getTranslatedMessage("projects") },
    { key: "contact", label: getTranslatedMessage("contact") },
  ];

  const scrollToSection = (sectionKey: string) => {
    setActiveSection(sectionKey);

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

    if (sectionKey === "homePage") {
      setSlug(undefined);
      setPage("home");
    } else if (sectionKey === "about") {
      setPage("about");
    } else if (sectionKey === "projects") {
      scrollToId("projetos", 100);
    } else if (sectionKey === "contact") {
      const footer = document.getElementById("rodape") || document.body;
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { i18n } = useTranslation<"common", TranslationKeys>("common");

  const currentLang = ["pt", "en", "es"].includes(i18n.language)
    ? (i18n.language as "pt" | "en" | "es")
    : "pt";

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
      <Flex
        flexDir="column"
        justify="center"
        w="30%"
        onClick={() => scrollToSection("homePage")}
      >
        <Text
          fontSize={"1.125rem"}
          fontFamily={"Poppins"}
          lineHeight={"180%"}
          color={"black"}
        >
          {getTranslatedMessage("authorName")}
        </Text>
      </Flex>

      <Flex gap={"2rem"} display={{ base: "none", md: "flex" }} alignItems={"center"}>
        {sections.map((section) => (
          <motion.div
            key={section.key}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Text
              onClick={() => scrollToSection(section.key)}
              cursor="pointer"
              fontWeight={"light"}
              fontSize={"1.125rem"}
              fontFamily={"Poppins"}
              lineHeight={"28px"}
              color={"black"}
              position="relative"
            >
              {section.label}
            </Text>
          </motion.div>
        ))}
        <Button onClick={() => i18n.changeLanguage(currentLang === "pt" ? "en" : "pt")}>
          {currentLang === "pt" ? "EN" : "PT"}
        </Button>
      </Flex>
    </Flex>
  );
}
