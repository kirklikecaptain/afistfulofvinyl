import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import defaultMeta from '../assets/logos/default-meta.jpg';

const Meta = ({ title, description, canonical, ogImage }) => {
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
      <meta property='og:image' content={ogImage} />
      <meta name='twitter:image' content={ogImage} />
      <meta name='twitter:site' content='@afistfulofvinyl' />
      <meta name='twitter:creator' content='@afistfulofvinyl' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  );
};

Meta.defaultProps = {
  ogImage: `https://www.afistfulofvinyl.com/${defaultMeta}`
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string.isRequired,
  ogImage: PropTypes.string
};

export default Meta;
