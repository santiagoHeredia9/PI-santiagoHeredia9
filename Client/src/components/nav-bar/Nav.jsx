/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.scss";

const Nav = ({ onSearch }) => {
  return (
    <div>
      <div className={style.navbar}>
        <Link to="/home">
          <button className={style.home}>Home</button>
        </Link>
        <Link to="/about">
          <button className={style.navitem}>About</button>
        </Link>

        <Link to="/">
          <button className={style.logOut}>Log out</button>
        </Link>

        <Link to="/favorites">
          <button className={style.fav}>Favorites</button>
        </Link>

        <SearchBar className={style.bar} onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;