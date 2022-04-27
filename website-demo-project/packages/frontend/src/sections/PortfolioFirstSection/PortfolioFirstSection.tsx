import React from "react";
import { Global, css, useTheme, ThemeProvider } from "@emotion/react";
import styled from "@emotion/styled";

import PortfolioSvgExample1 from "./Portfolio1.svg";
import PortfolioSvgExample2 from "./Portfolio2.svg";
import PortfolioSvgExample3 from "./Portfolio3.svg";
import PortfolioSvgExample4 from "./Portfolio4.svg";
import { useParams } from "react-router-dom";
import { MdDarkMode } from 'react-icons/Md';



const MainContainer = styled.div(() => ({
  height: "100%",
  width: "100%",
}));
const PortfolioTitleBox = styled.div((props:any) => ({
  width: "80%",
  margin: "auto",
  fontFamily: "Lato, sans-serif",
  
}));

const PortfolioTitle = styled.div((props:any) => ({
  color: props.theme?.colors.portfolioTitle,
  fontSize: 80,
  textAlign: "center",
}));
const PortfolioText = styled.div((props) => ({
  marginTop: 20,
  color: "#04aa6d",
  textAlign: "center",
}));
const PortfolioContainer = styled.div((props) => ({
  display: "grid",
  gridTemplateColumns: "auto auto",
  marginTop: "5%",
  padding: "0% 5%",
  gridColumnGap: 50,
  gridRowGap: 50,
  alignItems: "center",

  fontFamily: 'Lato", sans-serif',
}));
const PortfolioContainerItem = styled.div((props) => ({
  backgroundColor: "#3f3d56",
  fontSize: 30,
  textAlign: "center",
  borderRadius: 5,
  boxShadow: "5px 5px 7px rgba(46, 45, 45, 0.2)",
  position: "relative",
}));

const PortfolioPictureOverlay = styled.div((props) => ({
  transition: "0.4s ease",
  width: "100%",
  height: "100%",
  position: "absolute",

  background: "rgba(255, 255, 255, 0.8)",
  top: 0,
  borderRadius: 5,
  opacity: 0,
  fontSize: 20,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  "&:hover": {
    opacity: 100,
  },
}));

const PortfolioCardTitle = styled.div((props) => ({
  color: "#3f3d56",
  fontSize: 60,
  fontFamily: "Lato, sans-serif",
}));

const PortfolioCardText = styled.div((props) => ({
  color: "#3f3d56",
  fontSize: 30,
  fontFamily: "Lato, sans-serif",
}));

const PortfolioImgOne = styled.div((props) => ({
  backgroundImage: `url(${PortfolioSvgExample1})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: 250,
  width: "100%",
}));
const PortfolioImgTwo = styled.div((props) => ({
  backgroundImage: `url(${PortfolioSvgExample2})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: 250,
  width: "100%",
}));
const PortfolioImgThree = styled.div((props) => ({
  backgroundImage: `url(${PortfolioSvgExample3})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: 250,
  width: "100%",
}));
const PortfolioImgFour = styled.div((props) => ({
  backgroundImage: `url(${PortfolioSvgExample4})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  height: 250,
  width: "100%",
}));
export const PortfolioFirstSection = (props: any) => {
  return (
    <MainContainer>
      <PortfolioTitleBox>
        <PortfolioTitle>Portfolio</PortfolioTitle>

        <PortfolioText>Here you can find all my previous work</PortfolioText>
      </PortfolioTitleBox>

      <PortfolioContainer>
        <PortfolioContainerItem>
          <PortfolioImgOne />
          <PortfolioPictureOverlay>
            <PortfolioCardTitle>Mountain</PortfolioCardTitle>
            <PortfolioCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              nisi!
            </PortfolioCardText>
          </PortfolioPictureOverlay>
        </PortfolioContainerItem>
        <PortfolioContainerItem>
          <PortfolioImgTwo></PortfolioImgTwo>
          <PortfolioPictureOverlay>
            <PortfolioCardTitle>Mountain</PortfolioCardTitle>
            <PortfolioCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              nisi!
            </PortfolioCardText>
          </PortfolioPictureOverlay>
        </PortfolioContainerItem>
        <PortfolioContainerItem>
          <PortfolioImgThree></PortfolioImgThree>
          <PortfolioPictureOverlay>
            <PortfolioCardTitle>Mountain</PortfolioCardTitle>
            <PortfolioCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              nisi!
            </PortfolioCardText>
          </PortfolioPictureOverlay>
        </PortfolioContainerItem>
        <PortfolioContainerItem>
          <PortfolioImgOne></PortfolioImgOne>
          <PortfolioPictureOverlay>
            <PortfolioCardTitle>Mountain</PortfolioCardTitle>
            <PortfolioCardText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse,
              nisi!
            </PortfolioCardText>
          </PortfolioPictureOverlay>
        </PortfolioContainerItem>
      </PortfolioContainer>
    </MainContainer>
  );
};
