import { Flex } from "@chakra-ui/react";
import Second from "./components/session/second";
import Third from "./components/session/third";
import Fourth from "./components/session/fourth";
import FifthFooter from "./components/session/fifth";

function App() {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      backgroundColor={"black.200"}
      w={"100%"}
      h={"fit-content"}
      flexDir={"column"}
      fontFamily={"Poppins"}
      id="inicio"
    >
      <Second />
    
      <FifthFooter />
    </Flex>
  );
}

export default App;
