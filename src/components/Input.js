import React from "react";

const Input = ({ handleChange, value, title, name }) => {
  return (
    <label className="flex gap-1 items-center">
      <input onChange={handleChange} value={value} type="radio" name={name} />
      <span className="">{title}</span>
    </label>
  );
};

export default Input;
