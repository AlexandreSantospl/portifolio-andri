import { Outlet } from "react-router-dom";
import Fourth from "../components/session/fourth";
import FirstHeader from "../components/session/first";
import { Flex } from "@chakra-ui/react";
import { ScrollToTop } from "./scrollTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
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
        <FirstHeader />
        <Outlet />
        <Fourth />
      </Flex>
    </>
  );
}
