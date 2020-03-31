import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { queries } from '../../graphql'

const OptionsManager = Component => ({
    ...props,
}) => {
    const { loading, error, data } = useQuery(queries.options.GET_OPTIONS)

    return !loading && !error ? <Component {...{
        options: data && data.tiltingPointSettings ? data.tiltingPointSettings.optionsPanel : null,
        ...props
    }} /> : null
}

export default OptionsManager