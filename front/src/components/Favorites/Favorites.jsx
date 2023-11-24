/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Card from "../card/Card";
import { useDispatch } from "react-redux";
import { removeFav, filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();

  const [aux, setAux] = useState(false)

  const onClose = (id) => {
    dispatch(removeFav(id));
  };

  const handleOrder = () => {
    setAux(true)
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = () => {
    filterCards(e.target.value);
  };
  return (
    <>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <select onChange={handleFilter}>
        <option value="Male"></option>
        <option value="Female"></option>
        <option value="Genderless"></option>
        <option value="unknown"></option>
      </select>
      {myFavorites.map((character) => (
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
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
