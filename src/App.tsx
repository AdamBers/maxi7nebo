import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";
import Button from "./components/elements/buttons/Button";
import "./App.css";
import DeleteButton from "./components/elements/buttons/DeleteButton";
import MinusButton from "./components/elements/buttons/MinusButton";
import PlusButton from "./components/elements/buttons/PlusButton";
import FavoriteButton from "./components/elements/buttons/FavoriteButton";
import FavoriteButtonWithText from "./components/elements/buttons/FavoriteButtonWithText";
import SocialButton from "./components/elements/buttons/SocialButton";
import ArrowButton from "./components/elements/buttons/ArrowButton";
import InputElement from "./components/elements/inputs/InputElement";
import TextArea from "./components/elements/inputs/TextArea";
import TabButton from "./components/elements/tabs/Tab";
import MenuItem from "./components/elements/buttons/MenuItem";
import ToggleButton from "./components/elements/buttons/ToggleButton";
import RadioButtons from "./components/elements/buttons/RadioButtons";
import Crumbs from "./components/elements/Crumbs";
// import { validateEmail } from "./utils/validateInput";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Crumbs text={["Главная ", " Не главная"]} />
      <RadioButtons buttons={["Готівка", "Картка"]} />
      <MenuItem text="Піца" />
      <MenuItem text="Бурито" />
      <ToggleButton />
      <TabButton />
      <Button text="Button" variant="primary" disabled={false}></Button>
      <Button text="Button" variant="withArrowRight"></Button>
      <Button text="DeleteAll" variant="withDeleteIcon"></Button>
      <DeleteButton variant="circle" size={36} />
      <MinusButton size={36} />
      <PlusButton size={36} />
      <PlusButton size={48} variant="filled" />
      <FavoriteButton active={true} />
      <FavoriteButtonWithText text="Улюблені страви" />
      <SocialButton social="facebook" />
      <SocialButton social="instagram" />
      <SocialButton social="telegram" />
      <ArrowButton direction="right" />
      <ArrowButton direction="left" />
      <InputElement type="text" icon="search" placeholder="Пошук" />
      <InputElement type="text" />
      <InputElement type="phone" placeholder="Номер телефону*" />
      <InputElement type="email" />
      <TextArea />
    </ThemeProvider>
  );
}

export default App;
