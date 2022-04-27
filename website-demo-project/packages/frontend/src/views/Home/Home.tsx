import React from "react";
import styled from "@emotion/styled";
import { HomeCard } from "../../components/HomeCard";
import { HomeCards } from "../../components/HomeCards";
import { HomePageFirstSection} from "../../sections/HomePageFirstSection"



interface HomeProps {}
export const Home = (props: HomeProps) => {
  return (
    <div>
      <HomePageFirstSection/>
    <HomeCards/>

    </div>
  );
};
