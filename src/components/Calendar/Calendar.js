import React from 'react'
import { EventNote, Today, Business } from '@material-ui/icons'
import { Fade } from 'react-reveal'

import './Calendar.scss'
import sailorsImg from '../../assets/images/sailors-cropped.jpg'

const Calendar = () => {
    return (
        <div className="Calendar" id="calendar">
            <div className="row">
                <div className="news">
                    <div className="news-content">
                        <Fade left>
                            <span><Today /> 23 Feb 2020</span>
                            <h3>News Headline</h3>
                            <p>Lorem ipsum dolor sit amet, elit at a consectetur adipiscing.</p>
                        </Fade>
                    </div>
                </div>
                <div className="news">
                    <div className="news-content">
                        <Fade left>
                            <span><Today /> 12 Mar 2020</span>
                            <h3>News Headline</h3>
                            <p>Lorem ipsum dolor sit amet, elit at a consectetur adipiscing.</p>
                        </Fade>
                    </div>
                </div>
                <div className="location">
                    <div className="location-content">
                        <Fade left>
                            <span><Today /> 08 Apr</span>
                            <h3>Headline Beitrag 2020</h3>
                            <h4>Subtitle Lorem</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="banner"></div>
                <div className="content">
                    <div className="location">
                    <div className="location-content">
                        <Fade left>
                            <span><Today /> 12 Apr</span>
                            <h3>Headline Beitrag 2020</h3>
                            <h4>Lorem Ipsum Dolor</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Fade>
                    </div>
                    </div>
                    <div className="gallery">
                        <div className="image"></div>
                        <div className="image"></div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="events">
                    <h3>
                        <Business /> <br />
                        News+ <br/> Builder
                    </h3>
                    <img src={sailorsImg} alt="Sailors" />
                </div>

                <div className="events">
                    <h3>
                        <EventNote /> <br />
                        Segelteam <br/> Termine 2014
                    </h3>
                    <img src={sailorsImg} alt="Sailors" />
                </div>
            </div>
        </div>
    )
}

export default Calendar
