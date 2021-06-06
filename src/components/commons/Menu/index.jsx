import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../../../theme/Logo';
import Text from '../../foundation/Text';
import Button from '../Button';
import MenuWrapper from './styles/MenuWrapper';

export default function Menu({ onCadastrarClick }) {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftSide>
        <Logo />
      </MenuWrapper.LeftSide>
      <MenuWrapper.CentralSide as="ul">
        {[
          { url: '/', name: 'Home' },
          { url: '/faq', name: 'Perguntas Frequentes' },
          { url: '/sobre', name: 'Sobre' },
        ].map((link) => (
          <li key={link.url}>
            <Text variant="smallestException" tag="a" href={link.url}>
              {link.name}
            </Text>
          </li>
        ))}
      </MenuWrapper.CentralSide>
      <MenuWrapper.RightSide>
        <Button ghost variant="secondary.main" padding={{ md: '12px 43px' }} href="/app/login">
          Entrar
        </Button>
        <Button variant="primary.main" padding={{ md: '12px 43px' }} onClick={onCadastrarClick}>
          Cadastrar
        </Button>
      </MenuWrapper.RightSide>
    </MenuWrapper>
  );
}

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
