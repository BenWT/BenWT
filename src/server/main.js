import 'isomorphic-fetch'
import express from 'express'
import http from 'http'

import routes from './routes'
import middleware from './middleware'
import { render } from './services'

import { cache } from '../graphql'

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const { bundle } = middleware(app)
const serverCache = cache()

routes(app)

app.get('*', (req, res) => {
    render({ req, res, bundle, context: {}, cache: serverCache })
})

export default server.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}/`)
})