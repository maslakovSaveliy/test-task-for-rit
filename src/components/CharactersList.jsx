import React from "react";
import Service from "../API/Service";
import { useFetching } from "../hooks/useFetching";
import { useState, useEffect } from "react";
import Select from "./UI/select/Select";
import CharacterItem from "./UI/CharacterItem/CharacterItem";
import { Circles } from "react-loader-spinner";
import "../styles/CharactersList.css";
const CharactersList = ({ characters }) => {
  const [charactersList, setCharactersList] = useState([]);
  const [filtered, setFiltered] = useState(charactersList);
  const [value, setValue] = useState("all");
  const [fetchPeople, isPeopleLoading, errorPeople] = useFetching(async () => {
    const chars = await Service.getAllData(characters);
    setCharactersList(chars);
    setFiltered(chars);
  });
  const genderFilter = (gender) => {
    if (gender == "all") {
      setFiltered(charactersList);
    } else if (gender == "male") {
      const filteredCharacters = [...charactersList].filter(
        (character) => character.gender == "male"
      );
      setFiltered(filteredCharacters);
    } else if (gender == "female") {
      const filteredCharacters = [...charactersList].filter(
        (character) => character.gender == "female"
      );
      setFiltered(filteredCharacters);
    } else if (gender == "n/a") {
      const filteredCharacters = [...charactersList].filter(
        (character) => character.gender == "n/a"
      );
      setFiltered(filteredCharacters);
    }
  };
  useEffect(() => {
    genderFilter(value);
  }, [value]);
  useEffect(() => {
    fetchPeople();
  }, [characters]);
  return (
    <div className="characters__list">
      <Select className="select" value={value} setValue={setValue} />
      {errorPeople && <h1>Произошла ошибка ${errorPeople}</h1>}
      {isPeopleLoading ? (
        <div style={{ display: "flex", alignSelf: "center" }}>
          <Circles color="white" />
        </div>
      ) : !filtered.length ? (
        <h2 style={{ display: "flex", alignSelf: "center" }}>no people here</h2>
      ) : (
        filtered.map((char, index) => (
          <CharacterItem key={index} id={index + 1} character={char} />
        ))
      )}
    </div>
  );
};
export default CharactersList;
