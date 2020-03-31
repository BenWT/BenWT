import React from 'react'
import { Route, Switch, Redirect } from 'react-router'
import is from 'react-jss'

import services from '../../services'

import Page from '../Page'
import Single from '../Single'
import Error from '../Error'

import NavMenu from '../../components/NavMenu'

import style from './style'

const Root = ({
    classes,
    menus,
    options,
    ...props,
}) => menus && options ? [
    <NavMenu {...{ key: 'nav', menus, options, ...props }} />,
    <Switch {...{ key: 'routes' }}>
        <Route path='/wp/wp-admin' render={ () => <Redirect to={`${process.env.WP_SITE}/wp/wp-admin`} /> } />

        <Route path='/games/:game' render={ ({ match }) => (
            <Single {...{ uri: match.params.game, type: 'game', menus, options, ...props }} />
        )} />
        <Route path='/news/:post' render={ ({ match }) => (
            <Single {...{ uri: match.params.post, type: 'post', menus, options, ...props }} />
        )} />
        <Route path='/careers/:career' render={ ({ match }) => (
            <Single {...{ uri: match.params.career, type: 'career', menus, options, ...props }} />
        )} />

        <Route path="*" render={ ({ match }) =>
            <Single {...{ uri: match.url, type: 'page', menus, options, ...props }} />
        } />
    </Switch>,
] : null

export default services(is(style)(Root))