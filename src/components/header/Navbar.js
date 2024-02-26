import React, { useState, useEffect } from "react";
import './Header.css'
import { Link } from "react-router-dom";


export default function Navbar() {

    const firsOptionByHours = new Date().getHours() < 12 ? "firstOrder" : "";

    // navbar Sticky
    const [scrolled, setScrolled] = useState(false);

    //obtiene el lugar del Scroll
    const handleScroll = () => {
        window.scrollY > 150 ? setScrolled(true) : setScrolled(false);
    }

    //ejecuta cada vez que se mueve el scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled')
    }


    return (
        <nav className={navbarClasses.join(" ")} id="navbar">
            <Link to="/">Platos Combinados</Link>
            <Link to="/weekend">Fin de Semana</Link>
            <Link to="/entrees">Comida Rápida</Link>
            <Link to="/rations">Porciones</Link>
            <Link to="/drinks">Bebidas</Link>
            <Link className={firsOptionByHours} to="/breakfast">Desayunos</Link>
        </nav>
    )
}
