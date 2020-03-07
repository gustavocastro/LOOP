import React from 'react'
import { Fade } from 'react-reveal'

import './Contact.scss'
import logoImg2 from '../../assets/images/logos/logo-2.png'
import logoImg3 from '../../assets/images/logos/logo-3.png'
import logoImg4 from '../../assets/images/logos/logo-4.png'
import logoImg6 from '../../assets/images/logos/logo-6.png'

const Contact = () => {
    return (
        <div className="Contact">
            <div className="message">
                <Fade left>
                    <h3>Kontakt</h3>

                    <input type="text" />
                    <input type="email" />
                    <textarea rows="5" />

                    <button type="button">Absenden</button>
                </Fade>
            </div>

            <div className="brands">
                <Fade right>
                    <div className="logo-gallery">
                        <img src={logoImg2} alt="Logo" />
                        <img src={logoImg3} alt="Logo" />
                        <img src={logoImg4} alt="Logo" />
                        <img src={logoImg6} alt="Logo" />
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Contact
