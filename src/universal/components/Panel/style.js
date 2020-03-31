import { styles } from '../../../config'

const {
    spaces,
    breakpoints,
} = styles

export default {
    panel: {
        position: 'relative',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',

        [breakpoints.md]: {
            height: 0,
            paddingBottom: '56.25%',
        }
    },
    panelInner: {    
        width: '100%',
        maxWidth: 1400,
        margin: [0, 'auto'],
        padding: [spaces[4], spaces[3]],

        [breakpoints.md]: {
            padding: [0, spaces[3]],
            height: '100%',

            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },

        [breakpoints.lg]: {
            padding: [0, 70],
        },
    },
}