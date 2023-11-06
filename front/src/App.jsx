import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav-bar/Nav.jsx';
import About from './components/about/About.jsx';
import Detail from './components/detail/Detail.jsx';
import Form from "./components/form/Form.jsx"
import { useState, useEffect, } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate } from 'react-router-dom';
import style from "./components/cards/Cards.module.css"


function App() {
  const [characters, setCharacters] = useState([]);
  
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  const EMAIL = 'santywk8@gmail.com';
  const PASSWORD = '123nasi';

  function login(userData) {
     if (userData.password === PASSWORD && userData.email === EMAIL) {
        setAccess(true);
        navigate('/home');
     }
  }

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  const APIKEY = 'pi-santiagoheredia9';

  function onSearch(id) {
    axios(`https://rym2.up.railway.app/api/character/${id}?key=${APIKEY}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      }
    );
  }

  function onClose(id) {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  }

  return (
    <div className={style.body}>
    <div className='App'>
      <Nav onSearch={onSearch} />
      
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
     
    </div>
    </div>
  );
}

export default App;

