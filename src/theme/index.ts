import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Configuração do tema para suportar modo escuro e claro
const config: ThemeConfig = {
  initialColorMode: "light", // O tema começa como claro
  useSystemColorMode: false, // O usuário pode alterar manualmente
};

// Definição do tema
const theme = extendTheme({
  config,
  colors: {
    primary: {
      50: "#E3F2FD",
      100: "#BBDEFB",
      200: "#90CAF9",
      300: "#64B5F6",
      400: "#42A5F5",
      500: "#2196F3",
      600: "#1E88E5",
      700: "#1976D2",
      800: "#1565C0",
      900: "#0D47A1",
    },
    black: {
      200: "#FADADD",
      300: "#242424",
      400: "#1a1a1a",
      500: "#0f0f0f",
    },
    gray: {
      100: "#D9D9D9",
      200: "#A7A7A7",
      300: "#363636",
    },
    bluc: {
      100: "#5390D9",
    },
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Roboto', sans-serif",
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === "dark" ? "black.500" : "white",
        color: props.colorMode === "dark" ? "white" : "black.500",
      },
    }),
  },
});

export default theme;
