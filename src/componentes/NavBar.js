import {useEffect, useState} from 'react';
import { CartWidget } from "./CartWidget"
import logoTrans from "../images/logoTrans.png"
import {arrow} from "../images/arrow.webp"



export const NavBar = () => {


    return (

        <div className="contenedor">
            <header className="contenedor__nav">
                <div className="nav__marca">
                    <a className="nav__link" href="#"><img className="nav__logo" src={logoTrans} alt="Logo" /></a>
                </div>
                <div className="nav">
                    <ul className="list">

                        <li className="list__item">
                            <a className="nav__link" href="#">Inicio</a>
                        </li>

                        <li className="list__item list__item--click">
                           
                            <div className="list__button list__button--click">

                                <a className="nav__link" href="#">Categorías</a>

                                <ul className="list__show">

                                    <li className="list__inside">
                                    <a href="#" className="nav__link nav__link--inside">Agendas y Calendarios</a>
                                    </li>

                                    <li className="list__inside">
                                        <a href="#" className="nav__link nav__link--inside">Ciencias y Naturaleza</a>
                                    </li>

                                    <li className="list__inside">
                                    <a href="#" className="nav__link nav__link--inside">Ficción Juvenil</a>
                                    </li>

                                    <li className="list__inside">
                                    <a href="#" className="nav__link nav__link--inside">Juegos de mesa</a>
                                    </li>

                                    <li className="list__inside">
                                    <a href="#" className="nav__link nav__link--inside">Ocio y Hobbies</a>
                                    </li>

                                    <li className="list__inside">
                                    <a href="#" className="nav__link nav__link--inside">Todo</a>
                                    </li>

                                </ul>
                            </div>
                        </li>
                        <li className="list__item">
                            <a className="nav__link" href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="contenedor__carrito">
                    <CartWidget />
                </div>

            </header>
        </div>
    )
}