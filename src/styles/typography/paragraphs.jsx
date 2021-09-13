import { css } from 'styled-components';

export const ParagraphBody = css(
  ({ theme, margin = 0 }) => `
  color: ${theme.color.steel};
  font-size: ${theme.fontSize.body};
  font-weight: ${theme.fontWeight.body};
  line-height: ${theme.lineHeight.body};
  letter-spacing: ${theme.letterSpacing};
  margin: ${margin};
`,
);

export const ParagraphSmall = css(
  ({ theme, margin = 0 }) => `
  color: ${theme.color.steel};
  font-size: ${theme.fontSize.bodySmall};
  font-weight: ${theme.fontWeight.bodySmall};
  line-height: ${theme.lineHeight.bodySmall};
  letter-spacing: ${theme.letterSpacing};
  margin: ${margin};
`,
);

const paragraphs = {
  ParagraphBody,
  ParagraphSmall,
};
export default paragraphs;
