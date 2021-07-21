import PropTypes from 'prop-types';
import React from 'react';
import Lottie from 'react-lottie-player';
import Box from '../../foundation/layout/Box';
import loadingAnimation from './animations/loading.json';

export default function Loading(props) {
  const { width, height } = props;

  return (
    <Box display="flex" flex="1" alignItems="center" justifyContent="center">
      {/* https://lottiefiles.com/315-loader-ring */}
      <Lottie
        animationData={loadingAnimation}
        loop
        play
        style={{ width, height }}
      />
    </Box>
  );
}

Loading.defaultProps = {
  width: '100px',
  height: '100px',
};

Loading.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
};
