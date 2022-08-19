import React from "react";

import { Route, Routes } from "react-router-dom";

import Home from "../components/main/Home";
import Detail from "../components/main/Detail";
import Catalog from "../components/main/Catalog";

const Routers = () => {
  return (
    <Routes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Detail />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" exact element={<Home />} />
    </Routes>
  );
};

export default Routers;
