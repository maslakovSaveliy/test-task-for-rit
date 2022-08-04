import React from "react";
import { Routes, Route } from "react-router-dom";
import PlanetPage from "../pages/PlanetPage";
import PlanetsList from "../pages/PlanetsList";
import Error from "../pages/Error";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<PlanetsList />} />
      <Route path="/:id" element={<PlanetPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;
