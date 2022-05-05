import React from 'react';
import { Routes, Route } from "react-router-dom";
import About from './views/home/pages/About';
import Home from './views/home/pages/Home';
import Initial from './views/home/pages/Initial';
import NotFound from './views/home/pages/NotFound';
import RotaLonga from './views/home/pages/RotaLonga';

const App = () => {
  return (
    <div className="App">
      <h1> Hackerman </h1> 
      <Routes>
          <Route path="/" element={<Initial />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rota/longa/rota/longa" element={<RotaLonga />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
