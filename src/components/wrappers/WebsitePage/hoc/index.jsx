/* eslint-disable react/display-name */
import React from 'react';
import WebsitePageWrapper from '..';
import WebsiteGlobalProvider from '../provider';

export default function websitePageHOC(
  PageComponent,
  { pageWrapperProps } = { pageWrapperProps: {} },
) {
  return (props) => (
    <WebsiteGlobalProvider>
      <WebsitePageWrapper
        {...pageWrapperProps}
        {...props.pageWrapperProps}
        messages={props.messages}
      >
        <PageComponent {...props} />
      </WebsitePageWrapper>
    </WebsiteGlobalProvider>
  );
}
