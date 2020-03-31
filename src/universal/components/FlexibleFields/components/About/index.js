import React from 'react'

import ScaleMomentum from './components/ScaleMomentum'
import PowerUpTeamUp from './components/PowerUpTeamUp'
import OurProprietaryTechnology from './components/OurProprietaryTechnology'

const About = ({
    content: {
        type,
        ...content,
    },
    ...props,
}) => {
    switch (type) {
        case 'scale-momentum': return <ScaleMomentum {...{ content, ...props }} />
        case 'power-up-team-up': return <PowerUpTeamUp {...{ content, ...props }} />
        case 'our-proprietary-technology': return <OurProprietaryTechnology {...{ content, ...props }} />
        default: return null
    }
}

export default About