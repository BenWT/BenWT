const fontstacks = {
    primary: 'Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
    secondary: 'Merriweather, Times New Roman, serif',
}

const colors = {
    primary: '#34a0fb',
    secondary: '#f140ff',
    tertiary: '#000034',
    white: '#ffffff',
    black: '#000000',
}

const spaces = [
    8, // 0
    16, // 1
    32, // 2
    64, // 3
    100, // 4
    200, // 5
]

const breakpoints = {
    xs: '@media only screen and (min-width: 320px)',
    sm: '@media only screen and (min-width: 540px)',
    md: '@media only screen and (min-width: 768px)',
    lg: '@media only screen and (min-width: 1084px)',
    xlg: '@media only screen and (min-width: 1367px)',
    max: '@media only screen and (min-width: 1400px)',
}

export default {
    fontstacks,
    colors,
    spaces,
    breakpoints,
}
