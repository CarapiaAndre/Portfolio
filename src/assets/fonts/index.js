import Gotu from 'fontsource-gotu';
import Montserrat from 'fontsource-montserrat';

const gotu = {
    fontFamily: 'Gotu',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('Gotu'),
        local('Gotu-Regular'),
        url(${Gotu}) format('woff2')
    `
}

const montserrat = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
        local('Montserrat'),
        local('Montserrat-Regular'),
        url(${Montserrat}) format('woff2')
    `
}

export { gotu, montserrat };