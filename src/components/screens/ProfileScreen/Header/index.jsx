/* eslint-disable no-underscore-dangle */
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '../../../foundation/layout/Box';
import Text from '../../../foundation/Text';
import HeaderWrapper from './styles';

export default function Header({ user, photo }) {
  const abbreviateNumber = (num, numFixed) => {
    if (num === null) {
      return null;
    }
    if (num === 0) {
      return '0';
    }
    const fixed = !numFixed || numFixed < 0 ? 0 : numFixed;
    const b = num.toPrecision(2).split('e');
    const k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3);
    const c =
      k < 1 ? num.toFixed(0 + fixed) : num / (10 ** (k * 3)).toFixed(1 + fixed);
    const d = c < 0 ? c : Math.abs(c);
    return d + ['', 'k', 'm', 'b', 't'][k];
  };

  return (
    <HeaderWrapper>
      <Image
        src={photo.photoUrl}
        alt={photo.description}
        width="200px"
        height="200px"
      />

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
            {user.name}
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
