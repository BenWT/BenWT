import { gql } from 'apollo-boost'

const GET_PAGE = gql`
query ($first:Int, $after:String) {
    careers (first: $first, after: $after, where: {
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
    GET_PAGE,
}