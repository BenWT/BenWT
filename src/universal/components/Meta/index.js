import React from 'react'
import Helmet from 'react-helmet'

const Meta = ({
    seo
}) => seo ? (
    <Helmet>
        <title>{ seo.title }</title>
    </Helmet>
) : null

export default Meta