import React from 'react';
import Button from '../../components/Button/Button';
import Header from '../../layouts/Header/Header';
import { HomeContainer, HomeDiv, Scenery, ScroolItensArea, ItemArea } from './style';

const Home = () => {
  return (
    <>
      <Header />
      <HomeContainer>
        <HomeDiv flex={2}>
          <Scenery>
            <h2> A CRIPTOGRAFIA EM UM JOGO </h2>
            <p> O projeto do Clube Elite de matemática de ensinar criptografia com desafios para você ir resolvendo enquanto aprende mais sobre </p>
            <div style={{ backgroundColor: '#00000077', border: '2px solid #fff' }}>
              <Button> Clique para iniciar </Button>
            </div>
          </Scenery>
        </HomeDiv>
        <HomeDiv flex={1} >
          <ScroolItensArea>
            <ItemArea>
              <div className='img' style={{ backgroundImage: 'url("/egito-oriental.jpg")' }}></div>
              <div className='item-desc'>
                <span>Era Ocidental Oriental</span>
              </div>
            </ItemArea>
            <ItemArea>
              <div className='img' style={{ backgroundImage: 'url("/era-feudal.jpg")' }}></div>
              <div className='item-desc'>
                <span>Era Ocidental Oriental</span>
              </div>
            </ItemArea>
            <ItemArea>
              <div className='img' style={{ backgroundImage: 'url("/grecia-classica.jpg")' }}></div>
              <div className='item-desc'>
                <span>Era Ocidental Oriental</span>
              </div>

            </ItemArea>
          </ScroolItensArea>
        </HomeDiv>
      </HomeContainer>
    </>
  );
};

export default Home;