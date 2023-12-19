/* eslint-disable react-hooks/exhaustive-deps */
import style from "./App.module.scss";
import Cards from "../components/cards/Cards.jsx";
import Nav from "../components/nav-bar/Nav.jsx";
import About from "../components/about/About.jsx";
import Detail from "../components/detail/Detail.jsx";
import Form from "../components/form/Form.jsx";
import Error from "../components/error/Error.jsx";
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Favorites from "../components/Favorites/Favorites.jsx";

function App() {
  const [characters, setCharacters] = useState([]);

  const [isLoged, setIsLoged] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  async function onSearch(id) {
    try {
      if (characters.some((character) => character.id === Number(id))) {
        window.alert("This character already exist !");
      } else {
        const response = await axios(
          `http://localhost:3001/rickandmorty/character/${id}`
        );
        if (response.data.name) {
          setCharacters((oldChars) => [...oldChars, response.data]);
        } else {
          window.alert("The character doesn't exist!");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  function onClose(id) {
    setCharacters(
      characters.filter((character) => character.id !== parseInt(id))
    );
  }

  return (
    <div
      className={`${style.App} ${
        location.pathname === "/detail/:id" ? style.Detail : ""
      }`}
    >
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      <div className={style.transitionContainer}>
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
