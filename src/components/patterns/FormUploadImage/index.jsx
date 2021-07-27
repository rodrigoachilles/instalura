// import Image from 'next/image';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Lottie from 'react-lottie-player';
import Button from '../../../components/commons/Button';
import Loading from '../../../components/commons/Loading';
import photoService from '../../../services/photo';
import userService from '../../../services/user';
import theme from '../../../theme';
import Box from '../../foundation/layout/Box';
import Text from '../../foundation/Text';
import errorAnimation from './animations/error.json';
import successAnimation from './animations/success.json';
import filters from './filters';
import FormUploadImagemWrapper, {
  ArrowForwardOutlineIcon,
  CloseIcon,
  Figure,
  ImageOutlineIcon,
  InputImage,
  Slider,
  Slides,
} from './styles';

const formStates = {
  INSERT_PHOTO: 'INSERT_PHOTO',
  SELECT_FILTER: 'SELECT_FILTER',
  LOADING: 'LOADING',
  DONE: 'DONE',
  ERROR: 'ERROR',
};
export default function FormUploadImage({ modalProps }) {
  const { onClose } = modalProps;
  const emptyPhoto = {
    photoUrl: '',
    description: '',
    filter: '',
  };
  const [isFormSubmited, setIsFormSubmited] = useState(false);
  const [isPhotoValid, setIsPhotoValid] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(
    formStates.INSERT_PHOTO,
  );
  const [photoInfo, setPhotoInfo] = useState(emptyPhoto);

  const handleChange = async (event) => {
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;
    try {
      const isValid = await photoService.validateUrl({ url: fieldValue });
      setIsPhotoValid(isValid);
    } catch (err) {
      setIsPhotoValid(false);
    }

    const description = fieldValue
      .substring(fieldValue.lastIndexOf('/') + 1)
      .replace(/\.[^/.]+$/, '');
    setPhotoInfo({
      ...photoInfo,
      photoUrl: fieldValue,
      filter: 'none',
      description,
    });
  };

  const handleNext = (event) => {
    event.preventDefault();
    setSubmissionStatus(formStates.SELECT_FILTER);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmissionStatus(formStates.LOADING);
    setIsFormSubmited(true);

    // setTimeout(async () => {
    try {
      await userService.createPost({ ...photoInfo });
      setPhotoInfo(emptyPhoto);
      setSubmissionStatus(formStates.DONE);
    } catch (err) {
      setSubmissionStatus(formStates.ERROR);
    }

    setTimeout(() => {
      setSubmissionStatus(formStates.INSERT_PHOTO);
    }, 5000);
    // }, 2000);
  };

  const isFormInvalid = photoInfo.photoUrl.length === 0 || !isPhotoValid;

  return (
    <FormUploadImagemWrapper {...modalProps}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        padding="22px"
      >
        <CloseIcon onClick={onClose} />
      </Box>

      {submissionStatus === formStates.LOADING && <Loading />}

      {submissionStatus === formStates.INSERT_PHOTO && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="375px"
            height="375px"
            backgroundColor={theme.colors.tertiary.dark.color}
            marginBottom="48px"
          >
            <ImageOutlineIcon />
          </Box>
          <InputImage>
            <InputImage.TextField
              placeholder="URL da imagem"
              name="photoUrl"
              value={photoInfo.photoUrl}
              onChange={handleChange}
            />
            <Button
              type="button"
              onClick={handleNext}
              variant="secondary.light"
              borderRadius="9.25px"
              disabled={isFormInvalid}
            >
              <ArrowForwardOutlineIcon />
            </Button>
          </InputImage>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="8px"
          >
            <Text variant="paragraph2" color="tertiary.light">
              Formatos suportados: jpg, png, svg e xpto.
            </Text>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="24px"
            marginTop="44px"
          >
            <Button
              type="button"
              onClick={handleNext}
              variant="primary.light"
              fullWidth
              disabled={isFormInvalid}
            >
              Avançar
            </Button>
          </Box>
        </>
      )}

      {submissionStatus === formStates.SELECT_FILTER && (
        <form onSubmit={handleSubmit}>
          <Figure
            marginBottom="16px"
            maxWidth="375px"
            maxHeight="375px"
            className={`filter-${photoInfo.filter}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoInfo.photoUrl}
              alt={photoInfo.description}
              width="100%"
              height="100%"
            />
          </Figure>
          <Slider>
            <Slides>
              {filters.map((filter) => (
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  marginBottom="8px"
                  key={filter.name}
                >
                  <Figure
                    cursor="pointer"
                    margin="8px"
                    className={`filter-${filter.className}`}
                    onClick={() =>
                      setPhotoInfo({
                        ...photoInfo,
                        filter: filter.className,
                      })
                    }
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photoInfo.photoUrl}
                      alt={photoInfo.description}
                      width="88px"
                      height="88px"
                    />
                  </Figure>
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Text variant="smallestException" color="tertiary.light">
                      {filter.name}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Slides>
          </Slider>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="24px"
            marginTop="16px"
          >
            <Button
              type="submit"
              variant="primary.light"
              fullWidth
              disabled={isFormInvalid}
            >
              Postar
            </Button>
          </Box>
        </form>
      )}

      {isFormSubmited && submissionStatus === formStates.DONE && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginBottom="48px"
        >
          {/* https://lottiefiles.com/43920-success-alert-icon */}
          <Lottie
            animationData={successAnimation}
            play
            loop={false}
            style={{ width: '150px', height: '150px' }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text variant="paragraph" color="success.main" role="alert">
              Imagem enviada com sucesso!
            </Text>
          </Box>
        </Box>
      )}

      {isFormSubmited && submissionStatus === formStates.ERROR && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginBottom="48px"
        >
          {/* https://lottiefiles.com/13865-sign-for-error-flat-style */}
          <Lottie
            animationData={errorAnimation}
            play
            loop={false}
            style={{ width: '150px', height: '150px' }}
          />
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Text variant="paragraph" color="error.main" role="alert">
              Erro ao enviar a imagem.
            </Text>
            <Text variant="paragraph" color="error.main" role="alert">
              Por favor, tente mais tarde! :(
            </Text>
          </Box>
        </Box>
      )}
    </FormUploadImagemWrapper>
  );
}

FormUploadImage.defaultProps = {
  modalProps: {},
};

FormUploadImage.propTypes = {
  modalProps: PropTypes.object,
};
