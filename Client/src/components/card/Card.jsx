/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Card.module.scss";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Card({
  id,
  image,
  gender,
  status,
  origin,
  onClose,
  name,
  species,
}) {
  const myFavs = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    // Asegúrate de que myFavs tenga un valor antes de iterar sobre él
    if (myFavs) {
      myFavs.forEach((fav) => {
        if (fav.id === id) {
          setIsFav(true);
        }
      });
    }
  }, [myFavs, id]);

 

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(removeFav(id));
    } else {
      setIsFav(true);
      dispatch(
        addFav({
          id,
          image,
          gender,
          status,
          origin,
          onClose,
          name,
          species,
        })
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
