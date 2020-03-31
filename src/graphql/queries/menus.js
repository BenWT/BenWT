import { gql } from 'apollo-boost'

const GET_ALL = gql`
query {
  	menus {
    	nodes {
      		slug,
      		menuItems {
        		edges {
          			node {
            			slug, label
          			}
				}
      		}
    	}
  	}
}
`;

export default {
    GET_ALL,
}