import React from 'react';
import styled from 'styled-components';
import { Popover } from 'antd';
import Link from '../general/Link';

const Footer = ({ artists }) => {
  return (
    <FooterStyle>
      <div className='artists'>
        <div className='Container artist-grid'>
          {artists.nodes.map(a => (
            <Popover
              key={a.id}
              arrowPointAtCenter
              color={a.fields.colors.darkest}
              title={
                <span style={{ fontSize: 24, fontWeight: 700 }}>
                  {a.artistName}
                </span>
              }
              content={
                <VideoLink hoverColor={a.fields.colors.bright}>
                  {a.video.map(v => (
                    <div key={v.fields.pathname}>
                      <Link to={v.fields.pathname}>{v.title}</Link>
                    </div>
                  ))}
                </VideoLink>
              }
            >
              <ArtistSwatch colors={a.fields.colors} />
            </Popover>
          ))}
        </div>
      </div>
      <div className='inner'>
        <div className='Container grid'>
          <div>Links</div>
          <div>About</div>
          <div>Form</div>
        </div>
      </div>
    </FooterStyle>
  );
};

export default Footer;

const VideoLink = styled.div`
  a {
    font-weight: 500;
    color: white;
    &:hover {
      color: ${({ hoverColor }) => hoverColor};
    }
  }
`;

const ArtistSwatch = styled.div`
  background: ${({ colors }) => colors.dark};
  height: 1rem;
  flex: 1 1 0px;
  transition: all 300ms ease;
  cursor: pointer;
  &:hover {
    background: ${({ colors }) => colors.bright};
  }
`;

const FooterStyle = styled.section`
  .artist-grid {
    display: flex;
  }

  .inner {
    padding: 3rem 1rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }
`;
