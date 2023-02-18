import React, { useState } from 'react'
import styles from '../layouts/navbar.module.css'
import logo from '../image/logo.jpeg'
import NavList from './NavList'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = event => {
    event.preventDefault();
    setShowMenu(current => !current);
  };

  const menuClasses = `${styles.menuDropdown} ${showMenu ? styles.visible : styles.invisible}`;

  return (
    <section>
      <div className={styles.containerMenuNav}>
        <nav className={styles.navbar}>
          <img src={logo} alt="logo da empresa"></img>
          <NavList />
          <AiOutlineMenu onClick={handleClick} className={styles.menuIcon} />
        </nav>
      </div>
      <div className={menuClasses}>
        <NavList />
      </div>
    </section>
  );
}