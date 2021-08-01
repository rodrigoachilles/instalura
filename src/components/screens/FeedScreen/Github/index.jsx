/* eslint-disable no-underscore-dangle */
import React from 'react';
import Loading from '../../../commons/Loading';
import Box from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';
import GithubProfile from './GithubProfile';
import useGithub from './hook/useGithub';
import GithubWrapper from './styles';

export default function Github() {
  const dados = useGithub();

  return (
    <GithubWrapper>
      {dados.loading && <Loading />}
      {!dados.loading && dados.data && (
        <Box display="flex" flexDirection="column" flexWrap="wrap">
          {!dados.data.user && (
            <Box display="flex" flexDirection="column">
              <Text variant="paragraph" color="error.main">
                Reposítório do GitHub não encontrado!
              </Text>
            </Box>
          )}
          {dados.data.user && (
            <GithubProfile user={dados.data.user} myProfile />
          )}

          <Text
            variant="paragraph1Bold"
            color="tertiary.light"
            marginTop="25px"
            marginBottom="15px"
          >
            Projetos da galera
          </Text>

          {!dados.data.followings && (
            <Box display="flex" flexDirection="column">
              <Text variant="paragraph" color="error.main">
                Repositórios não encontrado!
              </Text>
            </Box>
          )}
          {dados.data.followings &&
            dados.data.followings.map((user) => (
              <GithubProfile user={user} key={user.id} />
            ))}
          {/* <pre>{JSON.stringify(dados.data, null, 4)}</pre> */}
        </Box>
      )}
      {!dados.loading && dados.error && (
        <Box display="flex" flex="1" flexDirection="column" flexWrap="wrap">
          <Text variant="paragraph" color="error.main">
            {dados.error}
          </Text>
          <Text variant="paragraph">
            Por favor, tente novamente mais tarde!
          </Text>
        </Box>
      )}
    </GithubWrapper>
  );
}
