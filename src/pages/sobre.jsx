import AboutScreen, { getContent } from '../components/screens/AboutScreen';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

export async function getStaticProps() {
  const messages = await getContent();

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
