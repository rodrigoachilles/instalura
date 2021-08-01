import styled, { css } from 'styled-components';
import {
  ArrowForwardOutline,
  ImageOutline,
} from 'styled-icons/evaicons-outline';
import { Close } from 'styled-icons/evaicons-solid';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
// import Button from '../../commons/Button';
import TextField from '../../forms/TextField';

const FormUploadImagemWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background.light.color};
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 375px;
  max-height: 600px;

  ${breakpointsMedia({
    xs: css`
      max-height: 690px;
    `,
    sm: css`
      border-radius: 8px;
      margin: 15px 20%;
    `,
    md: css`
      margin: 15px 25%;
    `,
    lg: css`
      margin: 15px 30%;
    `,
    xl: css`
      margin: 15px 35%;
    `,
  })}
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;

  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}

  ${propToStyle('maxWidth')}
  ${propToStyle('maxHeight')}

  ${propToStyle('cursor')}
`;

export const CloseIcon = styled(Close)`
  color: #88989e;
  width: 24px;
  height: 24px;

  &:hover,
  &:focus {
    cursor: pointer;
    opacity: 0.8;
    box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
  }
`;

export const ImageOutlineIcon = styled(ImageOutline)`
  color: ${({ theme }) => theme.colors.borders.dark.color};
  width: 70%;
  height: 70%;
`;

export const ArrowForwardOutlineIcon = styled(ArrowForwardOutline)`
  color: ${({ theme }) => theme.colors.background.light.color};
  width: 24px;
  height: 24px;
`;

export const InputImage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.tertiary.light.color};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-left: 24px;
  margin-right: 24px;
`;

InputImage.TextField = styled(TextField)`
  padding: 0;
  padding-left: 15px;
  border: none;

  &:focus {
    outline: none;
  }
`;

export const Slider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 8px;
  max-width: 359px;
`;

export const Slides = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 8px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  max-width: 359px;
`;

export default FormUploadImagemWrapper;
