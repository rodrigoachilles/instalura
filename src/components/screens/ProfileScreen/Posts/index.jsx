/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../../../foundation/layout/Box';

const margin = {
  xs: '16px',
  sm: '20px',
  md: '60px',
  lg: '160px',
  xl: '250px',
};

export default function Posts({ posts }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      flexWrap="nowrap"
      marginLeft={margin}
      marginRight={margin}
    >
      <Box display="flex" flexDirection="row" flexWrap="wrap">
        {posts.reverse().map((post) => (
          <Box flex="1 0 25%" margin={{ xs: '4px', md: '10px' }} key={post._id}>
            <Image
              alt={post.description}
              src={post.photoUrl}
              width="279px"
              height="279px"
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      photoUrl: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    }),
  ),
};
