import { styles } from '../../../config'

const {
    colors,
} = styles

export default {
    navMenu: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',

        backgroundColor: colors.tertiary,
        opacity: 0,

        transition: 'all .45s ease',
        zIndex: 10,
        pointerEvents: 'none',

        '&$show': {
            opacity: 1,
            pointerEvents: 'auto',
        },
    },
    close: {
        position: 'absolute',
        top: 0,
        right: 0,
    },

    slideContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        height: '200%',
        margin: 'auto',
        transform: 'translate3d(0, -25%, 0)',
    },
    slideWrapper: {
        transform: 'translate3d(-50%, 0, 0)',
        display: 'flex',
        position: 'absolute',
        left: '50%',
        height: '100%',
    },
    slideParent: {
        flexGrow: 1,
        minWidth: '18vw',
        transition: 'all .25s ease',
        
        '&$hover': {
            transition: 'all .15s ease',
            // transitionDelay: '.1s',
            minWidth: '25vw',
        }
    },
    slide: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        width: '87.5%',
        height: '100%',
        margin: 'auto',
        transform: 'rotate3d(0, 0, 1, -30deg)',
        transformOrigin: '50% 50%',
        
        backgroundColor: colors.tertiary,
        transition: 'all .25s ease',

        cursor: 'pointer',
        overflow: 'hidden',

        '& > span': {
            zIndex: 11,
            backfaceVisibility: 'hidden',

            '& > *': {
                color: colors.white,
                textAlign: 'center',
                userSelect: 'none',
                writingMode: 'vertical-rl',
                textOrientation: 'mixed',
            }
        }
    },
    image: {
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        top: '25%',
        transform: 'rotate3d(0, 0, 1, 30deg)',
        pointerEvents: 'none',

        '& > img': {
            position: 'absolute',
            height: '100%',
            width: 'auto',

            opacity: 0,
            transition: 'all .25s ease',

            '&$hover': {
                opacity: 1,
                transform: 'scale3d(1.1, 1.1, 1)',
                transition: 'all .25s ease',
                // transitionDelay: '.1s',
            },

            '&:first-child': {
                opacity: 1,
            }
        }
    },

    hover: {},
    show: {},
}