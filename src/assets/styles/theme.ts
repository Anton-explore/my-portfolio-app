import BackImage from '../../assets/images/background.png';

export const theme = Object.freeze({
  colors: {
    midnight: '#000614',
    oxford: '#222935',
    accent: '#26C17E',
    raven: '#667081',
    gallery: '#EEEEEE',
    white: '#FFFFFF',
    black: '#000000',
    alto: '#DDDDDD',
    mainBackground: [`linear-gradient(to top, rgba(65, 65, 65, .5), rgba(65, 65, 65, .5)), url(${BackImage}) no-repeat center/cover`],
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
  },
  fontSizes: {
    tiny: '14px',
    small: '16px',
    medium: '18px',
    large: '24px',
    huge: '30px'
  },
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: '0px 4px 10px 4px #9e9e9e',
    medium: '0 9px 47px 11px rgba(51, 51, 51, 0.18);',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
});
