import React from 'react'
import cx from 'classnames'
import is from 'react-jss'

import style from './style'

// TODO: Build Testimonals component
const Testimonals = ({
    content
}) => (
    <div className={cx('container')}>
        <h3>Testimonals</h3>
        <pre>{ JSON.stringify(content, false, 4) }</pre>
    </div>
)

export default is(style)(Testimonals)