import React from 'react'
import { Link } from 'react-router-dom'
import is from 'react-jss'
import cx from 'classnames'

import style from './style'

const Footer = ({
    classes,
}) => (
    <div className={ cx('container', classes.wrapper) }>
        <span></span>
        <span>Tilting Point {'\u00A9'} 2020. All Rights Reserved.</span>
        <span></span>
    </div>
)

export default is(style)(Footer)