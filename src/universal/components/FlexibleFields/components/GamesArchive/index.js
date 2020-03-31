import React, { useState, useEffect} from 'react'

import Default from './components/Default'
import Featured from './components/Featured'
import Slider from './components/Slider'

const GamesArchive = ({
    content: {
        type,
        ...content,
    },
    ...props,
}) => {
    switch (type) {
        case 'default': return <Default {...{ content, ...props }} />
        case 'featured': return <Featured {...{ content, ...props }} />
        case 'slider': return <Slider {...{ content, ...props }} />
        default: return <div>GamesArchive: { type || 'false' }</div>
    }
}

export default GamesArchive