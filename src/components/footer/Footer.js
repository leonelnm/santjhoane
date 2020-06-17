import React from "react";
import "./Footer.css";
import facebook from "./ico-facebook.png";
import whatsapp from "./ico-whatsapp.png";
import location from "./ico-marker.png";

export default function Footer(props) {

    const year = new Date().getFullYear();

    return (
        <footer className="fullbackgroundcontent">
            <div>
                <h2>Visítanos:</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12321.730188029971!2d-0.3752431!3d39.4595559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd60498e4a933cf3%3A0x77a46b43dd0724ba!2sRestaurante%20Sant%20Jhoan&#39;e!5e0!3m2!1ses!2ses!4v1592411664904!5m2!1ses!2ses"
                    className="map"
                    frameBorder="0"
                    allowFullScreen=""
                    aria-hidden="false"
                    title="map-sant-jhoane"
                ></iframe>

                <div className="row">
                    <img src={location} alt="icon-location" className="icons"></img>
                    <p>C/ Zapadores 45, Valencia, Spain</p>
                </div>
            </div>

            <div className="row contact">
                <h2>Contáctanos:</h2>
                <a href="https://www.facebook.com/profile.php?id=100005627206448">
                    <img className="icons" src={facebook} alt="icon-facebook"></img>
                </a>
                <a href="https://wa.me/34680326354">
                    <img className="icons" src={whatsapp} alt="icon-whatsapp"></img>
                </a>
            </div>

            <p className="copyright">&copy; {year} | Restaurante Sant Jhoane</p>
        </footer>
    );
}
