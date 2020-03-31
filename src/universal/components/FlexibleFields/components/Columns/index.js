import React from 'react'
import cx from 'classnames'
import is from 'react-jss'

import style from './style'

// TODO: Build Columns component
const Columns = ({
    content
}) => content.columns.length > 0 ? (
    <ul>
        { content.columns.map((r, i) => (
            <li key={i}>{ r.title }</li>
        ))}
    </ul>
) : null

export default is(style)(Columns)