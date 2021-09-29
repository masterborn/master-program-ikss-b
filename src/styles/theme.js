export const fontFamily = {
  main: 'Mulish',
};
export const letterSpacing = '-0.015em';

export const fontWeight = {
  body: '400',
  bodySmall: '400',
  header1: '900',
  header2: '900',
  header3: '800',
  header4: '800',
  header5: '800',
};
export const lineHeight = {
  body: '3.2rem',
  bodySmall: '2.8rem',
  header1: '7.2rem',
  header2: '7.2rem',
  header3: '4.4rem',
  header4: '3.2rem',
  header5: '2.4rem',
};

export const color = {
  ikssBlue: '#1889E9',
  white: '#ffffff',
  navy: '#1A2847',
  steel: '#61798B',
  bgGradient: 'linear-gradient(180deg, #F4FAFF 0%, rgba(255, 255, 255, 0) 100%), #FFFFFF',
  blueTints: {
    blue50: '#8CC4F4',
    blue40: '#A3D0F6',
    blue30: '#BADCF8',
    blue20: '#D1E7FB',
    blue10: '#E8F3FD',
    blue05: '#F5FAFF',
  },
  steelTints: {
    steel70: '#90A1AE',
    steel60: '#A0AFB9',
    steel50: '#B0BCC5',
    steel40: '#C0C9D1',
    steel30: '#D0D7DC',
    steel20: '#DFE4E8',
  },
  misc: {
    successGreen: '#18D4A7',
    errorRed: '#E01A4F',
  },
};

export const medias = {
  mobile: '(max-width: 1024px)',
};
export const fontSize = {
  body: '1.6rem',
  bodySmall: '1.4rem',
  header1: '5.6rem',
  header2: '4rem',
  header3: '3.2rem',
  header4: '2.4rem',
  header5: '1.8rem',
};

const theme = {
  fontFamily,
  lineHeight,
  fontSize,
  fontWeight,
  letterSpacing,
  color,
  medias,
};

export default theme;
