import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  partiallyActive: PropTypes.bool,
};

const defaultProps = {
  className: undefined,
  activeClassName: undefined,
  partiallyActive: false,
};

function Link(props) {
  const { to, children, className, activeClassName, partiallyActive } = props;

  // Internal links start with exactly one slash
  const internal = /^\/(?!\/)/.test(to);

  if (internal) {
    return (
      <GatsbyLink
        to={to}
        className={className}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
      >
        {children}
      </GatsbyLink>
    );
  }

  return (
    <OutboundLink
      href={to}
      className={className}
      target='_blank'
      rel='noopener noreferrer'
    >
      {children}
    </OutboundLink>
  );
}

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
