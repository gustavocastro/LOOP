import React from 'react'
import { Facebook, Twitter } from '@material-ui/icons'

import './Footer.scss'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <div className="Footer">
            <div className="copyright">
                {year}. Segel-Team. Alle Rechte vorbehalten.
            </div>

            <div className="social-media">
                <Twitter />
                <Facebook />
            </div>

            <div className="links">
                <ul>
                    <li><a href="#">Impressum</a></li>
                    <li><a href="#">Datenschutz</a></li>
                    <li><a href="#">Rechtliches</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
