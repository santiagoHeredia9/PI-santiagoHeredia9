/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./Form.module.scss";
import validation from "./validation";

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
    let { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors(validation({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={style.divEpico}>
      <form className={style.inicio}>
        <h1 className={style.titulo}>Welcome everyone!</h1>
        <div className={style.div}>
    
          <label className={style.label} htmlFor="email">
            Email
          </label>
          <input
            
            className={`${style.items} ${errors.email ? (style.error) : (style.right)}`}
            type="text"
            name="email"
            id="email"
            value={userData.email}
            onChange={handleChange}
          />
          {errors.email && <span className={style.span}>{errors.email}</span>}

          <label className={style.label2} htmlFor="password">
            Password
          </label>
          <input
             className={`${style.items2} ${errors.password ? (style.error) : (style.right)}`}
            type="password"
            name="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
          />
          {errors.password && (
            <span className={style.span2}>{errors.password}</span>
          )}

          <button className={style.boton} onClick={handleSubmit}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
