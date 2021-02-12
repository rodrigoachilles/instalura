import React from 'react';
import { Button } from "../components/commons/Button";
import Footer from '../components/commons/Footer';
import Menu from "../components/commons/Menu";
import { Grid } from '../components/foundation/layout/Grid';
import { Text } from '../components/foundation/layout/Text';

export default function Home() {
  return ( 
    <div style={{
      flex: '1',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Menu />

      <Grid.Container>
        <Grid.Row>
          <Grid.Col
            offset={1}
            value={{ xs: 12, md: 5 }}
          >
            <div>
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
              >
                Cadastrar
              </Button>
            </div>
            </Grid.Col>
          <Grid.Col
            value={{ xs: 12, md: 6 }}
          >
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="https://bootcamp-alura-01-git-modulo01.omariosouto.vercel.app/images/phones.png"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>

      <Footer />
    </div>)
}
