import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const propTypes = {
  headline: PropTypes.string,
};

const defaultProps = {
  headline: 'Shared Hero Component',
};

const StyledHero = styled.section`
  padding: 4rem;
  background: var(--blue-light);

  text-align: center;
  h1 {
    max-width: 800px;
    margin: 0 auto;
    font-size: 3rem;
    color: var(--blue-dark);
  }
`;

function Hero({ headline }) {
  return (
    <StyledHero>
      <h1>{headline}</h1>
    </StyledHero>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
