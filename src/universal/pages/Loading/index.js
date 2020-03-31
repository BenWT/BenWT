import React from 'react'
import is from 'react-jss'
import cx from 'classnames'

import style from './style'

const Loading = ({
    classes,
    ...props,
}) => (
    <div className={cx(classes.loadingScreen)}>...</div>
)

export default is(style)(Loading)