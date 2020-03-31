import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../../../graphql'

import style from './style'

// TODO: Build Default GamesArchive component
const Default = ({
    
}) => {
    const [ variables, setVariables ] = useState({ first: 10, after: '' })
    const { loading, error, data } = useQuery(queries.games.GET_PAGE, { variables })

    const [ games, setGames ] = useState([])
    const [ next, setNext ] = useState('')

    useEffect(() => {
        if (data) {
            if (data.games.pageInfo.hasNextPage) setNext(data.games.pageInfo.endCursor)
            else setNext(false)

            setGames([
                ...games,
                ...data.games.edges.map(n => n.node),
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
            <h3>Games Archive</h3>
            { games.length > 0 && (
                <ul>
                    { games.map((g, i) => (
                        <li key={i}>
                            <Link to={`/${g.uri}`}>
                                { g.title }
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