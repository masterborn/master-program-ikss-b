import { css } from 'styled-components';
import { color, fontSize, fontWeight, lineHeight, letterSpacing } from '../theme';

export const ParagraphBody = css`
  color: ${color.steel};
  font-size: ${fontSize.body};
  font-weight: ${fontWeight.body};
  line-height: ${lineHeight.body};
  letter-spacing: ${letterSpacing};
`.join('');

export const ParagraphSmall = css`
  color: ${color.steel};
  font-size: ${fontSize.bodySmall};
  font-weight: ${fontWeight.bodySmall};
  line-height: ${lineHeight.bodySmall};
  letter-spacing: ${letterSpacing};
`.join('');
