import React, { useEffect, useState } from "react";
import Service from "../API/Service";
import { useFetching } from "../hooks/useFetching";
import PlanetItem from "../components/UI/PlanetItem/PlanetItem";
import { Circles } from "react-loader-spinner";
import "../styles/PlanetsList.css";
const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);
  const [fetchPlanets, isLoading, error] = useFetching(async () => {
    const res = await Service.getPlanets();
    setPlanets(res.data.results);
  });
  useEffect(() => {
    fetchPlanets();
  }, []);
  return (
    <div className="planets__list">
      {error && <h1>Произошла ошибка {error}</h1>}
      {isLoading ? (
        <Circles color="white" />
      ) : (
        planets.map((planet, index) => (
          <PlanetItem key={index} planet={planet} id={index + 1} />
        ))
      )}
    </div>
  );
};
export default PlanetsList;
