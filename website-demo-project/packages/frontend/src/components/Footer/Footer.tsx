import React from "react";
import styled from "@emotion/styled";
import Footersvg from "./footer1.svg";


const FooterContainer = styled.div((props:any) => ({
  height: "max-content",
  width: "100%",
  backgroundColor: props.theme?.colors.footerBackground,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  
}));



const FooterLeft = styled.div((props) => ({
  flexBasis: "30%",
  paddingLeft: 40,
  height: "auto",
  flexDirection: "column",
  display: "flex",
}));



const FooterRight = styled.div((props) => ({
  flexBasis: "30%",
  padding: 40,
  height: "auto",
  flexDirection: "column",
  display: "flex",
}));

const FooterTitle = styled.div((props) => ({
  color: "#04aa6d",
  marginBottom: 10,
  fontSize: 20,
  letterSpacing: 1,
}));

const FooterLink = styled.a((props) => ({
  color: "#ccc",
  marginTop: 5,
  textDecoration: 'none',
}));

const Footersvgimg = styled.div(
  (props) => ({
    backgroundImage: `url(${Footersvg})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
   
    width: '100%',
    flexBasis: '20%',
    padding: 40,
    height: 'auto',
    flexDirection: 'column',
    display: 'flex',
    
  })
);


export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLeft>
        <FooterTitle>Portfolio Links</FooterTitle>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
      </FooterLeft>

      <FooterRight>
        <FooterTitle>Portfolio Links</FooterTitle>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
      </FooterRight>

      <FooterRight>
        <FooterTitle>Portfolio Links</FooterTitle>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
        <FooterLink href="">Lorem, ipsum dolor.</FooterLink>
      </FooterRight>

<Footersvgimg></Footersvgimg>

    </FooterContainer>
  );
};
