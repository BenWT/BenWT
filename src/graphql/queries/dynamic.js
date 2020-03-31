import { gql } from "apollo-boost"

const CONTENT = (TYPE) => `
databaseId,
title,
uri,
template {
    ... on DefaultTemplate {
        templateName,
    },
    ... on GamesTemplate {
        templateName,
    },
    ... on PostsTemplate {
        templateName,
    },
},
seo {
    title,
},
flexibleContent {
    header {
        type,
    },
    footer {
        type,
    },
    content {
        ... on ${ TYPE }_Flexiblecontent_Content_GamesArchive {
            type,
            sliderContent {
                game {
                    ... on Game {
                        title,
                    },
                },
                title,
                tagline,
            },
        },
        ... on ${ TYPE }_Flexiblecontent_Content_PostArchive {
            type,
        },
        ... on ${ TYPE }_Flexiblecontent_Content_CareersArchive {
            type,
        },
        ... on ${ TYPE }_Flexiblecontent_Content_CtaText {
            title, content, backgroundText
        },
        ... on ${ TYPE }_Flexiblecontent_Content_About {
            type,
        },
        ... on ${ TYPE }_Flexiblecontent_Content_Contact {
            type,
        },
        ... on ${ TYPE }_Flexiblecontent_Content_Partners {
            type,
        },
        ... on ${ TYPE }_Flexiblecontent_Content_ProprietaryTechnology {
            technologies {
                name,
                title,
                tagline,
                copy,
                image {
                    uri,
                },
            },
        },
        ... on ${ TYPE }_Flexiblecontent_Content_Testimonials {
            testimonials {
                headshot {
                    uri,
                },
                name,
                jobTitle,
                testimonial,
            }
        },
        ... on ${ TYPE }_Flexiblecontent_Content_JobDescription {
            sections {
                title,
                tagline,
                points {
                    point
                }
            }
        },
        ... on ${ TYPE }_Flexiblecontent_Content_Locations {
            locations {
                image {
                    uri,
                },
                address {
                    line1,
                    line2,
                    line3,
                },
                name,
            },
        },
        ... on ${ TYPE }_Flexiblecontent_Content_Team {
            teamMembers {
                headshot {
                  uri,
                },
                name,
                jobTitle,
                description,
                social {
                    url
                },
            },
        },
    }
}`

const GET_ALL_PAGES = gql`
query {
    pages {
        nodes {
            ${ CONTENT('Page') }
            childPages {
                nodes {
                    ${ CONTENT('Page') }
                }
            }
        }
    }
}`

const GET_SINGLE_POST = (type) => {
    let graphqlType = type.replace(/^\w/, c => c.toUpperCase())

    return gql`
    query ($uri: ID!) {
        ${ type } (id: $uri, idType: URI) {
            ${ CONTENT(graphqlType) }
        }
    }`
}


export {
    GET_SINGLE_POST,
    GET_ALL_PAGES,
}