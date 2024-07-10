import React from "react";
import MenuLink from "./MenuLink";
import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";


function NavBar() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <img src={logo} alt="" />
        <div className={styles.rota}>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/newvideo">Novo Vídeo</MenuLink>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
