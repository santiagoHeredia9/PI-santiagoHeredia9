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
      dispatch(
        addFav(props)
      );
    }
  };

  return (
    <div className={style.cartas}>
      {isFav ? (
        <span className={style.heart} onClick={handleFavorite}>
          ❤️
        </span>
      ) : (
        <span className={style.heart} onClick={handleFavorite}>
          🤍
        </span>
      )}

      {
        isFav ? (
          <button onClick={() => props.onClose(props.id)} className={style.boton}>X</button>
        ) : (
          <button onClick={() => dispatch(deleteCharacter(props.id))} className={style.boton}>X</button>
        )
      }
      <Link className={style.link} to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <img src={props.image} alt="characterimage" className={style.img} />
      <div className={style.info}>
        <h2>
          <span className={style.span}>Gender: </span>
          {props.gender}
        </h2>
        <h2>
          <span className={style.span}>Specie: </span>
          {props.species}
        </h2>
      </div>
      <div className={style.info2}>
        <h2>
          <span className={style.span}>Status: </span>
          {props.status}
        </h2>
        <h2>
          <span className={style.span}>From: </span>
          {props.origin}
        </h2>
      </div>
    </div>
  );
}
