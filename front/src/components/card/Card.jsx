/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Card.module.scss";

export default function Card(props) {
  return (
    <div className={style.cartas}>
      <button className={style.boton} onClick={() => props.onClose(props.id)}>
        X
      </button>
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
