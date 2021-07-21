import styled, { css } from 'styled-components';
import { UserCircle } from 'styled-icons/heroicons-solid';
import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';

const margin = {
  xs: '16px',
  sm: '30px',
  md: '80px',
  lg: '240px',
  xl: '340px',
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-grow: 0;

  ${breakpointsMedia({
    xs: css`
      margin-left: ${margin.xs};
      margin-right: ${margin.xs};
      margin-top: 24px;
      margin-bottom: 93px;
      align-items: center;
    `,
    sm: css`
      margin-left: ${margin.sm};
      margin-right: ${margin.sm};
    `,
    md: css`
      margin-left: ${margin.md};
      margin-right: ${margin.md};
      margin-top: 60px;
      margin-bottom: 60px;
    `,
    lg: css`
      margin-left: ${margin.lg};
      margin-right: ${margin.lg};
    `,
    xl: css`
      margin-left: ${margin.xl};
      margin-right: ${margin.xl};
    `,
  })}

  img {
    z-index: 1;
    border-radius: 50%;
    float: none;

    ${breakpointsMedia({
      xs: css`
        width: 88px;
      `,
      md: css`
        width: 188px;
      `,
    })}
  }

  img :hover {
    opacity: 0.8;
  }
`;

HeaderWrapper.Name = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  ${breakpointsMedia({
    xs: css`
      position: fixed;
      left: ${margin.xs};
      margin-right: 30%;
      top: 176px;
    `,
    sm: css`
      left: ${margin.sm};
    `,
    md: css`
      position: inherit;
      margin-right: 10%;
    `,
  })}
`;

export const UserCircleIcon = styled(UserCircle)`
  ${breakpointsMedia({
    xs: css`
      width: 88px;
      height: 88px;
    `,
    md: css`
      width: 188px;
      height: 188px;
    `,
  })}
`;

export default HeaderWrapper;
