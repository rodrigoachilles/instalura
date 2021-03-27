import React from 'react';
import websitePageHOC from '../../components/wrappers/WebsitePage/hoc';

function LoginScreen() {
  return (
    <div>
      Login

      <a href="/">
        Voltar para a home com refresh
      </a>
    </div>
  );
}

export default websitePageHOC(LoginScreen, {
  pageWrapperProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
