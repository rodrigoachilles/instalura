import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import Button from '../../commons/Button';
import TextField from '../../forms/TextField';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';

const formStates = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};

function FormContent() {
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(formStates.DEFAULT);

  const [userInfo, setUserInfo] = useState({
    nome: 'Rodrigo Achilles',
    usuario: 'rodrigoachilles',
  });

  const handleChange = (event) => {
    const fieldName = event.target.getAttribute('name');
    setUserInfo({
      ...userInfo,
      [fieldName]: event.target.value,
    });
  };

  const isFormInvalid =
    userInfo.nome.length === 0 || userInfo.usuario.length === 0;

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        setSubmissionStatus(formStates.DEFAULT);
        setIsFormSubmited(true);

        const userDto = {
          name: userInfo.nome,
          username: userInfo.usuario,
        };

        fetch('https://instalura-api.vercel.app/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userDto),
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }

            throw new Error('Não foi possível cadastrar o usuário agora :(');
          })
          .then((usuario) => {
            setSubmissionStatus(formStates.DONE);
            // eslint-disable-next-line no-console
            console.log(usuario);
          })
          .catch((error) => {
            setSubmissionStatus(formStates.ERROR);
            // eslint-disable-next-line no-console
            console.error(error);
          });
      }}
    >
      <Text variant="title" tag="h1" color="tertiary.main">
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        variant="paragraph1"
        tag="p"
        color="tertiary.light"
        marginBottom="32px"
      >
        Você está a um passo de saber tudo o que está rolando no bairro,
        complete seu cadastro agora!
      </Text>

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box display="flex" justifyContent="center">
          {/* https://lottiefiles.com/43920-success-alert-icon */}
          <Lottie
            animationData={successAnimation}
            loop={false}
            play
            style={{ width: 100, height: 100 }}
          />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <p>Cadastro realizado com sucesso!</p>
          </Box>
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box display="flex" justifyContent="center">
          {/* https://lottiefiles.com/13865-sign-for-error-flat-style */}
          <Lottie
            animationData={errorAnimation}
            loop={false}
            play
            style={{ width: 100, height: 100 }}
          />
          <Box display="flex" flexDirection="column" justifyContent="center">
            <p>Erro ao submeter os dados. Por favor, tente mais tarde! :(</p>
          </Box>
        </Box>
      )}

      <div>
        <TextField
          placeholder="Nome"
          name="nome"
          value={userInfo.nome}
          onChange={handleChange} // capturadores, pegadores de ação
          marginBottom="17px"
        />
      </div>

      <div>
        <TextField
          placeholder="Usuário"
          name="usuario"
          value={userInfo.usuario}
          onChange={handleChange}
          marginBottom="17px"
        />
      </div>

      <Button
        type="submit"
        disabled={isFormInvalid}
        variant="primary.main"
        fullWidth
        padding={{ md: '12px 43px' }}
      >
        Cadastrar
      </Button>
    </form>
  );
}

export default function FormCadastro({ modalProps }) {
  return (
    <Grid.Row marginLeft={0} marginRight={0} flex={1} justifyContent="flex-end">
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
          <FormContent />
        </Box>
      </Grid.Col>
    </Grid.Row>
  );
}

FormCadastro.defaultProps = {
  modalProps: {},
};

FormCadastro.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  modalProps: PropTypes.object,
};
