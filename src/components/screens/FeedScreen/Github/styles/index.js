import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';

const GithubWrapper = styled.div`
  margin-left: 10px;

  ${breakpointsMedia({
    xs: css`
      display: none;
    `,
    md: css`
      display: flex;
    `,
  })}
`;

export default GithubWrapper;
