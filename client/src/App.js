import React, { useState } from 'react';
import Axios from 'axios';

function App() {
  const url = 'http://localhost:5000'
  const [loading, setLoading] = useState(false);

  const returnLeo = () => {
    Axios.get(`${url}/api`, {}).
      then((res) => {
        alert(res.data.api);
      })
      .catch((err) => {
        console.log(err);
      })
  }
  function postName() {
    setLoading(true);
  }

  return (
    <div className="App">
      <button onClick={returnLeo}> Carregar Backend - learn react </button>
      {loading && 
        <h1> LOADING </h1>
      } 
    </div>
  );
}

export default App;
