/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <header className={style.navbar}>
      {/* logo */}
      <nav className={style.navigation}>
        <Link to="/home">
          <button className={style.home}>Home</button>
        </Link>
        <Link to="/about">
          <button className={style.about}>About</button>
        </Link>

        <Link to="/favorites">
          <button className={style.fav}>Favorites</button>
        </Link>

        <Link to="/">
          <button className={style.logOut}>Log out</button>
        </Link>
      </nav>

      <SearchBar className={style.searchBar} onSearch={onSearch} />
    </header>
  );
};

export default Nav;
