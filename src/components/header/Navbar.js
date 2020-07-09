import React from "react";
import './Header.css'
import { Link } from "react-router-dom";


export default function Navbar() {

    const firsOptionByHours = new Date().getHours() < 12 ? "firstOrder" : "";

    return (
        <nav className="navbar" id="navbar">
            <Link to="/dishes">Platos Combinados</Link>
            <Link to="/weekend">Fin de Semana</Link>
            <Link to="/entrees">Comida Rápida</Link>
            <Link to="/rations">Porciones</Link>
            <Link to="/drinks">Bebidas</Link>
            <Link className={firsOptionByHours} to="/breakfast">Desayunos</Link>
        </nav>
    )
}
