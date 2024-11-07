import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";
import Button from "./components/elements/buttons/Button";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button text="Button" variant="primary" disabled={false}></Button>
      <Button text="Button" variant="withArrowRight"></Button>
      <Button text="DeleteAll" variant="withDeleteIcon"></Button>
    </ThemeProvider>
  );
}

export default App;
