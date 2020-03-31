import React from 'react'
import cx from 'classnames'
import is from 'react-jss'

import style from './style'

// TODO: Build ScaleMomentum component
const ScaleMomentum = ({
    classes,
    content
}) => (
    <div className={cx(classes.panel)}>
        <div className={cx('container')}>
            <div className={cx('row')}>
                <h3>Scale and Momentum</h3>
            </div>
        </div>
    </div>
)

export default is(style)(ScaleMomentum)