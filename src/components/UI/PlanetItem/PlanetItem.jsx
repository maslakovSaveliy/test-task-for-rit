import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./PlanetItem.module.css";
const PlanetItem = (props) => {
  const navigate = useNavigate(true);
  return (
    <div
      className={style.planet__item}
      onClick={() => navigate(`/${props.id}`)}
    >
      <h1>{props.planet.name}</h1>
      <div className={style.planet__info}>
        <ul>
          <li>Rotation period: {props.planet.rotation_period} hours</li>
          <li>Orbital period: {props.planet.orbital_period} days</li>
          <li>Diameter: {props.planet.diameter} meters</li>
          <li>Climate: {props.planet.climate}</li>
          <li>Gravity: {props.planet.gravity}</li>
          <li>Terrain: {props.planet.terrain}</li>
          <li>Surface water: {props.planet.surface_water}</li>
          <li>Population: {props.planet.population}</li>
        </ul>
      </div>
    </div>
  );
};
export default PlanetItem;
