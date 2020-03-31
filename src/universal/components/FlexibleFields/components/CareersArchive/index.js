import React, { useState, useEffect} from 'react'

import Default from './components/Default'
import Featured from './components/Featured'
import Related from './components/Related'

const CareersArchive = ({
    content: {
        type,
        ...content,
    },
    ...props,
}) => {
    switch (type) {
        case 'default': return <Default {...{ content, ...props }} />
        case 'featured': return <Featured {...{ content, ...props }} />
        case 'related': return <Related {...{ content, ...props }} />
        default: return <div>CareersArchive: { type || 'false' }</div>
    }
}

export default CareersArchive