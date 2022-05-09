import React from 'react';
import Header from '../../layouts/Header/Header';
import { useAuth } from '../../../auth/AuthGoogleContext';

const Home = () => {
  const { currentUser, signInWithGoogle, logout } = useAuth();

  return (
    <>
    <Header />
    { currentUser?.photoURL }
    <br />    <br />    <br />
    <button onClick={signInWithGoogle} style={{ margin: '100px', padding: 40, fontSize: 40 }}> Logar </button>
    <button onClick={logout} style={{ margin: '100px', padding: 40, fontSize: 40 }}> Deslogar </button>
    </>
  );
};

export default Home;