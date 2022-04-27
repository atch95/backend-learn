import React, { useEffect, useCallback, useState } from "react";
import { createPortal } from "react-dom";
import { HomeCard, HomeCardProps } from "../HomeCard";
import styled from "@emotion/styled";


 const HomeCardsContainer = styled.div((props) => ({
    width: "100%",
    height: "auto",
    display: "flex",
    flexWrap: "wrap",
    padding: 20,
    boxSizing: "border-box",
  }));

export const HomeCards = () => {
  const [cards, setCards] = useState<HomeCardProps[]>([]);

  const homeCardsData = useCallback(async () => {
    const data = await fetch("http://localhost:4000",{
      mode:"cors"
    });
    const parsedData = await data.json();
    setCards(parsedData);


  }, []);

  useEffect(() => {
    homeCardsData();
  }, []);
 
 

  return (
    <HomeCardsContainer>
      {cards.map((card) => {
        return <HomeCard userId={card.userId}  title={card.title} id={card.id}  completed ={card.completed}/>;
      })}
    </HomeCardsContainer>
  );
};
