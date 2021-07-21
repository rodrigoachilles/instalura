import FeedScreen from '../../../components/screens/FeedScreen';
import websitePageHOC from '../../../components/wrappers/WebsitePage/hoc';
import authService from '../../../services/auth';

export async function getServerSideProps(ctx) {
  const auth = authService(ctx);
  const hasActiveSession = await auth.hasActiveSession();

  if (hasActiveSession) {
    const session = await auth.getSession();
    return {
      props: {
        user: {
          ...session,
        },
      },
    };
  }

  ctx.res.writeHead(307, { location: '/login' });
  ctx.res.end();

  return {
    props: {},
  };
}

export default websitePageHOC(FeedScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Feed',
    },
    menuProps: {
      variant: 'logged',
    },
    footerProps: {
      display: false,
    },
    pageBoxProps: {
      backgroundColor: '#E5E5E5',
    },
  },
});
