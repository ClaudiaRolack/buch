import logoFooter from "../images/logoFooter.png"

export const Footer = () => {
    return (
        <div>
            <footer>
                
                <div className='footer__logo'>
                    <div>
                        <a className='footerlink' href='#'><img src={logoFooter} alt='Logo Footer' /></a>
                    </div>
                    <div>
                        <p className='footer__p'>Copyright - Claudia Rolack</p>
                    </div>
                </div>
                
            </footer>
        </div>
    )
}