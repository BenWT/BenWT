import variables from './variables'
import textAlign from './textAlign';
import grid from './grid';
import helpers from './helpers';

const {
    fontstacks,
    spaces,
    breakpoints,
    colors,
} = variables

const typography = {
    h1: {
        marginBottom: '.09615em',
        fontFamily: fontstacks.secondary,
        fontSize: 28,
        fontWeight: 400,
        lineHeight: 1.11538,

        [breakpoints.xs]: {
            fontSize: 'calc(.03394*100vw + 15.27273px)',
        },

        [breakpoints.xlg]: {
            fontSize: 56,
        },
    },
    h2: {
        marginBottom: '.625em',
        fontFamily: fontstacks.secondary,
        fontSize: 25,
        fontWeight: 400,
        lineHeight: 1.11538,
        color: colors.black,

        [breakpoints.sm]: {
            fontSize: 'calc(.01576*100vw + 19.09091px)',
        },

        [breakpoints.xlg]: {
            fontSize: 38,
        }
    },
    h3: {
        marginBottom: 20,
        fontFamily: fontstacks.secondary,
        fontSize: 24,
        fontWeight: 400,
        lineHeight: 1.11538,
        color: colors.black,

        [breakpoints.sm]: {
            fontSize: 'calc(.0097*100vw + 20.36364px)',
        },

        [breakpoints.xlg]: {
            fontSize: 32,
        },
    },
    h4: {
        marginBottom: 20,
        fontFamily: fontstacks.secondary,
        fontSize: 15,
        fontWeight: 400,
        lineHeight: 1.2,
        color: colors.black,

        [breakpoints.sm]: {
            fontSize: 'calc(.00485*100vw + 14.18182px)',
        },

        [breakpoints.xlg]: {
            fontSize: 20,
        },
    },
    p: {
        margin: [0, 0, spaces[1]],
        fontSize: 16,
        fontWeight: 200,
        lineHeight: 1.55556,
        color: colors.darkgrey,

        [breakpoints.md]: {
            fontSize: 'calc(.00242*100vw + 15.09091px)',
        },

        [breakpoints.xlg]: {
            fontSize: 18,
        },

        '&:last-of-type, &:last-child': {
            marginBottom: 0,
        },
    },
    small: {
        fontSize: 12,
        fontWeight: 300,
        lineHeight: 1.46667,

        [breakpoints.sm]: {
            fontSize: 'calc(.00606*100vw + 7.72727px)',
        },

        [breakpoints.xlg]: {
            fontSize: 15,
        },
    },
}

export default {
    fontstacks,
    colors,
    spaces,
    breakpoints,
    typography,
    textAlign,
    grid,
    helpers,
}
