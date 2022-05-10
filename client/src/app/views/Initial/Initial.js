import React from 'react';
import Header from '../../layouts/Header/Header';
import { useAuth } from '../../../auth/AuthGoogleContext';
import { Background, FileIndicator, TerminalContainer, TerminalHeader, TerminalHeaderButton } from './style';

const Initial = () => {
  const { currentUser, signInWithGoogle, logout } = useAuth();

  function showWarning() {
    alert('Nada');
  }

  return (
    <>
      <Header />
      <Background>
        <TerminalContainer>
          <TerminalHeader>
            <div className='button-area'>
              <TerminalHeaderButton color='red' run={true} />
              <TerminalHeaderButton color={'#ffc400'} />
              <TerminalHeaderButton color={'green'} />
            </div>
            <FileIndicator> Lok1 - Prompt de Comando </FileIndicator>
          </TerminalHeader>
          

          <div style={{ color: '#fff' }}>
          alertalertalertalertalertalertalertalert
          </div> 

        </TerminalContainer>
      </Background>
    </>
  );
};

export default Initial;