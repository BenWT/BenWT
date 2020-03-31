import { gql } from 'apollo-boost'

const GET_OPTIONS = gql`{
    tiltingPointSettings {
        optionsPanel {
            socialLinks {
                linkedin {
                    url
                }
                twitter {
                    url
                }
            }
        }
    }
}`

const GET_PARTNERS = gql`{
    tiltingPointSettings {
        optionsPanel {
            partners {
                logo {
                    uri
                }
            }
        }
    }
}`

export default {
    GET_OPTIONS,
    GET_PARTNERS,
}