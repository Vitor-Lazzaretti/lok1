import React from 'react';
import Header from '../../layouts/Header/Header';
import { useAuth } from '../../../auth/AuthGoogleContext';
import FileIndicator from './Components/FileIndicator';
import { TerminalBody, TerminalSection, TerminalContainer, TerminalHeader, TerminalHeaderButton, Item } from './Areas/Terminal';

const Initial = () => {
  const { currentUser, signInWithGoogle, logout } = useAuth();

  const handleSignInOut = () => {
    if (!currentUser) {
      signInWithGoogle();
      alert(2)
    } else {
      logout();
      alert(10);
    }

  }

  return (
    <>
      <TerminalSection>
        <TerminalContainer>
          <TerminalHeader>
            <div className='button-area'>
              <TerminalHeaderButton color='red' run={true} />
              <TerminalHeaderButton color={'#ffc400'} />
              <TerminalHeaderButton color={'green'} />
            </div>
            <FileIndicator> Lok1 - Prompt de Comando </FileIndicator>
          </TerminalHeader>
          <TerminalBody>
            <span> Acesso ao Terminal Lok1 </span>
            <hr />
            <p> Usuário Atual: {currentUser?.displayName || 'Anônimo'} </p>
            <p> Password: 
              <i> {currentUser ? ' ************' : ' undefined'} </i>
            </p>
            <hr />
            <p> Você executou o programa <i>Lok1</i>. O sistema agora irá carregar todas as
              informações necessárias para execução do código. Por favor, escolha qual tela deseja abrir: </p>
            <br />
            <Item id={1}>Página Home</Item>
            <Item id={2}>Sobre Nós</Item>
            <Item id={3}>Modo História</Item>
            <Item id={4}>Redes Sociais</Item>
            <Item onClick={handleSignInOut} id={5}> {currentUser ? 'Deslogar' : 'Fazer Login'} </Item>
            <br />
            <p> C:User{'>'}{currentUser?.displayName.split(' ')[0] || 'Anônimo'}{'>'}Lok1{'>'}<input maxLength={5} type={'text'}/> </p>
          </TerminalBody>
        </TerminalContainer>
      </TerminalSection>
    </>
  );
};

export default Initial;