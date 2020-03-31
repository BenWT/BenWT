import React, { useState, useEffect} from 'react'

import Default from './components/Default'
import Small from './components/Small'
import Full from './components/Full'
import Newsletter from './components/Newsletter'

const Contact = ({
    content: {
        type,
        ...content,
    },
    ...props,
}) => {
    switch (type) {
        case 'default': return <Default {...{ content, ...props }} />
        case 'small': return <Small {...{ content, ...props }} />
        case 'full': return <Full {...{ content, ...props }} />
        case 'newsletter': return <Newsletter {...{ content, ...props }} />
        default: return <div>Contact: { type || 'false' }</div>
    }
}

export default Contact