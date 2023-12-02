import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Detail.module.scss"

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data); 
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);


  return character.name ? (
    
    <div className={style.Detail}>
      <h2>{character.name}</h2>
      <h4>STATUS:{character.status}</h4>
      <h4>GENDER:{character.gender}</h4>
      <h4>SPECIE:{character.species}</h4>
      <h4>ORIGIN:{character.origin.name}</h4>
      <img src={character.image} alt="characterimage" />
    </div>
  ) : (
    <h1>Cargando personaje...</h1>
  );
};

export default Detail;
