import styled, { css } from 'styled-components';
import {
  Heart,
  HomeAlt,
  Search,
  UserCircle,
} from 'styled-icons/boxicons-regular';
import { AddCircle } from 'styled-icons/ionicons-solid';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import TextField from '../../../forms/TextField';
import Button from '../../Button';

const MenuLoggedWrapper = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  flex-wrap: wrap;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.colors.tertiary.dark.color};
  width: 100%;
  background-color: #fff;

  ${breakpointsMedia({
    xs: css`
      padding: 0;
      margin: 0;
    `,
    md: css`
      justify-content: space-between;
      width: 100%;
      padding-left: 80px;
      padding-right: 80px;
    `,
    lg: css`
      padding-left: 175px;
      padding-right: 175px;
    `,
  })}
`;

MenuLoggedWrapper.LeftSide = styled.div`
  margin: 0;
  order: 1;
  padding-top: 32px;
  padding-bottom: 32px;

  ${breakpointsMedia({
    xs: css`
      padding-top: 12px;
      padding-bottom: 12px;
      display: flex;
      flex: 1;
      justify-content: center;
    `,
    md: css`
      flex-grow: 1;
      display: block;
      order: initial;
      padding-right: 16px;
    `,
  })}
`;

MenuLoggedWrapper.RightSide = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: space-evenly;

  ${breakpointsMedia({
    xs: css`
      padding-top: 12px;
      padding-bottom: 12px;
      padding-left: 0;
      padding-right: 0;
      order: 1;
      position: fixed;
      width: 100%;
      bottom: 0;
      background: #fff;
      box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.04);
      align-items: center;
    `,
    md: css`
      position: initial;
      align-items: center;
    `,
  })}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${breakpointsMedia({
    xs: css`
      border: none;
    `,
    md: css`
      flex: 1;
      align-items: center;
      border: 1px solid #88989e;
      width: 250px;
      height: 40px;
    `,
  })}
`;

Form.TextField = styled(TextField)`
  padding: 0;
  padding-left: 15px;
  border: none;

  &:focus {
    outline: none;
  }
`;

Form.Button = styled(Button)`
  ${breakpointsMedia({
    xs: css`
      width: 24px;
      height: 24px;
      border: none;
    `,
    md: css`
      width: 20px;
      height: 20px;
      color: #88989e;
      padding-left: 15px;
    `,
  })}
`;

export const SearchIcon = styled(Search)`
  ${breakpointsMedia({
    xs: css`
      width: 24px;
      height: 24px;
    `,
    md: css`
      width: 20px;
      height: 20px;
      color: #88989e;
    `,
  })}
`;

const icon = {
  xs: {
    width: '24px',
    height: '24px',
  },
  md: {
    width: '32px',
    height: '32px',
    marginLeft: '30px',
  },
};

export const AddCircleIcon = styled(AddCircle)`
  ${breakpointsMedia({
    xs: css`
      width: 40px;
      height: 40px;
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
      margin-left: ${icon.md.marginLeft};
    `,
  })}
`;

export const HomeIcon = styled(HomeAlt)`
  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
      margin-left: ${icon.md.marginLeft};
    `,
  })}
`;

export const HeartIcon = styled(Heart)`
  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
      margin-left: ${icon.md.marginLeft};
    `,
  })}
`;

export const UserIcon = styled(UserCircle)`
  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
      margin-left: ${icon.md.marginLeft};
    `,
  })}
`;

export default MenuLoggedWrapper;
