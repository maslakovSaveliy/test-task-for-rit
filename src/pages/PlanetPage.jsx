import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Service from "../API/Service";
import CharactersList from "../components/CharactersList";
import { useFetching } from "../hooks/useFetching";
import { Circles } from "react-loader-spinner";
import "../styles/PlanetPage.css";
const PlanetPage = () => {
  const [planet, setPlanet] = useState({});
  const [characters, setCharacters] = useState([]);
  const params = useParams();
  const [fetchPlanet, isLoading, error] = useFetching(async () => {
    const response = await Service.getPlanet(params.id);
    setPlanet(response.data);
    setCharacters(response.data.residents);
  });
  useEffect(() => {
    fetchPlanet();
  }, []);
  return (
    <div className="planet__page">
      {error && <h1>Произошла ошибка {error}</h1>}
      {isLoading ? (
        <Circles color="white" />
      ) : (
        <>
          <Link
            style={{
              color: "white",
              marginRight: "auto",
              padding: "20px",
            }}
            to="/"
          >
            ⇦ Back
          </Link>
          <img src="/images/planet.png" alt="planet" />
          <div className="planet__content">
            <h1 style={{ marginBottom: "15px" }}>{planet.name}</h1>
            <CharactersList characters={characters} />
          </div>
        </>
      )}
    </div>
  );
};
export default PlanetPage;
