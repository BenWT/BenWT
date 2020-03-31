import { HttpLink, InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-boost'

import queries from './queries'

const link = ({ mode = 'server' }) => new HttpLink({
    uri: `${process.env.WP_SITE}/wp/graphql`,
    fetchOptions: mode === 'server' ? {
        mode: 'no-cors',
    } : undefined,
})

const cache = () => new InMemoryCache({ fragmentMatcher:
    new IntrospectionFragmentMatcher({
        introspectionQueryResultData: {
            __schema: { types: [] },
        }
    })
})

export {
    queries,
    link,
    cache,
}