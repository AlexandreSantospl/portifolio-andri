import { IProject } from "../../types";
import migrate from '../../../assets/projects/ProjetoMigrate.svg'
import pultrusion from '../../../assets/projects/ProjetoPultrusion.svg'
import thummi from '../../../assets/projects/ProjetoThumme.svg'
import prop from '../../../assets/projects/projetoProp.svg'
import tecnopuc from '../../../assets/projects/projetoTecnoPuc.svg'

export const projects: IProject[] = [
    {
        img: prop,
        title: 'Prop',
        description: 'Um aplicativo mobile para controle e gerenciamento de documentos.',
        techs: ['React Native', ' TypeScript', ' Tailwind', ' Firebase'],
        link: ''
    },
    {
        img: pultrusion,
        title: 'Pultrusion',
        description: 'Landing Page de uma empresa especializada em pultrusion.',
        techs: ['React', " Chakra UI", " I18N"],
        link: 'https://pultrusionpro.com/'
    },
    {
        img: migrate,
        title: 'BMS Core',
        description: 'Sistema de gerenciamento financeiro, manipulaçãode planos faturas e emissão de notas fiscais.',
        techs: ['React', ' Chakra UI', " I18N"],
        link: ''
    },
    {
        img: tecnopuc,
        title: 'Tecnopuc',
        description: 'Aplicativo para gerenciar startups vinculadas a tecnopuc.',
        techs: ['Nest', ' Prisma', ' PostGress', ' JWT', " Swagger"],
        link: ''
    },
    {
        img: thummi,
        title: 'Thummi',
        description: 'Blog para compartilhar artigos sobre programação e tecnologia.',
        techs: ['Next.js', ' React', ' React-Native', " Chakra UI", " Knex", " Metabase" ],
        link: 'https://blogtecnologia.com'
    },
    {
        img: thummi,
        title: 'API de Autenticação',
        description: 'Sistema de autenticação JWT com login social.',
        techs: ['NestJS', 'Prisma', 'OAuth2'],
        link: 'https://apiautenticacao.com'
    }
];
