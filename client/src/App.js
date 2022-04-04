import React, { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false);

  function postName() {
    setLoading(true);

    fetch('/api', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        setLoading(false);  
        res.json().then((res) => alert(res.api));
    });
  }

  return (
    <div className="App">
      <button onClick={postName}> Carregar Backend </button>
      {loading && 
        <h1> LOADING </h1>
      } 
    </div>
  );
}

export default App;
