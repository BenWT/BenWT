import React, { useState } from 'react'

const StateManager = Component => ({
    ...props,
}) => {
    const [ navOpen, setNavOpen ] = useState(true)

    return <Component {...{
        navOpen,
        setNavOpen,
        ...props
    }} />
}

export default StateManager