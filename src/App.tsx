import { Flex } from "@chakra-ui/react";
import Second from "./components/session/second";
import FirstHeader from "./components/session/first";
import Third from "./components/session/third";
import Fourth from "./components/session/fourth";
import firstIsotron from "./assets/projects/isotron/first.svg";
import secondIsotron from "./assets/projects/isotron/second.svg";
import thirtIsotron from "./assets/projects/isotron/third.svg";
import forthIsotron from "./assets/projects/isotron/fourth.svg";
import { FeatureSection } from "./components/session/pageCard/projectCard";

function App() {
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
      <FirstHeader />
      {/*
      <Second />
      <Third />
       */}
      <FeatureSection
        title="Isotron"
        descriptionHtml="
        <p>
          O projeto, cujo nome foi alterado por questões de sigilo contratual, consistiu no desenvolvimento de um sistema completo de gestão e estatísticas para uma empresa especializada na venda de produtos radioativos destinados a <strong>clínicas e hospitais</strong>.
        </p>
        <br/>
        <p>
          Foram criados <strong>13 fluxos de trabalho distintos</strong>, que abrangem desde o controle detalhado de cadastro de clientes, emissão de pedidos e rastreabilidade dos materiais radioativos. Esses fluxos foram cuidadosamente estruturados para garantir a segurança, eficiência e conformidade em todas as etapas do processo operacional.
        </p>
        <br/>
        <p>
          Este projeto resultou em maior <strong>segurança, agilidade e controle operacional</strong> para a empresa, contribuindo diretamente para sua organização e crescimento no setor.
        </p>
        "
        buttonLink="https://example.com"
        buttonLabel="Acessar Behance"
        imageMain={firstIsotron}
        imageBottomLeftTop={secondIsotron}
        imageBottomLeftBottom={thirtIsotron}
        imageBottomRight={forthIsotron}
      />
      <Fourth />
    </Flex>
  );
}

export default App;
