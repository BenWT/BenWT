import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../../../graphql'
import Panel from '../../../../../Panel'

import style from './style'

// TODO: Build Default Contact component
const Default = ({
    classes,
    content,
}) => (
    <Panel className={classes.panel}>
        <h3>Default Contact</h3>
        {/* <pre>{ JSON.stringify(content, false, 4) }</pre> */}
    </Panel>
)

export default is(style)(Default)