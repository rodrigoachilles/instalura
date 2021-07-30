/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
// import Lottie from 'react-lottie-player';
import postService from '../../../../services/post';
import abbreviateNumber from '../../../../theme/utils/abbreviateNumber';
import Button from '../../../commons/Button';
import Loading from '../../../commons/Loading';
import Box from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';
// import heartsAnimation from './animations/hearts.json';
import usePosts from './hook/usePosts';
import PostsWrapper, {
  BookmarkIcon,
  DislikeIcon,
  Figure,
  HeartDislikeIcon,
  HeartIcon,
  LikeIcon,
  MessageRoundedIcon,
  PaperPlaneIcon,
  SuitHeartFillIcon,
  ThreeDotsIcon,
  UserCircleIcon,
} from './styles';

export default function Posts({ user, users }) {
  const dados = usePosts({ users });
  const post = postService(null);
  const [posts, setPosts] = useState();
  // const [playHearts, setPlayHearts] = useState(false);

  useEffect(() => {
    if (dados.data) {
      setPosts(dados.data.posts);
    }
  }, [dados.data]);

  const handleLike = async (event) => {
    event.preventDefault();

    const postId = event.currentTarget.getAttribute('id');
    const responseLike = await post.like({ postId });

    if (responseLike) {
      // setPlayHearts(true);

      const findUser = (userId) =>
        users.filter((user) => user._id === userId)[0];
      for (const like of responseLike.likes) {
        like.user = findUser(like.user);
      }

      setPosts(
        posts.map((post) => {
          if (post._id === postId) {
            post.likes = responseLike.likes;
          }
          return post;
        }),
      );
    } else {
      setPosts(
        posts.map((post) => {
          if (post._id === postId) {
            post.likes = post.likes.filter((like) => like.user._id !== user.id);
          }
          return post;
        }),
      );
    }
  };

  const findLike = (likes) => {
    return likes.filter((like) => like.user._id === user.id).length === 0;
  };

  return (
    <>
      {dados.loading && <Loading />}
      {!dados.loading && posts && (
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="center"
        >
          {posts && posts.length === 0 && (
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text variant="paragraph" color="error.main">
                Nenhuma foto postada!
              </Text>
            </Box>
          )}
          {posts &&
            posts.length !== 0 &&
            posts.map((post) => (
              <PostsWrapper key={post._id}>
                <PostsWrapper.Header>
                  <Box
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <UserCircleIcon />
                    <Text variant="subTitle">{post.user.username}</Text>
                  </Box>
                  <Box display="flex" flexDirection="row" flexWrap="wrap">
                    <ThreeDotsIcon />
                  </Box>
                </PostsWrapper.Header>
                <PostsWrapper.Like onClick={handleLike} id={post._id}>
                  {findLike(post.likes) && <LikeIcon />}
                  {!findLike(post.likes) && <DislikeIcon />}
                  {/* https://lottiefiles.com/53203-hearts */}
                  {/* <Lottie
                    animationData={heartsAnimation}
                    loop={false}
                    play={playHearts}
                    style={{
                      width: 500,
                      height: 500,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      zIndex: 2,
                    }}
                  /> */}
                  <Figure className={`filter-${post.filter}`}>
                    <Image
                      alt={post.description}
                      src={post.photoUrl}
                      width="500px"
                      height="500px"
                    />
                  </Figure>
                </PostsWrapper.Like>
                <PostsWrapper.Stats>
                  <Box
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <HeartIcon />
                    <Text
                      variant="paragraph"
                      color="tertiary.main"
                      marginRight="15px"
                    >
                      {abbreviateNumber(post.likes.length, 0)}
                    </Text>

                    <MessageRoundedIcon />
                    <Text
                      variant="paragraph"
                      color="tertiary.main"
                      marginRight="15px"
                    >
                      1.2k
                    </Text>

                    <PaperPlaneIcon />
                  </Box>
                  <Box display="flex" flexDirection="row" flexWrap="wrap">
                    <BookmarkIcon />
                  </Box>
                </PostsWrapper.Stats>
                <PostsWrapper.Likes>
                  <Box display="flex" flexDirection="row" flexWrap="wrap">
                    {post.likes.length !== 0 &&
                      post.likes.slice(0, 3).map((like, index) => (
                        // <Box key={like.id}>{like.user.username}</Box>
                        <SuitHeartFillIcon key={like._id} index={index} />
                      ))}
                    {post.likes.length === 0 && <HeartDislikeIcon />}
                  </Box>
                  <Box display="flex" flexDirection="row" flexWrap="wrap">
                    {post.description.substring(0, 20)}...
                  </Box>
                  <Button ghost color="borders.light">
                    Mais
                  </Button>
                </PostsWrapper.Likes>
              </PostsWrapper>
            ))}
        </Box>
      )}
      {!dados.loading && dados.error && (
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="paragraph" color="error.main">
            {dados.error}
          </Text>
          <Text variant="paragraph">
            Por favor, tente novamente mais tarde!
          </Text>
        </Box>
      )}
      {/* <pre>{JSON.stringify(dados.data, null, 4)}</pre> */}
    </>
  );
}
