/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React from 'react';
import useUserService from '../../../services/user/hook/useUserService';
import Loading from '../../commons/Loading';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import Header from './Header';
import Posts from './Posts';

export default function ProfileScreen({ user }) {
  const dados = useUserService.getProfilePage();

  return (
    <>
      {dados.loading && <Loading />}
      {!dados.loading && dados.data && (
        <>
          <Header
            user={{ ...user, ...dados.data.user }}
            photo={dados.data.posts.filter((post) => user.id === post.user)[0]}
          />
          <Posts
            posts={dados.data.posts.filter((post) => user.id === post.user)}
          />
        </>
      )}
      {!dados.loading && dados.error && (
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text variant="paragraph1" color="error.main">
            {dados.error}
          </Text>
          <Text variant="paragraph1">
            Por favor, tente novamente mais tarde!
          </Text>
        </Box>
      )}
      {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}
      {/* <pre>{JSON.stringify(dados.data, null, 4)}</pre> */}
    </>
  );
}

ProfileScreen.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    publicacoes: PropTypes.number,
    seguindo: PropTypes.number,
    seguidores: PropTypes.number,
  }).isRequired,
};
