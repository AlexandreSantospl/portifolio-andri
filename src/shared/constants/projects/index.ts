import firstIsotron from "../../../assets/projects/isotron/first.svg";
import secondIsotron from "../../../assets/projects/isotron/second.svg";
import thirtIsotron from "../../../assets/projects/isotron/third.svg";
import forthIsotron from "../../../assets/projects/isotron/fourth.svg";
import firstLifeMed from "../../../assets/projects/lifemed/firstLifeMed.svg";
import secondLifeMed from "../../../assets/projects/lifemed/secondLifeMed.svg";
import thirdLifeMed from "../../../assets/projects/lifemed/thirdLifeMed.svg";
import fourthLifeMed from "../../../assets/projects/lifemed/fourthLifeMed.svg";
import firstLuna from "../../../assets/projects/luna/firstLuna.svg";
import secondLuna from "../../../assets/projects/luna/secondLuna.svg";
import thirdLuna from "../../../assets/projects/luna/thirdLuna.svg";
import fourthLuna from "../../../assets/projects/luna/fourthLuna.svg";
import fristLifeSync from "../../../assets/projects/lifesync/firstLifeSync.svg";
import secondLifeSync from "../../../assets/projects/lifesync/secondLifeSync.svg";
import thirdLifeSync from "../../../assets/projects/lifesync/thirdLifeSync.svg";
import fourthLifeSync from "../../../assets/projects/lifesync/fourthLifeSync.svg";

type FeatureSectionData = {
  title: string;
  descriptionHtml: string;
  buttonLink: string;
  buttonLabel: string;
  imageMain: string;
  imageBottomLeftTop: string;
  imageBottomLeftBottom: string;
  imageBottomRight: string;
};

export const featureSections: FeatureSectionData[] = [
  {
    title: "Isotron",
    descriptionHtml: `
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
    `,
    buttonLink: "https://example.com",
    buttonLabel: "Acessar Behance",
    imageMain: firstIsotron,
    imageBottomLeftTop: secondIsotron,
    imageBottomLeftBottom: thirtIsotron,
    imageBottomRight: forthIsotron,
  },
  {
    title: "LifeMed",
    descriptionHtml: `
      <p>
  O projeto, cujo nome foi alterado por questões de sigilo contratual, teve como objetivo o desenvolvimento de uma plataforma digital no modelo <strong>e-commerce B2B</strong>, voltada para conectar fornecedores de produtos hospitalares a clínicas, consultórios e hospitais.
</p>
<br />
<p>
  Foram modelados diversos fluxos de navegação, contemplando desde o cadastro e gestão de produtos pelos fornecedores, até a busca, comparação e solicitação de pedidos por parte dos compradores. A arquitetura da plataforma foi pensada para otimizar a experiência de ambos os perfis de usuário, garantindo <strong>agilidade, usabilidade e confiança</strong> em todas as interações.
</p>

    `,
    buttonLink: "https://example.com",
    buttonLabel: "Acessar Behance",
    imageMain: firstLifeMed,
    imageBottomLeftTop: secondLifeMed,
    imageBottomLeftBottom: thirdLifeMed,
    imageBottomRight: fourthLifeMed,
  },
  {
    title: "Luna",
    descriptionHtml: `
     <p>
  Este projeto foi desenvolvido com o objetivo de promover uma melhor compreensão e <strong>qualidade do sono</strong> por meio do <strong>monitoramento</strong> contínuo dos hábitos noturnos do usuário.
</p>
<br />
<p>
  Além do <strong>monitoramento</strong>, foram incorporadas funcionalidades complementares como sugestões de <strong>alongamentos leves</strong> antes de dormir e uma <strong>biblioteca de sons relaxantes</strong>, como ruído branco, sons da natureza e músicas suaves, que auxiliam no processo de relaxamento e facilitam a indução ao sono.
</p>
    `,
    buttonLink: "https://example.com",
    buttonLabel: "Acessar Behance",
    imageMain: firstLuna,
    imageBottomLeftTop: secondLuna,
    imageBottomLeftBottom: thirdLuna,
    imageBottomRight: fourthLuna,
  },
  {
    title: "LifeSync",
    descriptionHtml: `
    <p>
  A interface deste projeto foi cuidadosamente pensada para garantir uma navegação fluida e acessível, com foco na organização e na usabilidade. O usuário pode cadastrar seus <strong>documentos</strong>, definir alarmes personalizados e receber <strong>notificações</strong> automáticas antes do vencimento, evitando esquecimentos e transtornos.
</p>
<br />
<p>
  Um ponto de destaque do projeto foi a atenção à <strong>segurança e privacidade</strong> dos dados pessoais. As estratégias de proteção foram elaboradas com rigor, garantindo que as informações dos usuários estejam protegidas contra acessos não autorizados e evitando qualquer risco de vazamento de dados.
</p>
    `,
    buttonLink: "https://example.com",
    buttonLabel: "Acessar Behance",
    imageMain: fristLifeSync,
    imageBottomLeftTop: secondLifeSync,
    imageBottomLeftBottom: thirdLifeSync,
    imageBottomRight: fourthLifeSync,
  },
];
