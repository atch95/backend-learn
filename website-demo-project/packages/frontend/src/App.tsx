import { useState } from "react";
import styled from "@emotion/styled";
import { NavigationBar } from "./components/NavigationBar";
import { GlobalStyles } from "./components/GlobalStyles";
import { HomeCard } from "./components/HomeCard";
import { Home } from "./views/Home";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Portfolio } from "./views/Portfolio";
import { Contact } from "./views/Contact";
import { jsx, ThemeProvider, useTheme } from "@emotion/react";
import { renderRoutes } from "./routes";
import { MdDarkMode } from 'react-icons/Md';

const MainContainer = styled.div(() => ({
  height: "100%",
  minHeight: "calc(100vh - 56px)",
}));

const darkTheme = {
  colors: {
    IndexBoxh1: "white",
    background: "#202124",
    NavigationBarLink1: "white",
    NavigationBarLink2: "#04aa6d",
    cardBackground: "#303134",
    portfolioTitle:"white",
    footerBackground: "#18191c",

  },
};
const clearTheme = {
  colors: {
    IndexBoxh1: "#3f3d56",
    background: "#FFFFFF",
    NavigationBarLink1: "#3f3d56",
    NavigationBarLink2: "#04aa6d",
    cardBackground: "white",
    portfolioTitle:"#3f3d56",
  },
};

export function App() {
  const [isClearTheme, setIsClearTheme] = useState(false);
  let mainTheme = isClearTheme ? clearTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyles />
        <MainContainer>
        
          <BrowserRouter>
            <NavigationBar
              setClearTheme={() => setIsClearTheme(!isClearTheme)}
              isClearTheme={isClearTheme}
            />
            <Routes>{renderRoutes()}</Routes>
          </BrowserRouter>
        </MainContainer>

        <Footer />
      </ThemeProvider>
    </>
  );
}
