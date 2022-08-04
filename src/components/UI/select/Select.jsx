import React from "react";
import style from "./Select.module.css";
const Select = ({ value, setValue }) => {
  return (
    <select
      className={style.MySelect}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    >
      <option disabled value="">
        Gender filter
      </option>
      <option value="all">all genders</option>
      <option value="male">male</option>
      <option value="female">female</option>
      <option value="n/a">n/a</option>
    </select>
  );
};
export default Select;
