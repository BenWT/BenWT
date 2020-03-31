import { gql } from 'apollo-boost'

const GET_LATEST = gql`
query ($first:Int) {
    posts (first: $first, where: {
        orderby: {
            field: DATE,
            order: DESC,
        }
    }) {
        edges {
            node {
                title, uri, date
            }
        }
    }
}`

const GET_PAGE = gql`
query ($first:Int, $after:String) {
    posts (first: $first, after: $after, where: {
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
    GET_LATEST,
    GET_PAGE,
}