import React from 'react'
import cx from 'classnames'
import is from 'react-jss'

import style from './style'

// TODO: Build OurProprietaryTechnology component
const OurProprietaryTechnology = ({
    content
}) => (
    <div className={cx('container')}>
        <h3>Our Proprietary Technology</h3>
    </div>
)

export default is(style)(OurProprietaryTechnology)