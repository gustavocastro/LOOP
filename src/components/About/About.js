import React from 'react'
import { Fade } from 'react-reveal'

import './About.scss'
import checkpointsImg from '../../assets/images/checkpoints2.png'

const About = () => {
    return (
        <div className="About" id="about">
            <div className="headers">
                <h2>About us</h2>
                <h4>Subtitle Lorem Ipsum</h4>
            </div>

            <div className="content">
                <div className="side">
                    <Fade>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris laoreet ligula neque, sit amet aliquam est dignissim id. 
                            Nullam imperdiet sapien ac quam dignissim dignissim. 
                            Aenean laoreet velit ac arcu luctus, eget maximus erat tempor. 
                            Curabitur sed dignissim enim. Donec dui sapien, blandit ac sagittis ac, 
                            rutrum nec metus. 
                        </p>
                        <p>
                            Quisque dignissim nibh ornare tortor sagittis tempor. 
                            Proin sagittis pharetra nulla, non varius velit. 
                            Aliquam varius semper ipsum quis bibendum. 
                            Sed in commodo arcu. Phasellus aliquam imperdiet eleifend. 
                            Nunc et convallis nisl. Praesent eu erat viverra, auctor ante ut, 
                            ullamcorper ligula. Morbi fringilla egestas mi, in 
                            ultricies leo egestas vitae. Proin sagittis nibh ac facilisis 
                            tempor. Donec congue faucibus scelerisque. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Quisque suscipit elit ex, vel facilisis 
                            nibh ullamcorper et. Cras id tincidunt erat.
                        </p>
                    </Fade>
                </div>

                <div className="side">
                    <Fade>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Mauris laoreet ligula neque, sit amet aliquam est dignissim id. 
                            Nullam imperdiet sapien ac quam dignissim dignissim. 
                            Aenean laoreet velit ac arcu luctus, eget maximus erat tempor. 
                            Curabitur sed dignissim enim. Donec dui sapien, blandit ac sagittis ac, 
                            rutrum nec metus. 
                        </p>
                        <p>
                            Quisque dignissim nibh ornare tortor sagittis tempor. 
                            Proin sagittis pharetra nulla, non varius velit. 
                            Aliquam varius semper ipsum quis bibendum. 
                            Sed in commodo arcu. Phasellus aliquam imperdiet eleifend. 
                            Nunc et convallis nisl. Praesent eu erat viverra, auctor ante ut, 
                            ullamcorper ligula. Morbi fringilla egestas mi, in 
                            ultricies leo egestas vitae. Proin sagittis nibh ac facilisis 
                            tempor. Donec congue faucibus scelerisque. Lorem ipsum dolor sit amet, 
                            consectetur adipiscing elit. Quisque suscipit elit ex, vel facilisis 
                            nibh ullamcorper et. Cras id tincidunt erat.
                        </p>
                    </Fade>
                </div>
            </div>

            <div className="checkpoints">
                <img src={checkpointsImg} alt="checkpoints" />
            </div>
        </div>
    )
}

export default About
