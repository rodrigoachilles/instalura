/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';
import '../../public/styles/instagram.min.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Instalura - Projeto do Rodrigo Achilles</title>
        <link rel="icon" type="image/png" href="/images/favicon.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};
