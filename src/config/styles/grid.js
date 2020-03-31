import variables from './variables'

const {
    spaces,
    breakpoints,
} = variables

function colSize($col, breakpoint) {
    return breakpoint
        ? {
            [breakpoint]: {
                flexBasis: `${(100 * $col / 12)}%`,
                maxWidth: `${(100 * $col / 12)}%`,
            }
        } : {
            flexBasis: `${(100 * $col / 12)}%`,
            maxWidth: `${(100 * $col / 12)}%`,
        }
}

function offsetSize($col, breakpoint) {
    return breakpoint
        ? {
            [breakpoint]: {
                marginLeft: `${(100 * $col / 12)}%`,
            }
        } : {
            marginLeft: `${(100 * $col / 12)}%`,
        }
}

let xsCols = {};
for (var i = 1; i < 13; i++) {
    xsCols[`.col-xs-${i}`] = colSize(i);
    xsCols[`.col-xs-offset-${i}`] = offsetSize(i);
}

let smCols = {};
for (var i = 1; i < 13; i++) {
    smCols[`.col-sm-${i}`] = colSize(i, breakpoints.sm);
    smCols[`.col-sm-offset-${i}`] = offsetSize(i, breakpoints.sm);
}

let mdCols = {};
for (var i = 1; i < 13; i++) {
    mdCols[`.col-md-${i}`] = colSize(i, breakpoints.md);
    mdCols[`.col-md-offset-${i}`] = offsetSize(i, breakpoints.md);
}

let lgCols = {};
for (var i = 1; i < 13; i++) {
    lgCols[`.col-lg-${i}`] = colSize(i, breakpoints.lg);
    lgCols[`.col-lg-offset-${i}`] = offsetSize(i, breakpoints.lg);
}

let xlgCols = { };
for (var i = 1; i < 13; i++) {
    xlgCols[`.col-xlg-${i}`] = colSize(i, breakpoints.xlg);
    xlgCols[`.col-xlg-offset-${i}`] = offsetSize(i, breakpoints.xlg);
}

let emptyStyle = {
    maxWidth: 0,
    flexBasis: 0,
}

xsCols[`.col-xs-0`] = emptyStyle
smCols[`.col-sm-0`] = { [breakpoints.sm]: emptyStyle }
mdCols[`.col-md-0`] = { [breakpoints.md]: emptyStyle }
lgCols[`.col-lg-0`] = { [breakpoints.lg]: emptyStyle }
xlgCols[`.col-xlg-0`] = { [breakpoints.xlg]: emptyStyle }

export default {
    '.container': {
        margin: '0 auto',
        padding: [0, 30],
        maxWidth: 1400,

        [breakpoints.md]: {
            padding: [0, 50],
        },

        [breakpoints.lg]: {
            padding: [0, 70],
        },

        '&--tiny': {
            maxWidth: 720,
        },
        '&--thin': {
            maxWidth: 1080,
        },

        '&--wide': {
            maxWidth: 1400,
        },

        '&--full': {
            maxWidth: '100%',
        },
    },

    '.container:after, .row:after': {
        content: '',
        display: 'table',
        clear: 'both',
    },

    '.row': {
        display: 'flex',
        flexFlow: 'row wrap',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginRight: -15,
        marginLeft: -15,

        '&.align-middle': {
            alignItems: 'center',
        },

        '&.align-bottom': {
            alignItems: 'flex-end',
        },

        '&.align-left': {
            justifyContent: 'flex-start',
        },

        '&.align-center': {
            justifyContent: 'center',
        },

        '&.align-right': {
            justifyContent: 'flex-end',
        },

        '&.reverse': {
            flexDirection: 'row-reverse',
        },

        '&.spread-items': {
            justifyContent: 'space-between',
        },

        '&.justify-center': {
            justifyContent: 'center',
        },

        '&:before, &:after': {
            content: 'normal',
        },
    },
    '.row-gap': {
        marginTop: spaces[2],
    },
    '[class*=col-]': {
        width: '100%',
        padding: [0, 15],
    },

    /**
     * Columns.
     */
    ...xsCols,
    ...smCols,
    ...mdCols,
    ...lgCols,
    ...xlgCols,
}
