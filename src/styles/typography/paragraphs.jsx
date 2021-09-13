export const ParagraphBody = (theme) => `
  color: ${theme.color.steel};
  font-size: ${theme.fontSize.body};
  font-weight: ${theme.fontWeight.body};
  line-height: ${theme.lineHeight.body};
  letter-spacing: ${theme.letterSpacing};
`;

export const ParagraphSmall = (theme) => `
  color: ${theme.color.steel};
  font-size: ${theme.fontSize.bodySmall};
  font-weight: ${theme.fontWeight.bodySmall};
  line-height: ${theme.lineHeight.bodySmall};
  letter-spacing: ${theme.letterSpacing};
`;

const paragraphs = {
  ParagraphBody,
  ParagraphSmall,
};
export default paragraphs;
