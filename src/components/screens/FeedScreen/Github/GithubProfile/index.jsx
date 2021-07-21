/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../../../../foundation/layout/Box';
import Text from '../../../../foundation/Text';
import GithubProfileWrapper, { GithubIcon } from './styles';

export default function GithubProfile({ user, myProfile }) {
  return (
    <GithubProfileWrapper>
      <Box display="flex" flex="1" flexDirection="row" flexWrap="wrap">
        <Image
          alt={user.name}
          src={user.avatar_url}
          width="100px"
          height="100px"
        />
        <Box
          display="flex"
          flexDirection="column"
          flexWrap="wrap"
          marginLeft="15px"
        >
          <Text variant="paragraph" color="tertiary.main">
            {user.login}
          </Text>
          <Text variant="paragraph2" color="tertiary.light">
            {user.name}
          </Text>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        alignItems="flex-end"
        justifyContent="center"
        marginLeft="20px"
      >
        <GithubIcon />
        <Text
          variant="paragraph1Bold"
          color="secondary.light"
          href={user.html_url}
        >
          Github
        </Text>
      </Box>
    </GithubProfileWrapper>
  );
}

GithubProfile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    login: PropTypes.string,
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
  }).isRequired,
  myProfile: PropTypes.bool,
};
