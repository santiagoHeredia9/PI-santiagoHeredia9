/* eslint-disable react/prop-types */
import { useState } from "react";
import style from '../nav-bar/Nav.module.scss'
export default function SearchBar({ onSearch }) {    
  const [id, setId] = useState("");                 
  const handleChange = (event) => {
   setId(event.target.value);                       
  };
  return (
    <div>
      <input className={style.bar}type="search" value={id} onChange={handleChange} placeholder="Introduce un ID del personaje" />
      <button className={style.navitem2} onClick={() => onSearch(id)}>ADD</button>
    </div>
  );
}
