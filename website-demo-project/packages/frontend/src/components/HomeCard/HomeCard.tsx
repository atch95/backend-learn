import React from "react";
import styled from "@emotion/styled";
import cardSvg from "./card1.svg"
import { CustomTheme, PropsWithTheme } from "../../Types";

const ImgWithDiv = styled.div(
  (props) => ({
    backgroundImage: `url(${cardSvg})`,
    backgroundPosition: 'center',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  height: 120,
  width: '100%',
  })
);


const HomeCardContainer = styled.div((props:any) => ({
  paddingLeft: 0,
  fontFamily: "Lato, sans-serif",
  textAlign: "left",
  width: 'calc(33.333% - 30px )',
  margin: 15 ,
  height: "auto",
  backgroundColor: props.theme?.colors.cardBackground,
  boxShadow: "0px 0px 7px rgba(32, 32, 32, 0.2)",
  borderRadius: 4,
  color: "rgb(255, 255, 255)",
  border: 1,
  boxSizing: "border-box",
}));

const CardId = styled.div((props) => ({
  color: "#04aa6d",
}));

const CardT = styled.div((props:any) => ({
  color: props.theme?.colors.portfolioTitle,
}));

const CardStatus = styled.div((props) => ({
  color: "#04aa6d",
}));

const TextContainer = styled.div((props) => ({
  borderTop:"1px solid #3f3d56",
  paddingLeft:"20px",
  paddingTop:"20px",
  paddingBottom:"20px",
  
}));

export interface HomeCardProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
  
}

export const HomeCard = (props: HomeCardProps) => {
  return (
    
      <HomeCardContainer>
        <ImgWithDiv/>
       
<TextContainer>

        <CardId>ID:{props.userId}</CardId>
        <CardT>Title:{props.title}</CardT>
        <CardStatus>Status:{props.completed?"Completed":"Not Finished"}</CardStatus>
        </TextContainer>
      </HomeCardContainer>
    
  );
};
