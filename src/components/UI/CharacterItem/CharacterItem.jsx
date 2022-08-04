import React from "react";
import style from "./CharacterItem.module.css";
const CharacterItem = (props) => {
  return (
    <div className={style.character__content}>
      <h2>
        {props.id}. {props.character.name}
      </h2>
      <div className={style.character__info}>
        <ul>
          <li className={style.info__item}>Height: {props.character.height}</li>
          <li className={style.info__item}>Mass: {props.character.mass}</li>
          <li className={style.info__item}>
            Hair color: {props.character.hair_color}
          </li>
          <li className={style.info__item}>
            Eye color: {props.character.eye_color}
          </li>
          <li className={style.info__item}>
            Birth year: {props.character.birth_year}
          </li>
          <li className={style.info__item}>gender: {props.character.gender}</li>
        </ul>
      </div>
    </div>
  );
};
export default CharacterItem;
