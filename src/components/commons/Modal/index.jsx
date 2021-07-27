import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import ModalWrapper, { LockScroll } from './styles/ModalWrapper';

function Modal({ isOpen, onClose, animationVariants, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(event) => {
        const isSafeArea = event.target.closest(
          '[data-modal-safe-area="true"]',
        );
        if (!isSafeArea) {
          onClose();
        }
      }}
    >
      {isOpen && <LockScroll />}

      <motion.div
        variants={animationVariants}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.5,
        }}
        style={{
          display: 'flex',
          flex: '1',
        }}
      >
        {children({
          'data-modal-safe-area': 'true',
          onClose,
        })}
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  animationVariants: PropTypes.object.isRequired,
  children: PropTypes.func.isRequired,
};

export default Modal;
