import AboutScreen, { getContent } from '../components/screens/AboutScreen';
import websitePageHOC from '../components/wrappers/WebsitePage/hoc';

export async function getStaticProps({ preview }) {
  const messages = await getContent({ preview });

  return {
    props: {
      messages,
    },
  };
}

export default websitePageHOC(AboutScreen);
