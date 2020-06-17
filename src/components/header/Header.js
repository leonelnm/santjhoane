import React from "react";
import './Header.css'
import logo from './logo.jpg'
import Navbar from "./Navbar";

export default function Header(){

    return (
        <header className="fullbackgroundcontent">
            <div className="row header">
                <img src={logo} alt="logo" className="logo"></img>
            </div>
            <Navbar></Navbar>
        </header>
    )
}
