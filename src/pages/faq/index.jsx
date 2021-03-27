import React from 'react';
import FAQScreen from '../../components/screens/FAQSreen';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc';

function FAQPage(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FAQScreen {...props} />
  );
}

FAQPage.propTypes = FAQScreen.propTypes;

export default websitePageHOC(FAQPage, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Perguntas Frequentes',
    },
  },
});

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq')
    .then((respostaDoServer) => respostaDoServer.json())
    .then((respostaConvertida) => respostaConvertida.data);

  return {
    props: {
      faqCategories,
    },
  };
}
