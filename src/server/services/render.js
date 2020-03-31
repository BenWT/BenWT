import React from 'react'
import ReactDOM from 'react-dom/server'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { CookiesProvider } from 'react-cookie'
import { Helmet } from 'react-helmet'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { renderToStringWithData } from '@apollo/react-ssr'
import { StaticRouter } from 'react-router'

import { link } from '../../graphql'

import Html from '../../universal/containers/Html'
import Root from '../../universal/containers/Root'

export default ({ req, res, context, bundle, cache }) => {
    const sheets = new SheetsRegistry()
    const client = new ApolloClient({
        link: link({ mode: 'server' }),
        cache,
        ssrMode: true,
        ssrForceFetchDelay: 100
    })

    const component = (
        <ApolloProvider {...{ client }}>
            <CookiesProvider cookies={req.universalCookies}>
                <StaticRouter location={req.url} context={context}>
                    <JssProvider registry={sheets}>
                        <Root />
                    </JssProvider>
                </StaticRouter>
            </CookiesProvider>
        </ApolloProvider>
    )

    renderToStringWithData(component).then(content => {
        let state = client.extract(),
            helmet = Helmet.renderStatic()

        if (context.url !== undefined && content.url !== req.url) {
            res.redirect(context.url)
        } else {
            res.status(context.status ? context.status : 200)
            res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(
                <Html {...{ bundle, content, state, sheets, helmet }} />
            )}`)
            res.end()
        }
    }).catch(e => {
        res.status(500)
        if (process.env.NODE_ENV === 'production') {
            res.send('internal server error')
        } else {
            res.send(`
                <!doctype html>
                    <head></head>
                    <body>
                        <h3>Error: </h3>
                        <pre>${ JSON.stringify(e, false, 4) }</pre>
                    </body>
                </html>
            `)
        }

        res.end()
    })
}
