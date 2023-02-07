import React from 'react'
import { Link } from 'react-router-dom'

export default function NavList() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/orcamento">Faça seu orçamento</Link>
          </li>
          <li>
            <Link to="/quemsomos">Quem Somos</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/trabalheconosco">Trabalhe Conosco</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
