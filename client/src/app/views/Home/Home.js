import React from 'react';
import Header from '../../layouts/Header/Header';
import { HomeContainer, HomeDiv, Scenery, ScroolItensArea, ItemArea } from './style';

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeDiv flex={2}>
          <Scenery>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#11772d" fill-opacity="1" d="M0,32L34.3,42.7C68.6,53,137,75,206,90.7C274.3,107,343,117,411,128C480,139,549,149,617,138.7C685.7,128,754,96,823,74.7C891.4,53,960,43,1029,37.3C1097.1,32,1166,32,1234,42.7C1302.9,53,1371,75,1406,85.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#30ad23" fill-opacity="1" d="M0,256L34.3,261.3C68.6,267,137,277,206,261.3C274.3,245,343,203,411,192C480,181,549,203,617,197.3C685.7,192,754,160,823,160C891.4,160,960,192,1029,224C1097.1,256,1166,288,1234,293.3C1302.9,299,1371,277,1406,266.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
          </Scenery>
        </HomeDiv>
        <HomeDiv flex={1} >
          <ScroolItensArea>
            <ItemArea> Aqui irá ter um texto </ItemArea>
            <ItemArea> Aqui irá ter um texto </ItemArea>
            <ItemArea> Aqui irá ter um texto </ItemArea>
            <ItemArea> Aqui irá ter um texto </ItemArea>
          </ScroolItensArea>
        </HomeDiv>
      </HomeContainer>
    </>
  );
};

export default Home;