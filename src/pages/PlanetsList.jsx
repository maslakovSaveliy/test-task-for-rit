import React, { useEffect, useState } from "react";
import Service from "../API/Service";
import { useFetching } from "../hooks/useFetching";
import PlanetItem from "../components/UI/PlanetItem/PlanetItem";
import { Circles } from "react-loader-spinner";
import { getPageCount } from "../utils/pages";
import Button from "../components/UI/Button/Button";
import "../styles/PlanetsList.css";
import Pagination from "../components/UI/pagination/Pagination";
const PlanetsList = () => {
  const [planets, setPlanets] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const [fetchPlanets, isLoading, error] = useFetching(async (page) => {
    const res = await Service.getPlanets(page);
    setPlanets(res.data.results);
    const totalCount = res.data.count;
    setTotalPages(getPageCount(totalCount));
  });
  useEffect(() => {
    fetchPlanets(page);
  }, [page]);
  const changePage = (page) => {
    setPage(page);
  };
  return (
    <div className="planets__list">
      {error && <h1>Произошла ошибка {error}</h1>}
      {isLoading ? (
        <Circles color="white" />
      ) : (
        planets.map((planet, index) => (
          <PlanetItem key={index} planet={planet} />
        ))
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
};
export default PlanetsList;
