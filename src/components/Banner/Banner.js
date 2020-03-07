import React from 'react'
import { Fade } from 'react-reveal'

import './Banner.scss'

const Banner = () => {
    return (
        <div className="Banner">
            <div className="content">
                <Fade>
                    <h1>Lorem Ipsum Dolor Amet</h1>
                    <h2>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. 
                        Ut molestie semper velit eget imperdiet.
                    </h2>
                </Fade>
            </div>
            <div className="blank"></div>
        </div>
    )
}

export default Banner
