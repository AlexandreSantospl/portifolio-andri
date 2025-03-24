import angularIcon from "../../../assets/icons/angularIcon.svg"
import cCharp from "../../../assets/icons/c.svg"
import docker from "../../../assets/icons/docker.svg"
import dotnet from "../../../assets/icons/dotnet.svg"
import figma from "../../../assets/icons/figma.svg"
import firebase from "../../../assets/icons/firebase.svg"
import git from "../../../assets/icons/gitIcon.svg"
import vue from "../../../assets/icons/vue.svg"
import jest from "../../../assets/icons/jest.svg"
import typescript from "../../../assets/icons/typescript.svg"
import nextJs from "../../../assets/icons/nextjs.svg"
import nestJs from "../../../assets/icons/nestjs.svg"
import nodejS from "../../../assets/icons/nodejs.svg"
import postGress from "../../../assets/icons/PostgreSQL.svg"
import prisma from "../../../assets/icons/prisma.svg"
import react from "../../../assets/icons/react.svg"
import reactNative from "../../../assets/icons/sdk-react-native.svg"
import tailwind from "../../../assets/icons/tailwind.svg"

export const icons: { icon: string, onClick: () => void }[] = [
    { icon: react, onClick: () => { window.open("https://reactjs.org/") } },
    { icon: typescript, onClick: () => { window.open("https://www.typescriptlang.org/") } },
    { icon: nestJs, onClick: () => { window.open("https://nestjs.com/") } },
    { icon: prisma, onClick: () => { window.open("https://www.prisma.io/") } },
    { icon: angularIcon, onClick: () => { window.open("https://angular.io/") } },
    { icon: dotnet, onClick: () => { window.open("https://dotnet.microsoft.com/") } },
    { icon: cCharp, onClick: () => { window.open("https://learn.microsoft.com/en-us/dotnet/csharp/") } },
    { icon: postGress, onClick: () => { window.open("https://www.postgresql.org/") } },
    { icon: reactNative, onClick: () => { window.open("https://reactnative.dev/") } },
    { icon: git, onClick: () => { window.open("https://git-scm.com/") } },
    { icon: nodejS, onClick: () => { window.open("https://nodejs.org/") } },
    { icon: nextJs, onClick: () => { window.open("https://nextjs.org/") } },
    { icon: tailwind, onClick: () => { window.open("https://tailwindcss.com/") } },
    { icon: figma, onClick: () => { window.open("https://www.figma.com/") } },
    { icon: docker, onClick: () => { window.open("https://www.docker.com/") } },
    { icon: jest, onClick: () => { window.open("https://jestjs.io/pt-BR/") } },
    { icon: firebase, onClick: () => { window.open("https://firebase.google.com/?hl=pt-br") } },
    { icon: vue, onClick: () => { window.open("https://vuejs.org/") } }
];