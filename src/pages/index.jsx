import React, { useState } from 'react';
import Button from '../components/commons/Button';
import Footer from '../components/commons/Footer';
import Menu from '../components/commons/Menu';
import Modal from '../components/commons/Modal';
import Box from '../components/foundation/layout/Box';
import Grid from '../components/foundation/layout/Grid';
import Text from '../components/foundation/Text';
import FormCadastro from '../components/patterns/Form';

export default function Home() {
  const [isModalOpen, setModalState] = useState(false);

  return (
    <Box
      display="flex"
      flex="1"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalState(false);
        }}
      >
        {(props) => (
          <FormCadastro props={props} />
        )}

      </Modal>

      <Menu
        onCadastrarClick={() => setModalState(true)}
      />

      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={1}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >

            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
            </Text>
            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                setModalState(!isModalOpen);
              }}
            >
              Cadastrar
            </Button>

          </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              alt="Imagem da home principal de celulares do Nicolas Cage"
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </Box>
  );
}
