import { css } from 'styled-components';

export const Header1 = css(
  ({ theme, margin = 0 }) => `
  color: ${theme.color.navy};
  line-height: ${theme.lineHeight.header1};
  font-weight: ${theme.fontWeight.header1};
  font-size: ${theme.fontSize.header1};
  letter-spacing: ${theme.letterSpacing};
  margin: ${margin};
`,
);

export const Header2 = css(
  ({ theme, margin = 0 }) => `
  color: ${theme.color.navy};
  line-height: ${theme.lineHeight.header2};
  font-weight: ${theme.fontWeight.header2};
  font-size: ${theme.fontSize.header2};
  letter-spacing: ${theme.letterSpacing};
  margin: ${margin};
`,
);

export const Header3 = css(
  ({ theme, margin = 0 }) => `
  color: ${theme.color.navy};
  line-height: ${theme.lineHeight.header3};
  font-weight: ${theme.fontWeight.header3};
  font-size: ${theme.fontSize.header3};
  letter-spacing: ${theme.letterSpacing};
  margin: ${margin};
`,
);

export const Header4 = css(
  ({ theme, margin = 0 }) => `
  color: ${theme.color.navy};
  line-height: ${theme.lineHeight.header4};
  font-weight: ${theme.fontWeight.header4};
  font-size: ${theme.fontSize.header4};
  letter-spacing: ${theme.letterSpacing};
  margin: ${margin};
`,
);

export const Header5 = css(
  ({ theme, margin = 0 }) => `
  color: ${theme.color.navy};
  line-height: ${theme.lineHeight.header5};
  font-weight: ${theme.fontWeight.header5};
  font-size: ${theme.fontSize.header5};
  letter-spacing: ${theme.letterSpacing};
  margin: ${margin};
`,
);

const headers = {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
};

export default headers;
