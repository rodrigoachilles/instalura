import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import propToStyle from '../../../theme/utils/propToStyle';
import Text from '../../foundation/Text';

const InputWrapper = styled.div`
  ${propToStyle('marginBottom')}
  ${propToStyle('display')}
`;

const Input = styled(Text)`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.tertiary.light.color};
  padding: 12px 16px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${propToStyle('fontSize')}

  ${({ theme, isFieldInvalid }) => isFieldInvalid && css`
    border-color: ${theme.colors.error.main.color};
    & + span {
      color: ${theme.colors.error.main.color};
      font-size: 11px;
    }
  `}
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

export default function TextField({
  placeholder,
  name,
  onChange,
  value,
  error,
  isTouched,
  ...props
}) {
  const hasError = Boolean(error);
  const isFieldInvalid = hasError && isTouched;

  return (
    <InputWrapper
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      <Input
        type="text"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        isFieldInvalid={isFieldInvalid}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
      />

      {isFieldInvalid && (
        <Text
          variant="smallestException"
          color="error.main"
          role="alert"
        >
          {error}
        </Text>
      )}
    </InputWrapper>
  );
}

TextField.defaultProps = {
  error: '',
  isTouched: false,
};

TextField.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isTouched: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
