import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../../../graphql'
import Panel from '../../../../../Panel'

import style from './style'

// TODO: Build Slider GamesArchive component
const Slider = ({
    classes,
    content,
}) => (
    <Panel className={classes.panel}>
        <h3>Slider Games Archive</h3>
        <pre>{ JSON.stringify(content.sliderContent, false, 4) }</pre>
    </Panel>
)

export default is(style)(Slider)