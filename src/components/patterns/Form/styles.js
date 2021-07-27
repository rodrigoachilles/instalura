import styled from 'styled-components';
import { Close } from 'styled-icons/evaicons-solid';

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
