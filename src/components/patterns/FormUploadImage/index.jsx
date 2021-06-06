import PropTypes from 'prop-types';
import React from 'react';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';

export default function FormUploadImage({ modalProps }) {
  return (
    <Grid.Row
      marginLeft={0}
      marginRight={0}
      flex={1}
      justifyContent="flex-end"
    >
      <Grid.Col
        display="flex"
        paddingRight={{ md: '0' }}
        flex={1}
        value={{ xs: 12, md: 5, lg: 4 }}
      >
        <Box
          boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          flex={1}
          padding={{
            xs: '16px',
            md: '85px',
          }}
          backgroundColor="white"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...modalProps}
        >
          <p>FORM UPLOAD</p>
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormUploadImage.defaultProps = {
  modalProps: {},
};

FormUploadImage.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  modalProps: PropTypes.object,
};
