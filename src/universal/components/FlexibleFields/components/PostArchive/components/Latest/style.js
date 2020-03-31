import { styles } from '../../../../../../../config'

const {
    colors,
    breakpoints,
} =  styles

export default {
    panel: {
        backgroundColor: colors.tertiary,
        color: colors.white,
        overflow: 'hidden',
    },

    posts: {
        width: '100%',
        paddingTop: '100%',
        backgroundColor: 'red',
        position: 'absolute',
        top: '50%',
        right: '90%',
        transform: 'translate(0, -50%)',
        borderRadius: '9999px',
        
        [breakpoints.sm]: {
            right: '80%',
        },
        
        [breakpoints.md]: {
            right: '50%',
        },
    },

    card: {
        width: '100%',
        maxWidth: '80%',
        position: 'absolute',
        top: '50%',
        left: '100%',
        transformOrigin: '-240% 50%',

        '&:nth-child(1)': {
            transform: 'translateY(-50%) rotate(-15deg)',
        },

        '&:nth-child(2)': {
            transform: 'translateY(-50%) rotate(0deg)',
        },

        '&:nth-child(3)': {
            transform: 'translateY(-50%) rotate(15deg)',
        },
        
        [breakpoints.sm]: {
            maxWidth: '70%',
        },
        
        [breakpoints.md]: {
            maxWidth: '40%',
        },
    },

    cardInner: {
        width: '100%',
        paddingTop: '50%',
        backgroundColor: 'red',
    },

    cardTitle: {
        display: 'block',
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'translateX(40px, -50%)',
        fontSize: 30,
        fontWeight: 'bold',
        color: colors.white,
    },
}