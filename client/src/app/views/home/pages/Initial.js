import React from 'react';
import { signInWithGoogle } from '../../../../auth/firebase/firebase';

const Initial = () => {
    return (
        <h1 onClick={signInWithGoogle}> Logar com Google </h1>
    );
};

export default Initial;