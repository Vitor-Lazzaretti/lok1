import React, { useContext } from 'react';
import { AuthGoogleContext } from '../../../../auth/AuthGoogle';

const Initial = () => {
    const { signInWithGoogle } = useContext(AuthGoogleContext);
    return (
        <>
            <h1> Logar com Google </h1>
            <button onClick={signInWithGoogle}> </button>
        </>
    );
};

export default Initial;