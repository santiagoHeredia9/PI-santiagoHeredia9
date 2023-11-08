/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Card.module.css";

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
        <h2>Status: {props.status}</h2>
        <h2>Specie: {props.species}</h2>
      </div>
      <div className={style.info2} >
        <h2>Gender: {props.gender}</h2>
        <h2>Origin: {props.origin}</h2>
      </div>
    </div>
  );
}
