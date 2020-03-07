import React from 'react'
import Person from './Person/Person'
import teamMembers from '../../teamJSON'

import './Team.scss'

const Team = () => {
    return (
        <div className="Team" id="crew">
            <div className="headers">
                <h2>Unser Team</h2>
                <h4>Subtitles Von Unserem Team</h4>
            </div>

            <div className="people">
                {teamMembers.map(member => (
                    <Person
                        key={member.id}
                        id={member.id}
                        name={member.name}
                        picture={member.picture}
                        about={member.about} />
                ))}
            </div>
        </div>
    )
}

export default Team
