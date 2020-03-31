import React from 'react'

import Meta from '../../components/Meta'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FlexibleFields from '../../components/FlexibleFields'

const Page = ({
    flexibleContent: {
        header = null,
        content = null,
        footer = null,
    },
    ...props,
}) => [
    <Meta {...{ key: 'meta', ...props }} />,
    <Header {...{ key: 'header', ...header, ...props }} />,
    <FlexibleFields {...{ key: 'content', content, ...props }} />,
    <Footer {...{ key: 'footer', ...footer, ...props }} />,
]

export default Page