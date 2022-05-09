import React from 'react';
import Header from '../../layouts/Header/Header';
import { HomeContainer, HomeDiv, Scenery, ScroolItensArea } from './style';

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeDiv flex={2}>
          <Scenery></Scenery>
        </HomeDiv>
        <HomeDiv flex={1} >
          <ScroolItensArea></ScroolItensArea>
        </HomeDiv>
      </HomeContainer>
    </>
  );
};

export default Home;