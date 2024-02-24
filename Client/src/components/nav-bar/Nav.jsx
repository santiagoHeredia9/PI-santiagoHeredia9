/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <header className={style.navbar}>
      {/* logo */}
      <nav className={style.navigation}>
        <Link className={style.text} to="/home">
          <span className={style.home}>HOME</span>
        </Link>
        <Link className={style.text} to="/about">
          <span className={style.about}>ABOUT</span>
        </Link>

        <Link className={style.text} to="/favorites">
          <span className={style.fav}>FAVORITES</span>
        </Link>

        <Link className={style.text} to="/">
          <span className={style.logOut}>LOG OUT</span>
        </Link>
      </nav>

      <SearchBar className={style.searchBar} onSearch={onSearch} />
    </header>
  );
};

export default Nav;
