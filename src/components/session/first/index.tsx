import { Button, Flex, Text, Box, Menu, MenuButton, MenuList, MenuItem, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion } from "framer-motion";
import { getTranslatedMessage } from "../../../shared/i18n/i18n";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "../../../shared/i18n/interface";
import ReactCountryFlag from "react-country-flag";

export default function FirstHeader({
  setSlug,
  setPage,
  page,
  slug,
}: {
  setSlug: (slug: string | undefined) => void;
  setPage: (page: "home" | "about") => void;
  page: "home" | "about";
  slug: string | undefined;
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
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (sectionKey === "about") {
      setSlug(undefined);
      setPage("about");
    } else if (sectionKey === "projects") {
      if (page === 'about') {
        setPage("home");
        setTimeout(() => scrollToId("projetos", 100), 100);
      } else {
        scrollToId("projetos", 100);
      }
    } else if (sectionKey === "contact") {
      if (page === 'about') {
        setPage("home");
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

  const { i18n } = useTranslation<"common", TranslationKeys>("common");

  const currentLang = ["pt", "en", "es"].includes(i18n.language)
    ? (i18n.language as "pt" | "en" | "es")
    : "pt";

  let activeSection = "homePage";
  if (page === "about") {
    activeSection = "about";
  } else if (slug) {
    activeSection = "projects";
  }

  return (
    <Flex
      backdropFilter="blur(4px)"
      position="fixed"
      top={0}
      left={0}
      zIndex={1000}
      w="100%"
      h={{ base: "60px", md: "70px" }}
      align="center"
      justify="space-between"
      px={{ base: "4%", md: "6%", lg: "7.5%" }}
      fontSize={{ base: "1rem", md: "1.1rem", lg: "1.25rem" }}
      fontFamily="Poppins"
    >
      <Flex
        flexDir="column"
        justify="center"
        w={{ base: "50%", md: "30%" }}
        onClick={() => scrollToSection("homePage")}
      >
        <Text
          fontSize={{ base: "1rem", md: "1.125rem" }}
          fontFamily={"Poppins"}
          lineHeight={"180%"}
          color={"black"}
        >
          {getTranslatedMessage("authorName")}
        </Text>
      </Flex>

      <Flex gap={{ base: "1rem", md: "1.5rem", lg: "2rem" }} alignItems={"center"}>
        <Flex display={{ base: "none", md: "flex" }} gap={{ base: "1rem", md: "1.5rem", lg: "2rem" }}>
          {sections.map((section) => (
            <motion.div
              key={section.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Text
                onClick={() => scrollToSection(section.key)}
                cursor="pointer"
                fontWeight={section.key === activeSection ? "bold" : "light"}
                fontSize={{ base: "1rem", md: "1.125rem" }}
                fontFamily={"Poppins"}
                lineHeight={{ base: "24px", md: "28px" }}
                color={"black"}
                position="relative"
              >
                {section.label}
              </Text>
            </motion.div>
          ))}
        </Flex>
        <Button
          onClick={() => i18n.changeLanguage(currentLang === "pt" ? "en" : "pt")}
          style={{ background: 'transparent', border: 'none', fontSize: '1.5rem' }}
        >
          {currentLang === "pt" ? (
            <ReactCountryFlag countryCode="BR" svg style={{ fontSize: '2rem', lineHeight: '2rem' }} />

          ) : (
            <ReactCountryFlag countryCode="US" svg style={{ fontSize: '2rem', lineHeight: '2rem' }} />

          )}
        </Button>
        <Box display={{ base: "block", md: "none" }}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              {sections.map((section) => (
                <MenuItem key={section.key} onClick={() => scrollToSection(section.key)}>
                  {section.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
}
