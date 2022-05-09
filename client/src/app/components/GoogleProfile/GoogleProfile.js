import React from 'react';
import { useAuth } from '../../../auth/AuthGoogleContext';
import { ImageProfile } from './style';

const GoogleProfile = ({ size }) => {
  const { currentUser } = useAuth();

  return (
      <ImageProfile size={size} draggable={false} url={currentUser?.photoURL}>
        <div></div>
      </ImageProfile>
  );
}

export default GoogleProfile;