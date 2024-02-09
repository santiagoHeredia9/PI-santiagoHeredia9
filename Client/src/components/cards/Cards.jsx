/* eslint-disable react/prop-types */
import Card from "../card/Card";
import style from "./Cards.module.css";
import { useSelector} from "react-redux";

export default function Cards() {
  const characters = useSelector((state) => state.allCharacters);


  return (
    <div className={style.container}>
      {characters.map((character) => (
        <Card
          key={character.id}
          id={character.id}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          origin={character.origin.name}
          image={character.image}
        />
      ))}
    </div>
  );
}
