import React, { useState, Component, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks'

import Page from '../../pages/Page'
import Loading from '../../pages/Loading'
import Error from '../Error'

import { queries } from '../../../graphql'

const GetPageFromTemplate = (data, props) => {
    switch (data.template.templateName) {
        default: return <Page {...{ ...data, ...props }} />
    }
}

const PageContainer = ({
    uri,
    type,
    ...props,
}) => {
    const [ variables, setVariables ] = useState({ uri })
    const { loading, error, data } = useQuery(queries.GET_SINGLE_POST(type), { variables })
    
    useEffect(() => {
        setVariables({ uri })
    }, [uri])
    
    if (loading) return <Loading {...{ ...props }} />
    
    return data && data[type]
        ? GetPageFromTemplate(data[type], {...{ ...props }})
        : <Error />
}

export default PageContainer