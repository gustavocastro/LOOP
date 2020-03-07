import React, { Component } from 'react'
import { Fade } from 'react-reveal'
import { Menu } from '@material-ui/icons'
import { Close } from '@material-ui/icons'

import './Toolbar.scss'
import logoImg from '../../assets/images/Logo.png'

class Toolbar extends Component {
    state = {
        open: false
    }

    handleMenuToggle = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        return (
            <div className="Toolbar">
                <nav className={this.state.open ? 'openNav' : 'closeNav'}>
                    <Fade>
                    <ul>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Crew</a></li>
                        <li><a href="#">Kontakt</a></li>
                    </ul>
                    </Fade>
                </nav>
                <div className="menu">
                    {this.state.open ? (
                        <Close 
                            onClick={this.handleMenuToggle}
                            style={{color: '#fff'}} />
                    ) : (
                        <Menu onClick={this.handleMenuToggle} />
                    )}
                </div>
                <div className="brand">
                    <img src={logoImg} alt="Brand Logo" />
                </div>
            </div>
        )
    }
}

export default Toolbar
