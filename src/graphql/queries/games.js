import { gql } from 'apollo-boost'

const GET_ALL = gql`{
    games {
        nodes {
            databaseId,
            uri,
            title,
            seo {
                title,
            }
        }
    }
}`;

const GET_PAGE = gql`
query ($first:Int, $after:String) {
    games (first: $first, after: $after, where: {
        orderby: {
            field: DATE,
            order: ASC,
        }
    }) {
        pageInfo {
            hasNextPage,
            endCursor,
        }
        edges {
            node {
                title, uri
            }
        }
    }
}`

export default {
    GET_ALL,
    GET_PAGE,
}