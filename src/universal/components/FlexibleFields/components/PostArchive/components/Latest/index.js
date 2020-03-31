import React, { useState, useEffect} from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import cx from 'classnames'
import is from 'react-jss'

import { queries } from '../../../../../../../graphql'
import Panel from '../../../../../Panel'

import style from './style'

const Latest = ({
    classes,
    content,
}) => {
    const { loading, error, data } = useQuery(queries.posts.GET_LATEST, { variables: { first: 8 } })
    const [ posts, setPosts ] = useState([])
    const [ mouse, setMouse ] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))

    useEffect(() => {
        setPosts(data && data.posts.edges ? [
            ...posts,
            ...data.posts.edges.map(n => n.node),
        ] : [])
    }, [data])  
    
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans = [
        (x, y) => `translate3d(${x / 10}px, ${y / 8}px, 0)`,
        (x, y) => `translate3d(${x / 10}px, ${y / 8}px, 0)`,
        (x, y) => `translate3d(${x / 10}px, ${y / 8}px, 0)`,
        (x, y) => `translate3d(${x / 10}px, ${y / 8}px, 0)`,
        (x, y) => `translate3d(${x / 10}px, ${y / 8}px, 0)`,
    ]

    return (
        <Panel classNames={{ panel: classes.panel, panelInner: classes.panelInner }} onMouseMove={({ clientX: x, clientY: y }) => setMouse({ xy: calc(x, y) })}>
            <div className={classes.posts}>
                { posts.map((post, i) => (
                    <div className={classes.card}>
                        <animated.div className={classes.cardInner} style={{ transform: mouse.xy.interpolate(trans[i]) }}>
                            <Link to={ `/news/${post.uri}` } className={classes.cardLink}>
                                <span class={classes.cardTitle}>{post.title}</span>
                            </Link>
                        </animated.div>
                    </div>
                )) }
            </div>
            <Link to="/news/">All news</Link>
        </Panel>
    )
}

export default is(style)(Latest)