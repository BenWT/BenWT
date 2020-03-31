import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../../../graphql'

import style from './style'

// TODO: Build Featured GamesArchive component
const Featured = ({
    content,
}) => (
    <div className={cx('container')}>
        <h3>Featured Games Archive</h3>
        {/* <pre>{ JSON.stringify(content, false, 4) }</pre> */}
    </div>
)

export default is(style)(Featured)