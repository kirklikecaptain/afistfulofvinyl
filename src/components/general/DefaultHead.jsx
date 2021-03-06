import React from 'react';
import Helmet from 'react-helmet';

import robotoSlab700woff2 from '../../fonts/roboto-slab/roboto-slab-v12-latin-700.woff2';

export default function DefaultHead({ location }) {
  const canonicalURL = process.env.GATSBY_WEBSITE_ROOT + location.pathname;

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <link
        rel='preload'
        as='font'
        href={robotoSlab700woff2}
        type='font/woff2'
        crossOrigin='anonymous'
      />
      <link rel='canonical' href={canonicalURL} />
      <meta property='og:url' content={canonicalURL} />
      <meta property='og:site_name' content='A Fistful of Vinyl' />
      <meta property='og:type' content='website' />
      <meta name='twitter:site' content='@afistfulofvinyl' />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  );
}
