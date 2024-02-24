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
      <img src={props.image} alt="characterimage" className={style.img} />
      <Link className={style.link} to={`/detail/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <div className={style.info}>
        <p>
          <strong className={style.span}>Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong className={style.span}>Specie: </strong>
          {props.species}
        </p>

        <p>
          <strong className={style.span}>Status: </strong>
          {props.status}
        </p>
        <p>
          <strong className={style.span}>From: </strong>
          {props.origin.name}
        </p>
      </div>
      <div className={style.buttonSection}>
        {isFav ? (
          <span className={style.unFav} onClick={handleFavorite}>
            Remove fav
          </span>
        ) : (
          <span className={style.fav} onClick={handleFavorite}>
            Add favorite
          </span>
        )}

        {isFav ? (
          <span
            onClick={() => handleCloseFav(props.id)}
            className={style.close}
          >
            Close card
          </span>
        ) : (
          <span onClick={() => handleClose(props.id)} className={style.close}>
            Close card
          </span>
        )}
      </div>
    </section>
  );
}
