import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../../../graphql'

import style from './style'

// TODO: Build Full Contact component
const Full = ({
    content,
}) => (
    <div className={cx('container')}>
        <h3>Full Contact</h3>
        {/* <pre>{ JSON.stringify(content, false, 4) }</pre> */}
    </div>
)

export default is(style)(Full)