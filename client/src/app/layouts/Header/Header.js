import React, { useEffect } from 'react';
import { useAuth } from '../../../auth/AuthGoogleContext';
import GoogleProfile from '../../components/GoogleProfile/GoogleProfile';
import Button from '../../components/Button/Button';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import { HeaderContainer, HeaderLeft, HeaderRight } from './style';
import { Link } from 'react-router-dom';

const Header = () => {
  const { currentUser } = useAuth();
  useEffect(() => {

  }, [currentUser]);

  return (
    <HeaderContainer>
      <HeaderRight>
      <ButtonLink to={'/'}>
          Início
        </ButtonLink>
        <ButtonLink to={'/home'}> 
          Home
        </ButtonLink>
        <ButtonLink to={'/about'}>
          Sobre Nós
        </ButtonLink>
        <Button>
          Jogo
        </Button>
        <ButtonLink to={'/notfound'}>
          Redes Sociais
        </ButtonLink>
      </HeaderRight>
      <HeaderLeft>
        <GoogleProfile />
      </HeaderLeft>
    </HeaderContainer>
  )
}

export default Header;