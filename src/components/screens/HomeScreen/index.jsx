/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import Button from '../../commons/Button';
import Box from '../../foundation/layout/Box';
import Grid from '../../foundation/layout/Grid';
import Text from '../../foundation/Text';
import { WebsitePageContext } from '../../wrappers/WebsitePage';

export default function HomeScreen() {
  const websitePageContext = useContext(WebsitePageContext);

  return (
    <Box
      display="flex"
      flex="1"
      flexDirection="column"
    >
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
              padding={{ md: '12px 43px' }}
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => websitePageContext.toggleModalCadastro()}
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
    </Box>
  );
}
