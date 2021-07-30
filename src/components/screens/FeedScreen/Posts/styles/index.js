import styled, { css } from 'styled-components';
import { SuitHeartFill, ThreeDots } from 'styled-icons/bootstrap';
import { Bookmark, Heart, MessageRounded } from 'styled-icons/boxicons-regular';
import { UserCircle } from 'styled-icons/heroicons-solid';
import { PaperPlane } from 'styled-icons/ionicons-outline';
import { HeartDislike } from 'styled-icons/ionicons-sharp';
import breakpointsMedia from '../../../../../theme/utils/breakpointsMedia';

const icon = {
  xs: {
    width: '24px',
    height: '24px',
  },
  md: {
    width: '32px',
    height: '32px',
  },
};

export const UserCircleIcon = styled(UserCircle)`
  margin-right: 10px;

  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
    `,
  })}
`;

export const ThreeDotsIcon = styled(ThreeDots)`
  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
    `,
  })}
`;

export const HeartIcon = styled(Heart)`
  margin-right: 10px;

  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
    `,
  })}
`;

export const MessageRoundedIcon = styled(MessageRounded)`
  margin-left: 5px;
  margin-right: 10px;

  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
    `,
  })}
`;

export const PaperPlaneIcon = styled(PaperPlane)`
  margin-left: 5px;

  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
    `,
  })}
`;

export const BookmarkIcon = styled(Bookmark)`
  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
    `,
  })}
`;

export const SuitHeartFillIcon = styled(SuitHeartFill)`
  position: relative;
  left: -${({ index }) => index * 20}%;
  color: #88989e;

  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
    `,
  })}
`;

export const HeartDislikeIcon = styled(HeartDislike)`
  color: #88989e;

  ${breakpointsMedia({
    xs: css`
      width: ${icon.xs.width};
      height: ${icon.xs.height};
    `,
    md: css`
      width: ${icon.md.width};
      height: ${icon.md.height};
    `,
  })}
`;

export const LikeIcon = styled(Heart)`
  color: black;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 1;
`;

export const DislikeIcon = styled(SuitHeartFill)`
  color: red;
  width: 70px;
  height: 70px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: none;
  z-index: 1;
`;

const PostsWrapper = styled.div`
  margin-top: 4px;
  margin-bottom: 4px;
`;

PostsWrapper.Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-between;
  padding: 3% 5%;
`;

PostsWrapper.Stats = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 3% 5%;
`;

PostsWrapper.Likes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 3% 5%;
`;

export const Figure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  z-index: 0;
`;

PostsWrapper.Like = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
  cursor: pointer;
  position: relative;

  &:hover,
  &:focus {
    opacity: 0.9;

    & > svg {
      display: inline;
    }
  }
`;

export default PostsWrapper;
