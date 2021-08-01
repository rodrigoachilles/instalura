/* eslint-disable no-underscore-dangle */
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../../foundation/layout/Box';
import Github from './Github';
import Posts from './Posts';

const margin = {
  xs: '0px',
  sm: '30px',
  md: '60px',
  lg: '100px',
  xl: '150px',
};

export default function FeedScreen({ user, users }) {
  return (
    <Box
      display="flex"
      flex="1 0 20%"
      flexDirection="row"
      marginTop={{ xs: '0px', md: '25px' }}
      marginLeft={margin}
      marginRight={margin}
      marginBottom={{ xs: '100px', md: '0px' }}
      justifyContent="space-between"
    >
      <Posts user={user} users={users} />
      <Github />
    </Box>
  );
}

FeedScreen.propTypes = {
  users: PropTypes.any.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};
