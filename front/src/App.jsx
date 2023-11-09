import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import Nav from "./components/nav-bar/Nav.jsx";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/form/Form.jsx";
import Error from "./components/error/Error.jsx"
import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";


function App() {
  const [characters, setCharacters] = useState([]);

  const [isLoged, setIsLoged] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const EMAIL = "santywk8@gmail.com";
  const PASSWORD = "123nasi";

  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setIsLoged(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !isLoged && navigate("/");
  }, [isLoged]);

  const APIKEY = "pi-santiagoheredia9";

  function onSearch(id) {
    if (characters.some((character) => character.id === Number(id))) {
      window.alert("¡Este personaje ya se ha agregado!");
    } else {
      axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert("¡No hay personajes con este ID!");
          }
        }
      );
    }
  }
  

  function onClose(id) {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  }

  return (
    
      <div className="App">
        {location.pathname !== "/" && <Nav onSearch={onSearch} />}

        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
    
  );
}

export default App;