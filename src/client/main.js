import React from 'react'
import { hydrate } from 'react-dom'
import { Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'
import { ApolloProvider } from "@apollo/react-hooks"
import { ApolloClient } from 'apollo-boost'

import history from '../universal/history'
import Root from '../universal/containers/Root'

import { link, cache } from '../graphql'

const start = () => {
    const client = new ApolloClient({
        link: link({ mode: 'client' }),
        cache: cache().restore(window.__APOLLO_STATE__),
    })

    hydrate(
        <ApolloProvider {...{ client }}>
            <CookiesProvider>
                <Router {...{ history }}>
                    <Root />
                </Router>
            </CookiesProvider>
        </ApolloProvider>,
        document.getElementById('content'),
        () => {
            const ssStyles = document.getElementById('server-side-styles')
            ssStyles.parentNode.removeChild(ssStyles)
        }
    )
}

start()
