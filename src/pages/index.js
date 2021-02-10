import { ThemeProvider } from "styled-components";
import Menu from "../components/commons/Menu/index";
import theme from "../theme";

export default function Home() {
  return (
  <ThemeProvider theme={theme}>
    <Menu />
  </ThemeProvider>)
}
