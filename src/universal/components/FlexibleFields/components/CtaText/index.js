import React from 'react'
import cx from 'classnames'
import is from 'react-jss'

import Panel from '../../../Panel'

import style from './style'

// TODO: Build CtaText component
const CtaText = ({
    classes,
    content,
}) => (
    <Panel>
        <div className={classes.column}>
            <h2>{ content.title }</h2>
            <div dangerouslySetInnerHTML={{ __html: content.content }}></div>
        </div>
        {/* <div className={classes.backgroundText}>{ content.backgroundText }</div> */}
    </Panel>
)

export default is(style)(CtaText)