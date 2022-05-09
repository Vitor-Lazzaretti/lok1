import React from 'react';
import Header from '../../layouts/Header/Header';
import { useAuth } from '../../../auth/AuthGoogleContext';

const Initial = () => {
  const { currentUser, signInWithGoogle, logout } = useAuth();

  function showWarning() {
    alert('Nada');
  }

  return (
    <>
    <Header />
    { JSON.stringify(currentUser) }
    </>
  );
};

export default Initial;