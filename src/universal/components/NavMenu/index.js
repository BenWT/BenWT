import React, { useState } from 'react'
import is from 'react-jss'
import cx from 'classnames'
import { Link } from 'react-router-dom'

import style from './style'

import idleImage from './images/idle.jpg'
import hoverImage from './images/hover.jpg'

const Slide = ({ classes, images = [], label, slug }) => {
    const [ hover, setHover ] = useState(false)

    return (
        <div className={cx(classes.slideParent, {
            [classes.hover]: hover
        })}>
            <Link
                to={slug}
                className={classes.slide}
                onMouseEnter={ e => setHover(true) }
                onMouseLeave={ e => setHover(false) }
            >
                <div className={classes.image}>
                    { images.map((src, i) => (
                        <img className={cx({
                            [classes.hover]: hover,
                        })} {...{ src, key: i }} />
                    ))}
                </div>
                <span>
                    <h3>{ label }</h3>
                </span>
            </Link>
        </div>
    )
}

const NavMenu = ({
    classes,
    menus,
    navOpen,
    setNavOpen,
    ...props,
}) => menus && menus.header ? (
    <div className={cx(classes.navMenu, {
        [classes.show]: navOpen,
    })}>
        <div className={classes.slideContainer}>
            <div className={classes.slideWrapper}>
                {/* <Slide {...{ classes, images: [ idleImage, hoverImage ] }} />
                <Slide {...{ classes, images: [ idleImage, hoverImage ] }} />
                <Slide {...{ classes, images: [ idleImage, hoverImage ] }} />
                <Slide {...{ classes, images: [ idleImage, hoverImage ] }} />
                <Slide {...{ classes, images: [ idleImage, hoverImage ] }} /> */}
                { menus.header.map((m, i) => (
                    <Slide {...{
                        key: i,
                        classes,
                        images: [ idleImage, hoverImage ],
                        ...m,
                    }} />
                ))}
            </div>
        </div>



        { menus.header.map((m, i) => (
            <span key={i}>
                <Link to={ m.slug }>{ m.label }</Link>
            </span>
        ))}
        <span
            className={classes.close}
            onClick={ e => setNavOpen(false) }
        >X</span>
    </div>
) : null

export default is(style)(NavMenu)