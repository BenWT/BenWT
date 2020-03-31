import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../../../graphql'

import style from './style'

// TODO: Build Default PostArchive component
const Default = ({
    
}) => {
    const [ variables, setVariables ] = useState({ first: 5, after: '' })
    const { loading, error, data } = useQuery(queries.posts.GET_PAGE, { variables })

    const [ posts, setPosts ] = useState([])
    const [ next, setNext ] = useState('')

    useEffect(() => {
        if (data) {
            if (data.posts.pageInfo.hasNextPage) setNext(data.posts.pageInfo.endCursor)
            else setNext(false)

            setPosts([
                ...posts,
                ...data.posts.edges.map(n => n.node),
            ])
        }
    }, [data])

    const loadMore = () => {
        setVariables({
            ...variables,
            after: next
        })
    }

    return (
        <div>
            <h3>Posts Archive</h3>
            { posts.length > 0 && (
                <ul>
                    { posts.map((p, i) => (
                        <li key={i}>
                            <Link to={`/${p.uri}`}>
                                { p.title }
                            </Link>
                        </li>
                    ))}                
                </ul>
            )}

            { loading && <div>loading...</div> }
            { next && !loading && <div onClick={ e => loadMore() }>Load More</div> }
        </div>
    )
}

export default is(style)(Default)