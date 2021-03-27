import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';
import Link from '../../commons/Link';

const paragraph1 = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${theme.typographyVariants.paragraph1.lineHeight};
  `}
`;

const smallestException = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.smallestException.fontSize};
    font-weight: ${theme.typographyVariants.smallestException.fontWeight};
    line-height: ${theme.typographyVariants.smallestException.lineHeight};
  `}
`;

const title = css`
  ${({ theme }) => css`
    font-size: ${theme.typographyVariants.titleXS.fontSize};
    font-weight: ${theme.typographyVariants.titleXS.fontWeight};
    line-height: ${theme.typographyVariants.titleXS.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typographyVariants.title.fontSize};
        font-weight: ${theme.typographyVariants.title.fontWeight};
        line-height: ${theme.typographyVariants.title.lineHeight};
      `}
    `,
  })}
`;

export const TextStyleVariants = {
  smallestException,
  paragraph1,
  title,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariants[variant]}
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  
  ${propToStyle('textAlign')}
`;

export default function Text({
  tag,
  href,
  variant,
  children,
  ...props
}) {
  if (href) {
    return (
      <TextBase
        as={Link}
        variant={variant}
        href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      >
        {children}
      </TextBase>
    );
  }

  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </TextBase>
  );
}

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
};

Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
};
