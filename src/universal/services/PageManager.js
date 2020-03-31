import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { queries } from '../../graphql'

const OptionsManager = Component => ({
    ...props,
}) => {
    const { loading, error, data } = useQuery(queries.GET_ALL_PAGES)

    // TODO: LOADING

    return <Component {...{
        pages: data && data.pages ? data.pages.nodes : null,
        ...props
    }} />
}

export default OptionsManager