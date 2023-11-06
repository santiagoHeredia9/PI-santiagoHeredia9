/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import styles from "./Nav.module.css"

const Nav = ({ onSearch }) => {
  return (
    <div className={styles.navbar}>
       <Link to="/home">
        <button className={styles.navitem}>Home</button>
      </Link>
      <Link to="/about">
        <button>About</button>
      </Link>
     
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
