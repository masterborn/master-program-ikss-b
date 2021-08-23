import styled from 'styled-components';

export const Header1 = styled.h1`
  color: ${(props) => props.theme.color.navy};
  line-height: ${(props) => props.theme.lineHeight.header1};
  font-weight: ${(props) => props.theme.fontWeight.header1};
  font-size: ${(props) => props.theme.fontSize.header1};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  margin: ${(props) => props.margin};
`;
Header1.defaultProps = {
  margin: 0,
};

export const Header2 = styled.h2`
  color: ${(props) => props.theme.color.navy};
  line-height: ${(props) => props.theme.lineHeight.header2};
  font-weight: ${(props) => props.theme.fontWeight.header2};
  font-size: ${(props) => props.theme.fontSize.header2};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  margin: ${(props) => props.margin};
`;
Header2.defaultProps = {
  margin: 0,
};
export const Header3 = styled.h3`
  color: ${(props) => props.theme.color.navy};
  line-height: ${(props) => props.theme.lineHeight.header3};
  font-weight: ${(props) => props.theme.fontWeight.header3};
  font-size: ${(props) => props.theme.fontSize.header3};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  margin: ${(props) => props.margin};
`;
Header3.defaultProps = {
  margin: 0,
};
export const Header4 = styled.h4`
  color: ${(props) => props.theme.color.navy};
  line-height: ${(props) => props.theme.lineHeight.header4};
  font-weight: ${(props) => props.theme.fontWeight.header4};
  font-size: ${(props) => props.theme.fontSize.header4};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  margin: ${(props) => props.margin};
`;
Header4.defaultProps = {
  margin: 0,
};

export const Header5 = styled.h5`
  color: ${(props) => props.theme.color.navy};
  line-height: ${(props) => props.theme.lineHeight.header5};
  font-weight: ${(props) => props.theme.fontWeight.header5};
  font-size: ${(props) => props.theme.fontSize.header5};
  letter-spacing: ${(props) => props.theme.letterSpacing};
  margin: ${(props) => props.margin};
`;
Header5.defaultProps = {
  margin: 0,
};

const headers = {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
};

export default headers;
