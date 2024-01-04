import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {           //config object is annoted with ThemeConfig
    initialColorMode: 'dark'
};

const theme = extendTheme({config})     //extendTheme method is called which returns theme.

export default theme;