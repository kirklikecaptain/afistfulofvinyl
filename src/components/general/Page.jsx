import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  shareImage: PropTypes.string,
  noIndex: PropTypes.bool,
  jsonLD: PropTypes.object,
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  shareImage: '',
  noIndex: false,
  jsonLD: undefined,
};

function Page(props) {
  const { title, description, shareImage, noIndex, jsonLD, children } = props;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta name='og:description' content={description} />
        <meta property='og:image' content={shareImage} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={shareImage} />
        {noIndex && <meta name='robots' content='noindex' />}
        {jsonLD && (
          <script type='application/ld+json'>{JSON.stringify(jsonLD)}</script>
        )}
      </Helmet>
      {children}
    </>
  );
}

Page.propTypes = propTypes;
Page.defaultProps = defaultProps;

export default Page;
