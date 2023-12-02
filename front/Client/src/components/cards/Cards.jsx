/* eslint-disable react/prop-types */
import Card from "../card/Card";
import style from './Cards.module.scss'
export default function Cards({ characters, onClose }) {
  
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
               onClose={onClose}
            />
         ))}
    
      </div>
   );
}