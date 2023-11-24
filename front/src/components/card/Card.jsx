/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Card.module.scss";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

function Card({
  id,
  image,
  gender,
  status,
  origin,
  onClose,
  name,
  species,
  addFavs,
  removeFavs,
  myFavs
}) {



  useEffect(() => {
    myFavs.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavs]);


  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFavs(id);
    } else {
      setIsFav(true);
      addFavs({id,
        image,
        gender,
        status,
        origin,
        onClose,
        name,
        species,});
    }
  };

  return (
    <div className={style.cartas}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}

      <button className={style.boton} onClick={() => onClose(id)}>
        X
      </button>
      <Link className={style.link} to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <img src={image} alt="characterimage" className={style.img} />
      <div className={style.info}>
        <h2>
          <span className={style.span}>Gender: </span>
          {gender}
        </h2>
        <h2>
          <span className={style.span}>Specie: </span>
          {species}
        </h2>
      </div>
      <div className={style.info2}>
        <h2>
          <span className={style.span}>Status: </span>
          {status}
        </h2>
        <h2>
          <span className={style.span}>From: </span>
          {origin}
        </h2>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavs: () => dispatch(addFav),
    removeFavs: () => dispatch(removeFav),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavs: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
