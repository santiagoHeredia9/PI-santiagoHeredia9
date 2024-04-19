/* eslint-disable react/prop-types */
import Card from "../Card/Card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";

export default function Cards() {
  const characters = useSelector((state) => state.allCharacters);

  return (
    <main className={styles.container}>
      <section className={styles.gridContainer}>
        {characters.length > 0 ? (
          characters.map((character) => (
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
          ))
        ) : (
          <div>
            <p className={styles.noCards}>Search for a character with an ID. We have a total of 823! </p>
            <img className={styles.arrow} src="/arrow.png" alt="arrow" />
          </div>
          
        )}
      </section>
    </main>
  );
}
