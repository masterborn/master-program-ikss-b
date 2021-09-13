import { css } from 'styled-components';

export const ParagraphBody = css`
  color: ${({ theme: { color } }) => color.steel};
  font-size: ${({ theme: { fontSize } }) => fontSize.body};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.body};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  margin: ${({ margin }) => margin};
`;

export const ParagraphSmall = css`
  color: ${({ theme: { color } }) => color.steel};
  font-size: ${({ theme: { fontSize } }) => fontSize.body};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bodySmall};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.bodySmall};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  margin: ${({ margin }) => margin};
`;

const paragraphs = {
  ParagraphBody,
  ParagraphSmall,
};
export default paragraphs;
