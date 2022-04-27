import React from "react";
import styled from "@emotion/styled";
import mySVG from "./svg1.svg";
import { jsx, ThemeProvider } from "@emotion/react";
import { CustomTheme, PropsWithTheme } from "../../Types";

interface IndexBoxProps {}

const IndexBox = styled.div<IndexBoxProps>((props) => ({
  borderRadius: 5,
  display: "flex",
  fontFamily: 'Lato", sans-serif',
}));

interface IndexBoxLeftProps {}

const IndexBoxLeft = styled.div<IndexBoxLeftProps>((props) => ({
  fontFamily: "Lato, sans-serif",

  flexBasis: "40%",
  padding: "20px 60px",
}));

interface IndexBoxRightProps {}

const IndexBoxRight = styled.div<IndexBoxRightProps>((props) => ({
  flexBasis: "60%",
  padding: 40,

  borderRadius: 5,
}));

const ImgWithDiv = styled.div((props) => ({
  backgroundImage: `url(${mySVG})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: 500,
  width: "100%",
  marginTop: 8,
}));
interface TypeBox {
  label: string;
}
const IndexBoxh1 = styled.h1((props:any) => ({
  color: props.theme?.colors.IndexBoxh1,
  fontSize: 220,
  margin: "0",

  "&:first-child": {
    fontSize: 110,
    color: "#04aa6d",
  },
}));

export const HomePageFirstSection = () => {
  return (
    <IndexBox>
      <IndexBoxLeft>
        <IndexBoxh1>This is</IndexBoxh1>
        <IndexBoxh1>Home</IndexBoxh1>
      </IndexBoxLeft>

      <IndexBoxRight>
        <ImgWithDiv />
      </IndexBoxRight>
    </IndexBox>
  );
};
