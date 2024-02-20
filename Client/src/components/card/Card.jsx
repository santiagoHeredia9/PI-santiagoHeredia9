/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { addFav, deleteCharacter, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Card(props) {
  const myFavs = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (myFavs) {
      myFavs.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavs, props.id]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsFav(true);
      dispatch(addFav(props));
    }
  };

  const handleCloseFav = (id) => {
    if (isFav) {
      const confirmDelete = window.confirm(
        "You are going to delete this character from favorites. Are you sure?"
      );
      if (confirmDelete) {
        dispatch(removeFav(id));
        setIsFav(false);
      } else {
        return;
      }
    }
  };

  const handleClose = (id) => {
    dispatch(deleteCharacter(id));
  };

  return (
    <section className={isFav ? style.cartasFav : style.cartas}>
      {isFav ? (
        <span className={style.heart} onClick={handleFavorite}>
          ❤️
        </span>
      ) : (
        <span className={style.heart} onClick={handleFavorite}>
          🤍
        </span>
      )}

      {isFav ? (
        <span onClick={() => handleCloseFav(props.id)} className={style.boton}>
          ×
        </span>
      ) : (
        <span onClick={() => handleClose(props.id)} className={style.boton}>
          ×
        </span>
      )}

      <Link className={style.link} to={`/detail/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <img src={props.image} alt="characterimage" className={style.img} />
      <div className={style.info}>
        <h3>
          <span className={style.span}>Gender: </span> <br />
          {props.gender}
        </h3>
        <h3>
          <span className={style.span}>Specie: </span> <br />
          {props.species}
        </h3>

        <h3>
          <span className={style.span}>Status: </span> <br />
          {props.status}
        </h3>
        <h3>
          <span className={style.span}>From: </span> <br />
          {props.origin.name}
        </h3>
      </div>
    </section>
  );
}
