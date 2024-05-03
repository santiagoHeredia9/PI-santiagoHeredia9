import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import validation from "./validation";
import style from "./LoginForm.module.css";
import { registerOrLogin } from "../../redux/actions";

const LoginForm = () => {
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

  const dispatch = useDispatch();

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
      console.log(error.message);
    }
  }

  // async function login(userData) {
  //   try {
  //     const URL = "http://localhost:3001/rickandmorty/login/";
  //     const response = await axios.post(URL, userData);
  //     const { access } = response.data;
  //     setIsLoged(response.data);
  //     access && navigate("/home");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className={style.container}>
      <form className={style.inicio}>
        <h2 className={style.titulo}>Welcome back!</h2>

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
      <article className={style.register}>
        <p>You do not have an account?</p>
        <button className={style.registButton} onClick={() => dispatch(registerOrLogin())}>Create one!</button>
      </article>
    </div>
  );
};

export default LoginForm;
