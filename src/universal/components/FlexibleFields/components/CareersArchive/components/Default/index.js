import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../../../graphql'

import style from './style'

// TODO: Build Default CareersArchive component
const Default = ({
    
}) => {
    const [ variables, setVariables ] = useState({ first: 10, after: '' })
    const { loading, error, data } = useQuery(queries.careers.GET_PAGE, { variables })

    const [ careers, setCareers ] = useState([])
    const [ next, setNext ] = useState('')

    useEffect(() => {
        if (data) {
            if (data.careers.pageInfo.hasNextPage) setNext(data.careers.pageInfo.endCursor)
            else setNext(false)

            setCareers([
                ...careers,
                ...data.careers.edges.map(n => n.node),
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
            <h3>Careers Archive</h3>
            { careers.length > 0 && (
                <ul>
                    { careers.map((g, i) => (
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