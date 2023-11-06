/* eslint-disable react/prop-types */
import { useState } from "react";
import validationErrors from "./validation";
import style from "./Form.module.css";

const Form = (props) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setUserData({ ...userData, [property]: value });
    validationErrors({ ...userData, [property]: value }, errors, setErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={style.divEpico}>
      <form className={style.inicio}>
        <h1 className={style.titulo}>Login</h1>
        <div className={style.div}>
          <label className={style.label} htmlFor="email">
            Email
          </label>
          <input
            className={style.items}
            type="text"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
          <span className={style.span}>{errors.email}</span>

          <label className={style.label} htmlFor="password">
            Password
          </label>
          <input
            className={style.items}
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
          />
          <span className={style.span}>{errors.password}</span>

          <button className={style.boton} onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
