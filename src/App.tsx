import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import FirstHeader from "./components/session/first";
import Fourth from "./components/session/fourth";
import { type FeatureKeys } from "./shared/constants/projects";
import Second from "./components/session/second";
import Third from "./components/session/third";
import { Features } from "./pages/AllFeatures";
import { About } from "./pages/About";
import { useTranslation } from "react-i18next";
import { TranslationKeys } from "./shared/i18n/interface";

function App() {
  const [slug, setSlug] = useState<FeatureKeys | undefined>(undefined);
  const [page, setPage] = useState<'home' | 'about'>('home');

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (slug || page === 'about') scrollToTop();
  }, [slug, page]);

  const { i18n } = useTranslation<"common", TranslationKeys>("common");

  const actualLanguage = ["pt", "en", "es"].includes(i18n.language)
    ? (i18n.language as "pt" | "en" | "es")
    : "pt";

  //TODO ARRUMAR
  console.log(actualLanguage)
  return (
    <Flex
      justify={"center"}
      align={"center"}
      backgroundColor={"#F5F4F0"}
      w={"100%"}
      h={"fit-content"}
      flexDir={"column"}
      fontFamily={"Poppins"}
      id="inicio"
    >
      <FirstHeader setSlug={setSlug} setPage={setPage} page={page} />

      {page === 'about' ? (
        <About />
      ) : (
        <>
          <Features slug={slug} />

          {!slug && (
            <>
              <Second />
              <Third onSlugChange={setSlug} />
            </>
          )}
        </>
      )}

      <Fourth />
    </Flex>
  );
}

export default App;
