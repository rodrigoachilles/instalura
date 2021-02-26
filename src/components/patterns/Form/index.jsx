import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';

function FormContent() {
  const [userInfo, setUserInfo] = useState({
    usuario: 'usuario',
    email: 'teste@teste.com.br',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  };

  const isFormInvalid = userInfo.usuario.length === 0 || userInfo.email.length === 0;

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      console.log('enviando o formulario');
    }}
    >

      <Text
        variant="title"
        tag="h1"
        color="tertiary.main"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudoo que está
        rolando no bairro, complete seu cadastro agora!
      </Text>

      <div>
        <TextField
          placeholder="Email"
          name="email"
          value={userInfo.email}
          onChange={handleChange} // capturadores, pegadores de ação
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
        />
      </div>

      <Button type="submit" disabled={isFormInvalid} variant="primary.main" fullWidth>
        Cadastrar
      </Button>
    </form>
  );
}

export default function FormCadastro({ props }) {
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
          {...props}
        >
          <FormContent />
        </Box>

      </Grid.Col>
    </Grid.Row>
  );
}

FormCadastro.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.object.isRequired,
};
