import { DefaultTheme } from 'styled-components';

export const fontFamily = {
  main: "Mulish"
} as const;

export const fontWeight = {
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
} as const;

export const medias = {};
export const fontSize = {
  body: '16pt',
  bodySmall: '14pt',
  header1: '56pt',
  header2: '40pt',
  header3: '32pt',
  header4: '24pt',
  header5: '18pt',
}

const theme: DefaultTheme = {
  fontFamily,
  fontWeight,
  color,
  medias,
} as const;

export default theme;
