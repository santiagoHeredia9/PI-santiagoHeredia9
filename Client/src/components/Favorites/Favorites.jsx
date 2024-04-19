/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import { useDispatch } from "react-redux";
import {
  aOrderCards,
  dOrderCards,
  filterAll,
  filterCards,
} from "../../redux/actions";
import style from "./Favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const myFavs = useSelector((state) => state.myFavorites);

  const handleOrder = (e) => {
    if (e.target.value === "A") {
      dispatch(aOrderCards());
    } else{
      dispatch(dOrderCards())
    }
  };

  const handleFilter = (e) => {
    const filterValue = e.target.value;

    if (filterValue === "all") {
      dispatch(filterAll());
    } else {
      dispatch(filterCards(filterValue));
    }
  };
  return (
    <section>
      <div className={style.container}>
        <aside className={style.selectSection}>
          <select className={style.select1} onChange={handleOrder}>
            <option>Select order</option>
            <option value="A">Ascending</option>
            <option value="D">Descending</option>
          </select>
          <select className={style.select2} onChange={handleFilter}>
            <option>Select gender</option>
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </select>
        </aside>
        <div className={style.gridFav}>
          {myFavs.map((character) => {
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
          })}
        </div>
      </div>
    </section>
  );
};

export default Favorites;
