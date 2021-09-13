import { css } from 'styled-components';

export const Header1 = css`
  color: ${({ theme: { color } }) => color.navy};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.header1};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.header1};
  font-size: ${({ theme: { fontSize } }) => fontSize.header1};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  margin: ${({ margin }) => margin};
`;

export const Header2 = css`
  color: ${({ theme: { color } }) => color.navy};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.header2};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.header2};
  font-size: ${({ theme: { fontSize } }) => fontSize.header2};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  margin: ${({ margin }) => margin};
`;

export const Header3 = css`
  color: ${({ theme: { color } }) => color.navy};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.header3};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.header3};
  font-size: ${({ theme: { fontSize } }) => fontSize.header3};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  margin: ${({ margin }) => margin};
`;

export const Header4 = css`
  color: ${({ theme: { color } }) => color.navy};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.header4};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.header4};
  font-size: ${({ theme: { fontSize } }) => fontSize.header4};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  margin: ${({ margin }) => margin};
`;

export const Header5 = css`
  color: ${({ theme: { color } }) => color.navy};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.header5};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.header5};
  font-size: ${({ theme: { fontSize } }) => fontSize.header5};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  margin: ${({ margin }) => margin};
`;

const headers = {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
};

export default headers;
