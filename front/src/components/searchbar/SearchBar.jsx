/* eslint-disable react/prop-types */
import { useState } from "react";
export default function SearchBar({ onSearch }) {    //yo ahora quiero crear una funcion que busque mediante un id el personaje que quiero
  const [id, setId] = useState("");                 //creo un estado el cual se modificará en cuanto el input cambie su valor
  const handleChange = (event) => {
   setId(event.target.value);                       //creamos la funcion que llevará a cabo esto
  };
  return (
    <div>
      <input type="search" value={id} onChange={handleChange} placeholder="Introduce un ID del personaje" />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}
