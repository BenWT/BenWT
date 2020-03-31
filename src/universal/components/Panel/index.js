import React from 'react'
import { Link } from 'react-router-dom'
import is from 'react-jss'
import cx from 'classnames'

import style from './style'

const Panel = ({
    classes,
    image = false,
    classNames = {},
    onMouseMove = () => ({}),
    children,
}) => (
    <div className={cx(classes.panel, classNames.panel)} style={{ backgroundImage: image ? `url(${image})` : undefined }} onMouseMove={onMouseMove}>
        <div className={cx(classes.panelInner, classNames.panelInner)}>
            { children }
        </div>
    </div>
)

export default is(style)(Panel)