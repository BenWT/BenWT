import React, { useState, useEffect} from 'react'

import Default from './components/Default'
import Featured from './components/Featured'
import Latest from './components/Latest'
import ImageRows from './components/ImageRows'

const PostArchive = ({
    content: {
        type,
        ...content,
    },
    ...props,
}) => {
    switch (type) {
        case 'default': return <Default {...{ content, ...props }} />
        case 'featured': return <Featured {...{ content, ...props }} />
        case 'latest': return <Latest {...{ content, ...props }} />
        case 'image_rows': return <ImageRows {...{ content, ...props }} />
        default: return <div>PostArchive: { type || 'false' }</div>
    }
}

export default PostArchive