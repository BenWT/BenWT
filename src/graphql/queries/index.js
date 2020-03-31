import { gql } from 'apollo-boost'

import games from './games'
import careers from './careers'
import menus from './menus'
import options from './options'
import pages from './pages'
import posts from './posts'

import {
    GET_SINGLE_POST,
    GET_ALL_PAGES,
} from './dynamic'

export default {
    GET_SINGLE_POST,
    GET_ALL_PAGES,
    games,
    careers,
    menus,
    options,
    pages,
    posts,
}