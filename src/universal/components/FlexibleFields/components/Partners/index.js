import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../graphql'
import Panel from '../../../Panel'

import style from './style'

// TODO: Build Partners component
const Partners = ({
    content
}) => {
    const { loading, error, data } = useQuery(queries.options.GET_PARTNERS)
    const [ partners, setPartners ] = useState([])

    useEffect(() => {
        setPartners(data && data.tiltingPointSettings.optionsPanel.partners
            ? [ ...data.tiltingPointSettings.optionsPanel.partners ]
            : []
        )
    }, [data])

    return (
        <Panel>
            <h3>Partners</h3>
            { partners.length > 0 && (
                <pre>
                    { JSON.stringify(partners, false, 4) }
                </pre>
            )}
        </Panel>
    )
}

export default is(style)(Partners)