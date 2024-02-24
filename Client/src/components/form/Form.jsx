/* eslint-disable react/prop-types */
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Form.module.css";
import validation from "./validation";

const Form = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const [isLoged, setIsLoged] = useState(false);
  const navigate = useNavigate();

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const response = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = response.data;
      setIsLoged(response.data);
      access && navigate("/home");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    !isLoged && navigate("/");
  }, [isLoged]);

  const handleChange = (event) => {
    let { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <section className={style.login}>
      <img src="/RICKEPICO.gif" alt="rick" className={style.image} />
      <form className={style.inicio}>
        <h1 className={style.titulo}>Welcome everyone!</h1>

        <label className={style.label} htmlFor="email">
          Email:
        </label>
        <input
          className={`${style.items} ${
            errors.email ? style.error : style.right
          }`}
          type="text"
          name="email"
          id="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className={style.span}>{`*${errors.email}`}</span>
        )}

        <label className={style.label} htmlFor="password">
          Password:
        </label>
        <input
          className={`${style.items} ${
            errors.password ? style.error : style.right
          }`}
          type="password"
          name="password"
          id="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className={style.span2}>{`*${errors.password}`}</span>
        )}

        <button className={style.boton} onClick={handleSubmit}>
          Login
        </button>
      </form>
    </section>
  );
};

export default Form;
