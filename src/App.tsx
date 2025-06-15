import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import FirstHeader from "./components/session/first";
import Fourth from "./components/session/fourth";
import { type FeatureKeys } from "./shared/constants/projects";
import Second from "./components/session/second";
import Third from "./components/session/third";
import { Features } from "./pages/AllFeatures";

function App() {
  const [slug, setSlug] = useState<FeatureKeys | undefined>(undefined);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (slug) scrollToTop();
  }, [slug]);

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
      <FirstHeader setSlug={setSlug} />

      <Features slug={slug} />

      {!slug && (
        <>
          <Second />
          <Third onSlugChange={setSlug} />
        </>
      )}

      <Fourth />
    </Flex>
  );
}

export default App;
