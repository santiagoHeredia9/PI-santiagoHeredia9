/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Card from "../card/Card";
import { useDispatch } from "react-redux";
import { removeFav, filterCards, orderCards } from "../../redux/actions";
import style from "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const myFavs = useSelector((state) => state.myFavorites);


  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <>
      <div className={style.container}>
        <select className={style.select1} onChange={handleOrder}>
          <option>Select order</option>
          <option value="A">Ascending</option>
          <option value="D">Descending</option>
        </select>
        <select className={style.select2} onChange={handleFilter}>
          <option>Select gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>

        {
          myFavs.map((character) => {
            console.log("Character Origin:", character.origin); // Imprime el objeto origin para depurar
            return (
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
            );
          })
        }


      </div>
    </>
  );
};

export default Favorites;
