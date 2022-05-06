import React from 'react';
import { Route, Routes } from "react-router";

import About from '../../app/views/home/pages/About';
import Home from '../../app/views/home/pages/Home';
import Initial from '../../app/views/home/pages/Initial';
import NotFound from '../../app/views/home/pages/NotFound';
import RotaLonga from '../../app/views/home/pages/RotaLonga';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/rota/longa/rota/longa" element={<RotaLonga />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;