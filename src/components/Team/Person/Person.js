import React, { Component } from 'react'

import './Person.scss'

class Person extends Component {
    state = {
        detailsStyle: {}
    }

    /**
     * Handles each person hover by deciding each way to show their details.
     * If they're last of the row, their info will slide to the left.
     * If they're not the last one, it slides to the right.
     * If they're the only one in the row, the infor overrides their cards.
     * @param {event} - The div which is getting the mouse enter.
     */
    handleMouseEnter = event => {
        const rightOffset = Math.round(event.target.getBoundingClientRect().right)
        const divSize = event.target.getBoundingClientRect().width

        let style = {
            position: 'absolute',
            marginRight: 0,
            marginLeft: 0,
            zIndex: 1
        }
        console.log(divSize)
        if (window.innerWidth === divSize + 15)
            style['marginRight'] = divSize + 'px'
        else if (rightOffset + 15 === window.innerWidth || rightOffset > 1400) 
            style['marginLeft'] = (divSize * -1) + 'px'
        else 
            style['marginLeft'] = divSize + 'px'

        this.setState({ detailsStyle: style })
    }

    /**
     * Handles the person card when the user stops the specific hover.
     * Sets the position to relative again in order to hide the details.
     */
    handleMouseLeave = () => {
        this.setState({ detailsStyle: { ...this.detailsStyle, position: 'relative' } })
    }

    render() {
        return (
            <div 
                className="Person" 
                onMouseEnter={event => this.handleMouseEnter(event)}
                onMouseLeave={this.handleMouseLeave} >
                    <div className="details" style={this.state.detailsStyle}>
                        <h3>{this.props.name}</h3>
                        <p>{this.props.about}</p>
                    </div>
                    <img src={this.props.picture} alt={this.props.name} />
            </div>
        )
    }
}

export default Person
