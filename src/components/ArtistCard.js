import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const ArtistCard = ({ data }) => {
  const {
    artistName,
    photo: {
      file: { url }
    },
    fields: { colors, artistPath }
  } = data;

  return (
    <StyledCard colors={colors}>
      <Link to={artistPath}>
        <img src={url} alt='' />
        <h2 className='slab-bold'>{artistName}</h2>
      </Link>
    </StyledCard>
  );
};

export default ArtistCard;

const StyledCard = styled.div`
  text-align: center;
  background: ${props => props.colors.tint};
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
    background: ${props => props.colors.primary};
  }
  &:hover img {
    background: ${props => props.colors.deep};
    border-color: ${props => props.colors.deep};
  }
  &:hover h2 {
    color: white;
    text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  }

  a {
    padding: 2rem 1rem;
    display: block;
    color: inherit;
  }

  img {
    border-radius: 50%;
    width: 250px;
    height: 250px;
    background: ${props => props.colors.primary};
    border: 10px solid ${props => props.colors.primary};
    transition: all 0.3s ease-in-out;
  }
  h2 {
    color: ${props => props.colors.deep};
    margin-bottom: 0;
    font-size: 1.25rem;
    transition: all 0.3s ease-in-out;
  }
`;
