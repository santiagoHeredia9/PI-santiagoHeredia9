import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import validation from "./validation";
import style from "./RegisterForm.module.css";
import { registerOrLogin } from "../../redux/actions";

const RegisterForm = () => {
  const [newUserData, setNewUserData] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUserData({ ...newUserData, [name]: value });
    setErrors(validation({ ...newUserData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newUserData.password !== newUserData.repeatPassword) {
      setErrors({ ...errors, repeatPassword: "Passwords do not match." });
      return;
    }

    try {
      const response = await axios.post("http://localhost:3001/rickandmorty/register/", newUserData); 

      dispatch(registerOrLogin()); 
      alert(`Welcome ${response.data.user.name}`); 
    } catch (error) {
      console.error("Error registering user:", error.response.data.message); 
      setErrors({ ...errors, server: "Error registering user." }); 
    }
  };

  return (
    <div className={style.container}>
      <form className={style.inicio}>
        <h2 className={style.titulo}>Welcome!</h2>

        <label htmlFor="name" className={style.label}>
          Name:
        </label>
        <input
          className={`${style.items} ${
            errors.name ? style.error : style.right
          }`}
          type="text"
          name="name"
          id="name"
          value={newUserData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <span className={style.span1}>{`*${errors.name}`}</span>
        )}

        <label htmlFor="email" className={style.label}>
          E-mail:
        </label>
        <input
          className={`${style.items} ${
            errors.email ? style.error : style.right
          }`}
          type="text"
          name="email"
          id="email"
          value={newUserData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <span className={style.span2}>{`*${errors.email}`}</span>
        )}

        <label htmlFor="password" className={style.label}>
          Password:
        </label>
        <input
          className={`${style.items} ${
            errors.password ? style.error : style.right
          }`}
          type="password"
          name="password"
          id="password"
          value={newUserData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <span className={style.span3}>{`*${errors.password}`}</span>
        )}

        <label htmlFor="repeatPassword" className={style.label}>
          Repeat password:
        </label>
        <input
          className={`${style.items} ${
            errors.repeatPassword ? style.error : style.right
          }`}
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          value={newUserData.repeatPassword}
          onChange={handleChange}
        />
        {errors.repeatPassword && (
          <span className={style.span4}>{`*${errors.repeatPassword}`}</span>
        )}

        <button className={style.boton} onClick={handleSubmit}>
          Register
        </button>
      </form>
      <article className={style.register}>
        <p>You already have an account?</p>
        <button
          className={style.registButton}
          onClick={() => dispatch(registerOrLogin())}
        >
          Sing in here!
        </button>
      </article>
    </div>
  );
};

export default RegisterForm;
