import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Logo from '../../../theme/Logo';
import Button from '../Button';
import MenuLoggedWrapper, {
  AddCircleIcon,
  Form,
  HeartIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from './styles/MenuLoggedWrapper';

export default function MenuLogged({ onUploadImageClick }) {
  const [search, setSearch] = useState('');

  const handleChange = (event) => {
    const searchValue = event.target.getAttribute('pesquisar');
    setSearch(searchValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <MenuLoggedWrapper>
      <MenuLoggedWrapper.LeftSide>
        <Logo />
      </MenuLoggedWrapper.LeftSide>
      <MenuLoggedWrapper.RightSide>
        <Form onSubmit={handleSubmit}>
          <Form.Button ghost padding={{ xs: '0', md: '0' }}>
            <SearchIcon />
          </Form.Button>
          <Form.TextField
            placeholder="Pesquisar"
            name="pesquisar"
            value={search}
            onChange={handleChange}
            display={{ xs: 'none', md: 'inherit' }}
            fontSize="12px"
          />
        </Form>
        <Button
          name="addPost"
          ghost
          variant="secondary.light"
          onClick={onUploadImageClick}
          order={{ xs: 3, md: 2 }}
          padding={{ xs: '0', md: '0' }}
          margin={0}
        >
          <AddCircleIcon />
        </Button>
        <Button
          ghost
          order={{ xs: 1, md: 3 }}
          padding={{ xs: '0', md: '0' }}
          margin={0}
          href="/app/feed"
        >
          <HomeIcon />
        </Button>
        <Button
          ghost
          order={{ xs: 4, md: 4 }}
          padding={{ xs: '0', md: '0' }}
          margin={0}
        >
          <HeartIcon />
        </Button>
        <Button
          ghost
          order={{ xs: 5, md: 5 }}
          padding={{ xs: '0', md: '0' }}
          margin={0}
          href="/app/profile"
        >
          <UserIcon />
        </Button>
      </MenuLoggedWrapper.RightSide>
    </MenuLoggedWrapper>
  );
}

MenuLogged.propTypes = {
  onUploadImageClick: PropTypes.func.isRequired,
};
