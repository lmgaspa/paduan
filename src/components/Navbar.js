import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../layouts/navbar.module.css'
import logo from '../image/logo.jpeg'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <img className={styles.logo} src={logo} alt="logo da empresa"></img>
            <ul className={styles.list}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/servicos">Serviços</Link>
                </li>
                <li>
                    <Link to="/orcamento">Faça o seu orçamento</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    <Link to="/quemsomos">Quem Somos</Link>
                </li>
                <li>
                    <Link to="/trabalhe">Trabalhe Conosco</Link>
                </li>
            </ul>
            <div className={styles.invisivel}>
                <AiOutlineMenu />
            </div>
        </nav>
    )
}
