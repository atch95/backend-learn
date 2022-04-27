import React from "react";
import styled from "@emotion/styled";
import {
  Routes,
  Route,
  Link,
  BrowserRouter,
  useMatch,
  PathMatch,
} from "react-router-dom";
import { CustomTheme, PropsWithTheme } from "../../Types";
import { MdDarkMode } from 'react-icons/Md';



const NavigationBarContainer = styled.div((props) => ({
  width: "100%",
  height: "56px",
  display: "flex",
  alignItems: "center",
  top: 0,
  textTransform: "uppercase",
  postion: "fixed",
  fixed: "top",
}));

const NavigationBarButton = styled.div((props) => ({
  borderRadius: "15px",
  fontFamily: "Lato, sans-serif",
  "&:first-child": {
    marginLeft: "auto",
  },
}));
interface NavigationBarLinkProps {
  isActive?: PathMatch<string> | null;
}
const NavigationBarLink = styled(Link)((props: any) => ({
  float: "left",

  textAlign: "center",
  padding: "14px 16px",
  textDecoration: "none",
  fontSize: "17px",
  borderBottom: "5px",
  color:
    props.isActive === null
      ? props.theme?.colors.NavigationBarLink1
      : props.theme?.colors.NavigationBarLink2,
}));

export const NavigationBar = (props: any) => {
  const homeMatch = useMatch("/");
  const portfolioMatch = useMatch("portfolio");
  const contactMatch = useMatch("contact");
  let currentTheme = props.isClearTheme ? "Clear Theme" : "Dark Theme";
  return (
    <NavigationBarContainer>
      <NavigationBarButton>
        <NavigationBarLink isActive={homeMatch} to="/">
          Home
        </NavigationBarLink>
      </NavigationBarButton>

      <NavigationBarButton>
        <NavigationBarLink isActive={portfolioMatch} to="portfolio">
          Portfolio
        </NavigationBarLink>
      </NavigationBarButton>
      <NavigationBarButton>
        <NavigationBarLink isActive={contactMatch} to="contact">
          Contact
        </NavigationBarLink>
      </NavigationBarButton>
      <button onClick={props.setClearTheme}>{currentTheme}</button>
    </NavigationBarContainer>
  );
};
