import headers from '@root/components/typography/headers';
import paragraphs from '@root/components/typography/paragraphs';

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
  body: '32px',
  bodySmall: '28px',
  header1: '72px',
  header2: '72px',
  header3: '44px',
  header4: '32px',
  header5: '24px',
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
  mobile: '(max-width: 550px)',
};
export const fontSize = {
  body: '16px',
  bodySmall: '14px',
  header1: '56px',
  header2: '40px',
  header3: '32px',
  header4: '24px',
  header5: '18px',
};

const theme = {
  headers,
  paragraphs,
  fontFamily,
  lineHeight,
  fontSize,
  fontWeight,
  letterSpacing,
  color,
  medias,
};

export default theme;
