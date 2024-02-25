/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../Searchbar/SearchBar";
import style from "./Nav.module.css";
import { useState } from "react";

const Nav = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={style.navbar}>
      <button className={style.openMenu} onClick={openMenu}>
        <img src="/justify.svg" alt="menu" />
      </button>
      <nav
        className={
          isOpen ? `${style.navigation} ${style.visible}` : style.navigation
        }
      >
        <button className={style.closeMenu} onClick={closeMenu}>
          x
        </button>
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
