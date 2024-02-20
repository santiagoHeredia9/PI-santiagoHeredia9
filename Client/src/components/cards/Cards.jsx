/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import style from "./Cards.module.css";
import { useSelector } from "react-redux";

export default function Cards() {
  const characters = useSelector((state) => state.allCharacters);

  return (
      <main className={style.container}>
        <section className={style.gridContainer}>
          {characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              status={character.status}
              species={character.species}
              gender={character.gender}
              origin={character.origin}
              image={character.image}
            />
          ))}
        </section>
      </main>
  );
}
