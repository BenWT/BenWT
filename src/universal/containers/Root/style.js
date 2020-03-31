import { styles } from '../../../config'

const {
    fontstacks,
    typography,
    colors,
    textAlign,
    grid,
} = styles;

export default {
    '@global': {
        '*': {
            boxSizing: 'border-box',
            flex: '0 1 auto',
        },
        'html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video': {
            margin: 0,
            padding: 0,
            border: 0,
            outline: 0,
            fontSize: '100%',
            verticalAlign: 'baseline',
            background: 'transparent',
        },
        html: {
            height: '100%',
        },
        body: {
            fontFamily: fontstacks.primary,
            lineHeight: 1,
            backgroundColor: colors.white,
            color: colors.black,
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale',
            overflowY: 'scroll',
        },
        'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section': {
            display: 'block',
        },
        nav: {
            ul: {
                listStyle: 'none',
            },
        },
        'blockquote, q': {
            quotes: 'none',
        },
        'blockquote:before, blockquote:after, q:before, q:after': {
            content: '',
            content: 'none',
        },
        img: {
            maxWidth: '100%',
        },
        'h1, .h1': {
            ...typography.h1,
        },
        'h2, .h2': {
            ...typography.h2,
        },
        'h3, .h3': {
            ...typography.h3,
        },
        'h4, .h4': {
            ...typography.h4,
        },
        p: {
            ...typography.p,
        },
        'small, .small': {
            ...typography.small,
        },
        'ol, ul': {
            ...typography.p,
        },
        a: {
            margin: 0,
            padding: 0,
            fontSize: '100%',
            textDecoration: 'none',
            verticalAlign: 'baseline',
            background: 'transparent',
            color: colors.tertiary,

            '&:hover, &:active, &:focus': {
                textDecoration: 'none',
                color: colors.tertiary,
            },
        },
        ins: {
            backgroundColor: '#ff9',
            color: colors.black,
            textDecoration: 'none',
        },
        mark: {
            backgroundColor: '#ff9',
            color: colors.black,
            fontStyle: 'italic',
            fontWeight: 'bold',
        },
        del: {
            textDecoration: 'line-through',
        },
        'abbr[title], dfn[title]': {
            borderBottom: '1px dotted',
            cursor: 'help',
        },
        strong: {
            fontWeight: 600,
        },
        table: {
            borderCollapse: 'collapse',
            borderSpacing: 0,
        },
        hr: {
            display: 'block',
            height: 1,
            border: 0,
            borderTop: '1px solid #cccccc',
            margin: '1em 0',
            padding: 0,
        },
        'input, label, select, button, textarea': {
            margin: 0,
            border: 0,
            padding: 0,
            display: 'inline-block',
            verticalAlign: 'middle',
            whiteSpace: 'normal',
            background: 'none',
            lineHeight: 1,
            fontFamily: `${fontstacks.primary} !important`,
            fontWeight: 200,
            fontStyle: 'normal!important',
        },
        'input, select': {
            '&:focus': {
                outline: 0,
            },
        },
        'input[type=checkbox], input[type=radio]': {
            width: 13,
            height: 13,
        },
        'input[type=search]': {
            '-webkit-appearance': 'textfield',
            '-webkit-boxSizing': 'content-box',
        },
        '::-webkit-search-decoration': {
            display: 'none',
        },
        form: {
            width: '100%',
            maxWidth: '100%',
        },
        'button, input[type=reset], input[type=button], input[type=submit]': {
            overflow: 'visible',
            width: 'auto',
        },
        '::-webkit-file-upload-button': {
            padding: 0,
            border: 0,
            background: 'none',
        },
        textarea: {
            verticalAlign: 'top',
            overflow: 'auto',
            fontFamily: `${fontstacks.primary} !important`,
            fontWeight: "200!important",
            fontStyle: 'normal!important',
        },
        '::-webkit-input-placeholder, :-moz-placeholder, ::-moz-placeholder, :-ms-input-placeholder, ::-ms-input-placeholder': {
            fontFamily: `${fontstacks.primary} !important`,
            fontWeight: "200!important",
            fontStyle: 'normal!important',
            color: `${colors.black}!important`,
        },
        'select[multiple]': {
            verticalAlign: 'top',
        },
        '.screen-reader-text': {
            display: 'none',
            textIndent: -9999,
        },
        '.page-content': {
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            overflow: 'hidden',
        },
        '#content': {
            width: '100%',
            overflow: 'hidden',
        },

        ...textAlign,
        ...grid,
    },
}
