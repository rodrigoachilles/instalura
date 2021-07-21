import styled, { css } from 'styled-components';
import { Github } from 'styled-icons/remix-line';

const GithubProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 0;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;

  img {
    z-index: 1;
    border-radius: 50%;
    float: none;
    width: 48px;

    ${({ myProfile }) =>
      myProfile &&
      css`
        width: 64px;
      `};
  }

  img :hover {
    opacity: 0.8;
  }
`;

export const GithubIcon = styled(Github)`
  margin-rigth: 10px;
  color: #fb7b6b;
  width: 24px;
  height: 24px;
`;

export default GithubProfileWrapper;
