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
  width: 74.8rem;
  height: fit-content;

  margin-top: ${!isInModal && '18.0rem'};

  background-color: ${color.white};
  box-shadow: 3.38443rem 5.58976rem 8.0rem rgba(97, 121, 139, 0.07),
    1.71337rem 2.82982rem 3.4875rem rgba(97, 121, 139, 0.04725),
    .0676885rem 1.11795rem 1.3rem rgba(97, 121, 139, 0.035),
    .0148069rem 2.44552rem 4.625rem rgba(97, 121, 139, 0.02275);
  border-radius: 1.6rem;

  @media ${medias.mobile} {
    width: 80%;
    min-width: 30.0rem;
    margin-top: ${!isInModal && '4.6rem'};
    margin-bottom: 9rem;

  }

  @media (max-width: 42.0rem) {
    width: 80%;
    max-width: 33.7rem;
    min-width: 27.8rem;
  }
`,
);

export const CloseButton = styled(IconButton)(
  ({ theme: { medias } }) => `
  position: absolute;
  top: 3.7rem;
  right: 3.7rem;

  @media ${medias.mobile} {
    top: 2.0rem;
    right: 2.4rem;
  }
`,
);

export const ContactFormContent = styled.div(
  ({ theme: { medias }, isInModal }) => `
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 4.8rem;
  padding-bottom: 4.8rem;

  align-items: center;

  overflow: auto;

  @media ${medias.mobile} {
    padding-top: ${isInModal ? '5.6rem' : '3.2rem'};
    padding-bottom: 3.2rem;
  }
`,
);

export const TopSection = styled.div(
  ({ theme: { medias } }) => `
  width: 58.8rem;
  text-align: center;

  @media ${medias.mobile} {
    width: 80%;
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
  width: 58.8rem;
  margin-top: 3.7rem;

  @media ${medias.mobile} {
    width: 80%;
    margin-top: 2.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,
);

export const ContactFormLabel = styled.label(
  ({ theme: { medias } }) => `
  margin-top: 1.5rem;

  @media ${medias.mobile}{
    margin-top: 1.2rem;
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

  margin-top: ${isTerms && '1.2rem'};

  @media ${medias.mobile} {
    margin-top: ${isTerms && '3.0rem'};
    flex-direction: ${!isTerms && 'column'};
  }
`,
);

export const NameInput = styled(Input)(
  ({ theme: { medias } }) => `
  width: 28.2rem;
  margin-right: 0;

  @media ${medias.mobile} {
    width: 100%;
  }
`,
);
export const FullWidthInput = styled(Input)(
  ({ theme: { medias } }) => `
  width: 58.8rem;
  margin-right: 0;

  @media ${medias.mobile} {
    width: 100%;
  }
`,
);
export const ContentInput = styled(TextArea)(
  ({ theme: { medias } }) => `
  width: 58.8rem;
  height: 22.1rem;

  @media ${medias.mobile} {
    width: 89%;
    height: 12.5rem;
  }
`,
);
export const StyledCheckbox = styled(Checkbox)`
  margin-right: 1.6rem;
`;

export const RODOContainer = styled.div`
  width: 100%;
`;

export const RODO = styled.p(
  ({ theme: { medias, color } }) => `
  ${ParagraphSmall};
  color: ${color.steelTints.steel70};

  @media ${medias.mobile} {
    width: 100%;

    font-size: 1.2rem;
    line-height: 1.5rem;
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
  width: 18.7rem;
  height: 4.8rem;

  margin-top: 3.7rem;
  margin-left: auto;

  @media ${medias.mobile} {
    width: 15.4rem;
    height: 3.6rem;

    margin-right: auto;
  }
`,
);

export const StyledSuccessIcon = styled(SuccessIcon)`
  margin-right: 1rem;
`;
export const StyledErrorIcon = styled(ErrorIcon)`
  margin-right: 1rem;
`;

const StatusButton = styled.button(
  ({ theme: { medias, color } }) => `
  width: 100%;
  height: 4.8rem;

  margin-top: 3.7rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 2.6rem;

  cursor: pointer;
  ${ButtonBigText}
  color: ${color.white};

  @media ${medias.mobile} {
    height: 3.6rem;
    ${ButtonSmallText}
    svg {
      width: 2.0rem;
      height: 2.0rem;
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
