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
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 37px;
  right: 37px;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 48px;
  padding-bottom: 48px;

  align-items: center;

  overflow: auto;
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
`;

export const Form = styled.form`
  width: 588px;
  margin-top: 37px;
  color: ${(props) => props.theme.color.navy};
`;

export const InputRow = styled.div`
  width: 588px;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  justify-content: ${(props) => props.spaceBetween && 'space-between'};
`;

export const NameInput = styled(Input)`
  width: 282px;
  height: 48px;
  margin-top: 5px;
  margin-right: 0;
`;
export const EmailInput = styled(Input)`
  width: 588px;
  height: 48px;
  margin-top: 5px;
  margin-right: 0;
`;
export const ContentInput = styled(TextArea)`
  width: 588px;
  height: 221px;
  margin-top: 5px;
  resize: none;
`;
export const StyledCheckbox = styled(Checkbox)`
  margin-right: 16px;
`;

export const RODOContainer = styled.div`
  position: relative;
`;

export const RODO = styled(ParagraphSmall)`
  color: ${(props) => props.theme.color.steelTints.steel70};
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
`;

export const LoadingButton = styled(SubmitButton)`
  width: 187px;
  height: 48px;
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
