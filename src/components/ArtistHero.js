import React from 'react';
import styled from '@emotion/styled';
import Fade from 'react-reveal/Fade';

const ArtistHero = ({ artistName, colors, photo }) => {
  return (
    <StyledHero colors={colors}>
      <div className='spacer' />
      <div className='edges'>
        <div className='container'>
          <div className='name-row'>
            <img src={photo.file.url + '?w=250'} alt={artistName} />
            <h1 className='slab-bold'>{artistName}</h1>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default ArtistHero;

const StyledHero = styled.section`
  background: ${props => props.colors.primary};
  color: white;
  margin-top: -80px;
  position: relative;
  overflow: hidden;
  @media (min-width: 800px) {
    margin-top: -100px;
  }

  .spacer {
    /* background: ${props => props.colors.mid}; */
    height: 80px;
    @media (min-width: 800px) {
      height: 100px;
    }
  }

  .container {
    display: flex;
    justify-content: center;
  }

  .name-row {
    display: flex;
    align-items: center;
    padding: 3rem 0;
    max-width: 900px;
    margin: auto;
    img {
      display: block;
      flex-shrink: 0;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin-right: 4rem;
      border: solid 10px ${props =>
        props.colors.useTextColor === 'light' ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.2)'};
      background: ${props => (props.colors.useTextColor === 'light' ? 'rgba(255,255,255,.2)' : 'rgba(0,0,0,.2)')};
    }
    h1 {
      line-height: 1;
      font-size: 6rem;
      color: ${props => (props.colors.useTextColor === 'light' ? 'rgba(255,255,255,.85)' : 'rgba(0,0,0,.75)')};
    }
  }
`;
