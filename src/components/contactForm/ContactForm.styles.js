import styled from 'styled-components';
import { Header3, Header5 } from '@root/styles/typography/headers';
import { ButtonBigText, ButtonSmallText } from '@root/styles/typography/buttonsText';
import IconButton from '../buttons/misc/IconButton';
import Input from '../formElements/input';
import { ParagraphBody, ParagraphSmall } from '../../styles/typography/paragraphs';
import PrimaryButton from '../buttons/primaryButton';
import TextArea from '../formElements/textarea';
import Checkbox from '../formElements/checkbox';
import { SuccessIcon, ErrorIcon } from '../icons/misc';

export const ContactFormContainer = styled.div(
  ({ theme: { medias, color }, isInModal }) => `
  width: 748px;
  height: fit-content;

  margin-top: ${!isInModal && '180px'};

  background-color: ${color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;

  @media ${medias.mobile} {
    width: 80%;
    min-width: 300px;
    margin-top: ${!isInModal && '46px'};
  }

  @media (max-width: 420px) {
    width: 100%;
    max-width: 337px;
    min-width: 300px;
  }
`,
);

export const CloseButton = styled(IconButton)(
  ({ theme: { medias } }) => `
  position: absolute;
  top: 37px;
  right: 37px;

  @media ${medias.mobile} {
    top: 20px;
    right: 24px;
  }
`,
);

export const ContactFormContent = styled.div(
  ({ theme: { medias }, isInModal }) => `
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 48px;
  padding-bottom: 48px;

  align-items: center;

  overflow: auto;

  @media ${medias.mobile} {
    padding-top: ${isInModal ? '56px' : '32px'};
    padding-bottom: 32px;
  }
`,
);

export const TopSection = styled.div(
  ({ theme: { medias, color } }) => `
  width: 588px;
  text-align: center;
  h3 {
    color: ${color.navy};
  }
  p {
    margin-top: 25px;
    color: ${color.steel};
  }

  @media ${medias.mobile} {
    width: 80%;
    min-width: 295px;
    h3 {
      font-size: 18px;
      line-height: 24px;
    }
    p {
      margin-top: 24px;
      font-size: 14px;
      line-height: 28px;
    }
  }
`,
);

export const ContactFormTitle = styled.h3(
  ({ theme: { medias } }) => `
  ${Header3};
  @media ${medias.mobile} {
    ${Header5};
  }
`,
);

export const ContactFormDescription = styled.p(
  ({ theme: { medias } }) => `
  ${ParagraphBody};
  @media ${medias.mobile} {
    ${ParagraphSmall};
  }
`,
);

export const Form = styled.form(
  ({ theme: { medias } }) => `
  width: 588px;
  margin-top: 37px;

  @media ${medias.mobile} {
    width: 80%;
    min-width: 295px;
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,
);

export const ContactFormLabel = styled.label(
  ({ theme: { medias } }) => `
  margin-top: 15px;

  @media ${medias.mobile}{
    margin-top: 12px;
  }
`,
);

export const ContactFormLabelParagraph = styled.p(
  ({ theme: { color } }) => `
  ${ParagraphSmall};
  color: ${color.navy}
`,
);

export const InputRow = styled.div(
  ({ theme: { medias }, spaceBetween, isTerms }) => `
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${spaceBetween && 'space-between'};

  margin-top: ${isTerms && '12px'};

  @media ${medias.mobile} {
    margin-top: ${isTerms && '30px'};
    flex-direction: ${!isTerms && 'column'};
  }
`,
);

export const NameInput = styled(Input)(
  ({ theme: { medias } }) => `
  width: 282px;
  height: 48px;
  margin-right: 0;

  @media ${medias.mobile} {
    width: 100%;
  }
`,
);
export const FullWidthInput = styled(Input)(
  ({ theme: { medias } }) => `
  width: 588px;
  height: 48px;
  margin-right: 0;

  @media ${medias.mobile} {
    width: 100%;
  }
`,
);
export const ContentInput = styled(TextArea)(
  ({ theme: { medias } }) => `
  width: 588px;
  height: 221px;

  @media ${medias.mobile} {
    width: 89%;
    height: 125px;
  }
`,
);
export const StyledCheckbox = styled(Checkbox)`
  margin-right: 16px;
`;

export const RODOContainer = styled.div`
  position: relative;
`;

export const RODO = styled.p(
  ({ theme: { medias, color } }) => `
  ${ParagraphSmall};
  color: ${color.steelTints.steel70};

  @media ${medias.mobile} {
    width: 240px;

    font-size: 12px;
    line-height: 15px;
  }
`,
);
export const RODOLink = styled.a`
  color: inherit;
  cursor: pointer;
  font-weight: 700;
  text-decoration: underline;
`;

export const SubmitButton = styled(PrimaryButton)(
  ({ theme: { medias } }) => `
  width: 187px;
  height: 48px;

  margin-top: 37px;
  margin-left: auto;

  @media ${medias.mobile} {
    width: 154px;
    height: 36px;

    margin-right: auto;
  }
`,
);

export const StyledSuccessIcon = styled(SuccessIcon)`
  margin-right: 10px;
`;
export const StyledErrorIcon = styled(ErrorIcon)`
  margin-right: 10px;
`;

const StatusButton = styled.button(
  ({ theme: { medias, color } }) => `
  width: 100%;
  height: 48px;

  margin-top: 37px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 26px;

  cursor: pointer;
  ${ButtonBigText}
  color: ${color.white};

  @media ${medias.mobile} {
    height: 36px;
    ${ButtonSmallText}
    svg {
      width: 20px;
      height: 20px;
    }
  }
`,
);

export const SuccessButton = styled(StatusButton)(
  ({ theme: { color } }) => `
  background-color: ${color.misc.successGreen};
`,
);
export const ErrorButton = styled(StatusButton)(
  ({ theme: { color } }) => `
  background-color: ${color.misc.errorRed};
`,
);

export const ZIPCode = styled.input`
  position: absolute;
  z-index: -1;
`;
