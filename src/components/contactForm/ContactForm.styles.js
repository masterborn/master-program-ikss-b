import styled from 'styled-components';
import IconButton from '../buttons/misc/IconButton';
import Input from '../formElements/input';
import { ParagraphSmall } from '../typography/paragraphs';
import PrimaryButton from '../buttons/primaryButton';
import TextArea from '../formElements/textarea';
import Checkbox from '../formElements/checkbox';
import { SuccessIcon, ErrorIcon } from '../icons/misc';

export const ContactFormContainer = styled.div`
  width: 748px;
  height: fit-content;

  margin-top: ${(props) => !props.isModal && '180px'};

  background-color: ${(props) => props.theme.color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
  border-radius: 16px;

  @media (max-width: 550px) {
    width: 80%;
    min-width: 300px;
    margin-top: ${(props) => !props.isModal && '46px'};
  }

  @media (max-width: 420px) {
    width: 100%;
    max-width: 337px;
    min-width: 300px;
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 37px;
  right: 37px;

  @media (max-width: 550px) {
    top: 20px;
    right: 24px;
  }
`;

export const ContactFormContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 48px;
  padding-bottom: 48px;

  align-items: center;

  overflow: auto;

  @media (max-width: 550px) {
    padding-top: ${(props) => (props.isModal ? '56px' : '32px')};
    padding-bottom: 32px;
  }
`;

export const TopSection = styled.div`
  width: 588px;
  text-align: center;
  h3 {
    color: ${(props) => props.theme.color.navy};
  }
  p {
    margin-top: 25px;
    color: ${(props) => props.theme.color.steel};
  }

  @media (max-width: 550px) {
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
`;

export const Form = styled.form`
  width: 588px;
  margin-top: 37px;

  label > p {
    color: ${(props) => props.theme.color.navy};
  }

  @media (max-width: 550px) {
    width: 80%;
    min-width: 295px;
    margin-top: 24px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const InputRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.spaceBetween && 'space-between'};

  label {
    margin-top: 15px;
  }

  @media (max-width: 550px) {
    margin-top: ${(props) => props.areTerms && '12px'};
    flex-direction: ${(props) => !props.areTerms && 'column'};

    label {
      margin-top: 12px;
    }
  }
`;

export const NameInput = styled(Input)`
  width: 282px;
  height: 48px;
  margin-right: 0;

  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const FullWidthInput = styled(Input)`
  width: 588px;
  height: 48px;
  margin-right: 0;

  @media (max-width: 550px) {
    width: 100%;
  }
`;
export const ContentInput = styled(TextArea)`
  width: 588px;
  height: 221px;

  @media (max-width: 550px) {
    width: 92%;
    height: 125px;
  }
`;
export const StyledCheckbox = styled(Checkbox)`
  margin-right: 16px;
`;

export const RODOContainer = styled.div`
  position: relative;
`;

export const RODO = styled(ParagraphSmall)`
  color: ${(props) => props.theme.color.steelTints.steel70};

  @media (max-width: 550px) {
    width: 240px;

    font-size: 12px;
    line-height: 15px;
  }
`;
export const RODOLink = styled.a`
  color: inherit;
  cursor: pointer;
  font-weight: 700;
  text-decoration: underline;
`;

export const SubmitButton = styled(PrimaryButton)`
  width: 187px;
  height: 48px;

  margin-top: 37px;
  margin-left: auto;

  @media (max-width: 550px) {
    width: 154px;
    height: 36px;

    margin-right: auto;
  }
`;

export const StyledSuccessIcon = styled(SuccessIcon)`
  margin-right: 10px;
`;
export const StyledErrorIcon = styled(ErrorIcon)`
  margin-right: 10px;
`;

const StatusButton = styled.button`
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

  color: ${(props) => props.theme.color.white};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;

  @media (max-width: 550px) {
    height: 36px;
    font-size: 14px;
    line-height: 18px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const SuccessButton = styled(StatusButton)`
  background-color: ${(props) => props.theme.color.misc.successGreen};
`;
export const ErrorButton = styled(StatusButton)`
  background-color: ${(props) => props.theme.color.misc.errorRed};
`;

export const ZIPCode = styled.input`
  position: absolute;
  z-index: -1;
`;
