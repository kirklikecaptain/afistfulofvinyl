import React from 'react';
import styled from '@emotion/styled';
import { Popover } from 'antd';
import { useStaticQuery, graphql, Link } from 'gatsby';

const ArtistRainbow = () => {
  const data = useStaticQuery(graphql`
    query ColorQuery {
      allContentfulArtist(sort: { fields: artistName }) {
        edges {
          node {
            id
            artistName
            color
            fields {
              artistPath
            }
            photo {
              file {
                url
              }
            }
            video {
              id
              title
              thumbnail {
                file {
                  url
                }
              }
              fields {
                videoPath
              }
            }
          }
        }
      }
    }
  `);
  const artistArray = data.allContentfulArtist.edges;
  return (
    <StyledRainbow>
      {artistArray.map(artist => {
        const { id, artistName, color, video, photo, fields } = artist.node;
        return (
          <Popover
            placement='topLeft'
            artistColor={color}
            key={id}
            title={
              <Link
                to={fields.artistPath}
                style={{ color: 'inherit', padding: '8px 0', display: 'flex', alignItems: 'center' }}
              >
                <img
                  style={{
                    marginRight: 12,
                    width: 30,
                    height: 30,
                    borderRadius: '50%',
                    background: color,
                    border: `solid 2px ${color}`
                  }}
                  src={photo.file.url + '?w=30&fm=jpg&fl=progressive'}
                  alt=''
                />
                <div className='slab-bold'>{artistName}</div>
              </Link>
            }
            content={
              <div>
                <ul>
                  {video.map(v => {
                    return (
                      <StyledLinkWrapper key={v.id} hoverColor={color}>
                        <Link to={v.fields.videoPath}>{v.title}</Link>
                      </StyledLinkWrapper>
                    );
                  })}
                </ul>
              </div>
            }
          >
            <div className='swatch' style={{ background: color }} />
          </Popover>
        );
      })}
    </StyledRainbow>
  );
};

export default ArtistRainbow;

const StyledLinkWrapper = styled.li`
  a:hover {
    color: ${props => props.hoverColor};
  }
`;

const StyledRainbow = styled.div`
  margin: 2rem 0 0 0;
  display: flex;
  .swatch {
    cursor: pointer;
    flex-shrink: 0;
    flex-grow: 1;
    height: 16px;
    transition: all 0.2s ease;
    &:hover {
      transform: scale(1.2);
    }
  }
`;
