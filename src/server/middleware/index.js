import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser' 
import proxy from 'http-proxy-middleware'
import path from 'path'
import forceDomain from 'forcedomain'
import cookiesMiddleware from 'universal-cookie-express'
// import manifest from 'express-manifest'
import manifestHelpers, { getJavascripts } from 'express-manifest-helpers'

export default (app) => {
    // app.use(forceDomain({ hostname: process.env.HOSTNAME }))
    
    app.use('/', express.static('public'))
    
    if (process.env.NODE_ENV === 'production') {
        app.use('/', express.static('dist'))
        app.use(manifestHelpers({ manifestPath: path.join(process.cwd(), 'dist') + '/asset-manifest.json' }))

        // app.use(manifest({
        //     manifest: path.join(process.cwd(), 'dist') + '/asset-manifest.json',
        //     prepend: path.join(process.cwd(), 'dist'),
        //     reqPathFind: /^(\/?)/,
        //     reqPathReplace: '',
        //     debug: true
        // }))
    } else {
        app.use('/dist', proxy({ target: 'http://localhost:3002' }));
    }
    
    app.use(bodyParser.json())
    app.use(cookieParser())
    app.use(cookiesMiddleware())

    app.get('/serviceWorker.min.js', (req, res) => {
        res.header('Content-Type', 'application/javascript; charset=utf-8').end('')
    })

    return {
        bundle: process.env.NODE_ENV === 'production' 
            ? getJavascripts() 
            : [ 'http://localhost:3002/dist/main.js', 'http://localhost:3002/dist/runtime~main.js' ]
    }
}