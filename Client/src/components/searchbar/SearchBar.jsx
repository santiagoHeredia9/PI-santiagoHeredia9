/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "../nav-bar/Nav.module.css";
import { useSelector, useDispatch } from "react-redux";
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

      if (characters.some((char) => char.name === response.data.name)) {
        alert("this character already exists!");
      } else {
        console.log(dispatch(fetchCharacter(response.data)));
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <input
        className={style.bar}
        type="search"
        value={id}
        onChange={handleChange}
        placeholder="Introduce a number "
      />
      <button className={style.navitem2} onClick={() => onSearch(id)}>
        ADD
      </button>
    </div>
  );
}
