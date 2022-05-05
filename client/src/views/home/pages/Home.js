import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        fetch('/api')
        .then((res) => {
            res.json().then((res) => {
                alert(res.api);
            });
        });
    }, []);
    return (
        <h1> Página Home </h1>
    );
};

export default Home;