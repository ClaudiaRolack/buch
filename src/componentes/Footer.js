import React from "react"
import { NavLink } from 'react-router-dom';
import logoFooter from "../images/logoFooter.png"

export const Footer = () => {
    return (
        <div>
            <footer>
                
                <div className='footer__logo'>
                    <div>
                        <NavLink className="footerlink" to='/'><img src={logoFooter} alt='Logo Footer' /></NavLink>
                    </div>
                    <div>
                        <p className='footer__p'>Copyright - Claudia Rolack</p>
                    </div>
                </div>
                
            </footer>
        </div>
    )
}