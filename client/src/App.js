import React, { useState } from 'react'

function App() {
  const [loading, setLoading] = useState(false);

  function postName() {
    setLoading(true);
    fetch('/api')
      .then((res) => {
        setLoading(false);
        setTimeout(alert(res.status), 100);
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
