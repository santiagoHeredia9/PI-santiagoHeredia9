/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../Nav-bar/Nav.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacter } from "../../redux/actions";
import axios from "axios";

export default function SearchBar() {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const characters = useSelector((state) => state.allCharacters);
  const dispatch = useDispatch();

  const onSearch = async (id) => {
    try {
      const response = await axios(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (characters.some((char) => char.id === response.data.id)) {
        alert("This character already exists");
      } else {
        dispatch(fetchCharacter(response.data));
      }
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  return (
    <div className={style.searchSection}>
      <input
        className={style.searchBar}
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="Introduce a number "
      />
      <button className={style.add} onClick={() => onSearch(id)}>
        <img src="/search.svg" alt="dou" className={style.search} />
      </button>
    </div>
  );
}
