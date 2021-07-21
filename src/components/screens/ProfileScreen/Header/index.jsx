/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import abbreviateNumber from '../../../../theme/utils/abbreviateNumber';
import Box from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';
import HeaderWrapper, { UserCircleIcon } from './styles';

export default function Header({ user, photo }) {
  return (
    <HeaderWrapper>
      {photo && (
        <Image
          src={photo.photoUrl}
          alt={photo.description}
          width="200px"
          height="200px"
        />
      )}
      {!photo && <UserCircleIcon />}

      <Box
        display="flex"
        flex="1"
        flexDirection="column"
        alignContent="space-between"
        marginLeft={{ xs: '10px', md: '40px' }}
        marginRight={{ xs: '10px', md: '40px' }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="stretch"
          flexWrap="wrap"
          marginBottom={{ md: '30px' }}
        >
          <Box display="flex" flexDirection="column">
            <Text
              variant="profileHeader"
              color="tertiary.main"
              marginBottom="4px"
            >
              {abbreviateNumber(user.publicacoes, 0)}
            </Text>
            <Text variant="paragraphStats" color="tertiary.light">
              Publicações
            </Text>
          </Box>
          <Box display="flex" flexDirection="column">
            <Text
              variant="profileHeader"
              color="tertiary.main"
              marginBottom="4px"
            >
              {abbreviateNumber(user.seguindo, 0)}
            </Text>
            <Text variant="paragraphStats" color="tertiary.light">
              Seguindo
            </Text>
          </Box>
          <Box display="flex" flexDirection="column">
            <Text
              variant="profileHeader"
              color="tertiary.main"
              marginBottom="4px"
            >
              {abbreviateNumber(user.seguidores, 0)}
            </Text>
            <Text variant="paragraphStats" color="tertiary.light">
              Seguidores
            </Text>
          </Box>
        </Box>
        <HeaderWrapper.Name>
          <Text
            variant="profileHeader"
            color="tertiary.main"
            marginBottom="4px"
          >
            {user.name && user.username}
          </Text>
          <Text variant="paragraph" color="tertiary.light">
            A wholesome person responsible for the best movies ever.
          </Text>
        </HeaderWrapper.Name>
      </Box>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    username: PropTypes.string,
    name: PropTypes.string,
    publicacoes: PropTypes.number,
    seguindo: PropTypes.number,
    seguidores: PropTypes.number,
  }).isRequired,
  photo: PropTypes.shape({
    photoUrl: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};
