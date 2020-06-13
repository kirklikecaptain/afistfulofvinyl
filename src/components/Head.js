import React from 'react';
import { Helmet } from 'react-helmet-async';
import defaultImage from '@assets/logos/default-meta.jpg';

export const Head = ({
  title,
  description,
  canonical,
  noIndex,
  shareImage,
  schemaMarkup
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <link rel='canonical' href={canonical} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta name='og:description' content={description} />
      <meta property='og:url' content={canonical} />
      <meta property='og:site_name' content='A Fistful of Vinyl' />
      <meta property='og:image' content={shareImage} />
      <meta name='twitter:image' content={shareImage} />
      <meta name='twitter:site' content='@afistfulofvinyl' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      {noIndex && <meta name='robots' content='noindex' />}
      {schemaMarkup && (
        <script type='application/ld+json'>
          {JSON.stringify(schemaMarkup)}
        </script>
      )}
    </Helmet>
  );
};

Head.defaultProps = {
  shareImage: `https://www.afistfulofvinyl.com${defaultImage}`
};
