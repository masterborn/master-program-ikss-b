import styled from 'styled-components';

export const ParagraphBody = styled.p`
  font-size: ${(props) => props.theme.fontSize.body};
  font-weight: ${(props) => props.theme.fontWeight.body};
  line-height: ${(props) => props.theme.lineHeight.body};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  margin: ${(props) => props.margin};
`;
ParagraphBody.defaultProps = {
  margin: 0,
};

export const ParagraphSmall = styled.p`
  font-size: ${(props) => props.theme.fontSize.bodySmall};
  font-weight: ${(props) => props.theme.fontWeight.bodySmall};
  line-height: ${(props) => props.theme.lineHeight.bodySmall};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  margin: ${(props) => props.margin};
`;
ParagraphSmall.defaultProps = {
  margin: 0,
};
const paragraphs = {
  ParagraphBody,
};
export default paragraphs;
