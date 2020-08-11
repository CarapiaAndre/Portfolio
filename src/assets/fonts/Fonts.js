import MontserratTtf from './Montserrat/Montserrat-Regular.ttf';
import RedRoseTtf from './Red_Rose/RedRose-Regular.ttf';

const montserrat = {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Montserrat'),
      local('Montserrat-Regular'),
      url(${MontserratTtf}) format('ttf')
    `
};

const redRose = {
    fontFamily: 'Red Rose',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('RedRose'),
      local('RedRose-Regular'),
      url(${RedRoseTtf}) format('ttf')
    `
};

export { montserrat, redRose }