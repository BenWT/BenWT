import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { queries } from '../../graphql'

const MenuManager = Component => ({
    ...props,
}) => {
    const { loading, error, data } = useQuery(queries.menus.GET_ALL)

    return !loading && !error ? <Component {...{
        menus: data && data.menus ? {
            header: data.menus.nodes.find(m => m.slug === 'header')
                ? data.menus.nodes.find(m => m.slug === 'header').menuItems.edges.map(m => m.node)
                : null,
            footer: data.menus.nodes.find(m => m.slug === 'footer')
                ? data.menus.nodes.find(m => m.slug === 'footer').menuItems.edges.map(m => m.node)
                : null,
        } : null,
        ...props
    }} /> : null
}

export default MenuManager