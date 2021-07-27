/* eslint-disable react/jsx-props-no-spreading */
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Footer from '../../commons/Footer';
import Menu from '../../commons/Menu';
import MenuLogged from '../../commons/MenuLogged';
import Modal from '../../commons/Modal';
import SEO from '../../commons/SEO';
import Box from '../../foundation/layout/Box';
import FormCadastro from '../../patterns/Form';
import FormUploadImage from '../../patterns/FormUploadImage';
import { WebsitePageContext } from './context';

export { WebsitePageContext } from './context';

export default function WebsitePageWrapper({
  children,
  seoProps,
  pageBoxProps,
  menuProps,
  footerProps,
  messages,
}) {
  const [isModalCadastroOpen, setModalCadastroState] = useState(false);
  const [isModalUploadImageOpen, setModalUploadImageState] = useState(false);

  return (
    <WebsitePageContext.Provider
      value={{
        toggleModalCadastro: () => {
          setModalCadastroState(!isModalCadastroOpen);
        },
        toggleModalUploadImage: () => {
          setModalUploadImageState(!isModalUploadImageOpen);
        },
        getCMSContent: (cmsKey) => get(messages, cmsKey),
      }}
    >
      <SEO {...seoProps} />

      <Box display="flex" flex="1" flexDirection="column" {...pageBoxProps}>
        <Modal
          isOpen={isModalCadastroOpen}
          onClose={() => {
            setModalCadastroState(false);
          }}
          animationVariants={{
            open: {
              x: 0,
            },
            closed: {
              x: '100%',
            },
          }}
        >
          {(modalCadastroProps) => (
            <FormCadastro modalProps={modalCadastroProps} />
          )}
        </Modal>
        <Modal
          isOpen={isModalUploadImageOpen}
          onClose={() => {
            setModalUploadImageState(false);
          }}
          animationVariants={{
            open: {
              scale: 1,
            },
            closed: {
              scale: 0,
            },
          }}
        >
          {(modalUploadImageProps) => (
            <FormUploadImage modalProps={modalUploadImageProps} />
          )}
        </Modal>
        {menuProps.variant === 'simple' && (
          <Menu onCadastrarClick={() => setModalCadastroState(true)} />
        )}
        {menuProps.variant === 'logged' && (
          <MenuLogged
            onUploadImageClick={() => setModalUploadImageState(true)}
          />
        )}
        {children}
        {footerProps.display && <Footer />}
      </Box>
    </WebsitePageContext.Provider>
  );
}

WebsitePageWrapper.defaultProps = {
  seoProps: {},
  pageBoxProps: {},
  menuProps: {
    variant: 'simple',
  },
  footerProps: {
    display: true,
  },
  messages: {},
};

WebsitePageWrapper.propTypes = {
  seoProps: PropTypes.shape({
    headTitle: PropTypes.string,
  }),
  menuProps: PropTypes.shape({
    variant: PropTypes.oneOf(['none', 'simple', 'logged']),
  }),
  footerProps: PropTypes.shape({
    display: PropTypes.bool,
  }),
  pageBoxProps: PropTypes.shape({
    backgroundImage: PropTypes.string,
    backgroundRepeat: PropTypes.string,
    backgroundPosition: PropTypes.string,
  }),
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  messages: PropTypes.object,
};
