import React from 'react';
import FAQScreen from '../../components/screens/FAQSreen';

export default function FAQPage(props) {
  // const [faqCategories, setFaqCategories] = React.useState([]);

  // React.useEffect(() => {
  //   fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
  //     const response = await res.json();
  //     return response.data;
  //   })
  //     .then((faqCategoriesFromServer) => {
  //       setFaqCategories(faqCategoriesFromServer);
  //     });
  // });

  // const props = {
  //   faqCategories,
  // };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FAQScreen {...props} />
  );
}

export async function getStaticProps() {
  const faqCategories = await fetch('https://instalura-api.vercel.app/api/content/faq').then(async (res) => {
    const response = await res.json();
    return response.data;
  });

  return {
    props: {
      faqCategories,
    },
  };
}
