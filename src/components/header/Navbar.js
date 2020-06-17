import React from "react";
import './Header.css'


export default function Navbar() {

    return (
        <nav className="navbar" id="navbar">
            <a href="#home">Lunes a Viernes</a>
            <a href="#weekend">Fin de Semana</a>
            <a href="#ration">Porciones</a>
        </nav>
    )
}
