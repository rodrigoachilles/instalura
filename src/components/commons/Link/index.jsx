import get from 'lodash/get';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: inherit;
  ${({ theme, color }) => (color
    ? `color: ${get(theme, `colors.${color}.color`)}`
    : 'color: inherit;')};
  text-decoration: none;
  opacity: 1;
  transition: opacity ${({ theme }) => theme.transition};
  &:hover,
  &:focus {
    opacity: .5;
  }
`;

const Link = ({ children, href, ...props }) => (
  <NextLink href={href} passHref>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <StyledLink {...props}>
      {children}
    </StyledLink>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Link;
