import variables from './variables'

const {
    breakpoints,
} = variables

export default {
    '.tal': {
        textAlign: 'left',
    },
    '.tac': {
        textAlign: 'center',
    },
    '.tar': {
        textAlign: 'right',
    },

    [breakpoints.sm]: {
        '.sm-tal': {
            textAlign: 'left',
        },
        '.sm-tac': {
            textAlign: 'center',
        },
        '.sm-tar': {
            textAlign: 'right',
        },
    },

    [breakpoints.md]: {
        '.md-tal': {
            textAlign: 'left',
        },
        '.md-tac': {
            textAlign: 'center',
        },
        '.md-tar': {
            textAlign: 'right',
        },
    },

    [breakpoints.lg]: {
        '.lg-tal': {
            textAlign: 'left',
        },
        '.lg-tac': {
            textAlign: 'center',
        },
        '.lg-tar': {
            textAlign: 'right',
        },
    },

    [breakpoints.xlg]: {
        '.xlg-tal': {
            textAlign: 'left',
        },
        '.xlg-tac': {
            textAlign: 'center',
        },
        '.xlg-tar': {
            textAlign: 'right',
        },
    },
}
