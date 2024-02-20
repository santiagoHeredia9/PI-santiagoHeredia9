/* eslint-disable react-hooks/exhaustive-deps */
import style from "./App.module.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav-bar/Nav.jsx";
import About from "./components/about/About.jsx";
import Detail from "./components/detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import Error from "./components/Error/Error.jsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites.jsx";

function App() {
  const location = useLocation();

  return (
    <div className={style.appContainer}>
      {location.pathname !== "/" && location.pathname !== "/about" && location.pathname !== "/*" && <Nav />}

      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
