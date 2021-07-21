/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import React from 'react';
import abbreviateNumber from '../../../../theme/utils/abbreviateNumber';
import Button from '../../../commons/Button';
import Loading from '../../../commons/Loading';
import Box from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';
import usePosts from './hook/usePosts';
import PostsWrapper, {
  BookmarkIcon,
  HeartDislikeIcon,
  HeartIcon,
  MessageRoundedIcon,
  PaperPlaneIcon,
  SuitHeartFillIcon,
  ThreeDotsIcon,
  UserCircleIcon,
} from './styles';

export default function Posts() {
  const dados = usePosts();

  return (
    <>
      {dados.loading && <Loading />}
      {!dados.loading && dados.data && (
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          justifyContent="center"
        >
          {dados.data.posts && dados.data.posts.length === 0 && (
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
          {dados.data.posts &&
            dados.data.posts.length !== 0 &&
            dados.data.posts.reverse().map((post) => (
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
                <Image
                  alt={post.description}
                  src={post.photoUrl}
                  width="500px"
                  height="500px"
                />
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
                        <SuitHeartFillIcon key={like.id} index={index} />
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
