import React from 'react'

import { gtmId } from '../../config'

const Html = ({ bundle, state, content, sheets, helmet }) => (
    <html>
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="google-site-verification" content="kAa0RZDOvV76yyND7QdWjYYfO2sY2LD8HxWuGbxzO0I" />

            { helmet.title.toComponent() }
            { helmet.meta.toComponent() }
            { helmet.link.toComponent() }

            <link rel="shortcut icon" sizes="76x76" type="image/x-icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css?family=Merriweather:400,700|Open+Sans:300,400,600" rel="stylesheet" />

            <style type="text/css" id="server-side-styles">
                { sheets.toString() }
            </style>
        </head>
        <body>
            <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
            <script dangerouslySetInnerHTML={{
            __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`,
            }} />
            { bundle.map((src, i) => (
                <script type="application/javascript" src={src} key={i} />    
            ))}
        </body>
    </html>
)

export default Html