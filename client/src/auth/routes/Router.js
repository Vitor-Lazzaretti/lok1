import React from 'react';
import { Route, Routes } from "react-router";

import About from '../../app/views/About/About';
import Home from '../../app/views/Home/Home';
import Initial from '../../app/views/Initial/Initial';
import NotFound from '../../app/views/NotFound/NotFound';
import RotaLonga from '../../app/views/WpAdmin/RotaLonga';
import PrivateRoutes from './PrivateRoutes';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Initial />} />
      <Route path="/home" element={<Home />} />
      <Route path="/rota/longa/rota/longa" element={<RotaLonga />} />
      <Route path="/about" element={
        <PrivateRoutes>
          <About />
        </PrivateRoutes>
      }/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;