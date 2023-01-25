import React, { useState } from 'react'
import styles from '../layouts/navbar.module.css'
import logo from '../image/logo.jpeg'
import NavList from './NavList'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
    const [shownav, setShowNav] = useState(false)
    const handleClick = event => {
        // 👇️ toggle shown state
        setShowNav(current => !current);
    };

    return (
        <section>
            <div className={styles.containermenunav}>
                <nav className={styles.navbar}>
                    <img src={logo} alt="logo da empresa"></img>
                    <NavList />
                </nav>
            </div>
            <div className={styles.invisivel}>
                <AiOutlineMenu
                    onClick={handleClick} />
                {shownav && (
                    <div className={styles.containermenunav}>
                    </div>
                )}
                <div className={styles.menudropshownav}>
                    {shownav && <NavList />} </div>
            </div>
        </section >
    )
}
