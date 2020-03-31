import React from 'react'
import { Link } from 'react-router-dom'
import is from 'react-jss'
import cx from 'classnames'

import style from './style'
import Panel from '../Panel'

const image = 'https://images.unsplash.com/photo-1543083115-638c32cd3d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80'

const Header = ({
    classes,
    navOpen,
    setNavOpen,
}) => (
    <Panel {...{ }}>
        <span
            className={classes.menu}
            onClick={ e => setNavOpen(!navOpen) }
        >Menu</span>
    </Panel>
)

export default is(style)(Header)