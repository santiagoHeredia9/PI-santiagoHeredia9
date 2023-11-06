/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import style from "./Card.module.css"

export default function Card(props) {
   return (
      <div className={style.cartas}>
         <button onClick={() => props.onClose(props.id)}>X</button>
         <Link to={`/detail/${props.id}`}>
         <h2>{props.name}</h2>
         </Link>
         <img src={props.image} alt='characterimage' />
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         
      </div>
   );
}