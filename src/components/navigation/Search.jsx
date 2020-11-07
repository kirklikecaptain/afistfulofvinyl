import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';

import { Divider } from 'antd';
import Link from '../general/Link';
import useOutsideClick from '../../hooks/useOutsideClick';

const Search = ({ artists, videos }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState({
    artists: [],
    videos: [],
  });

  function clearSearch() {
    setSearchTerm('');
    setResults({
      artists: [],
      videos: [],
    });
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    if (searchTerm.length === 0) {
      clearSearch();
      return;
    }

    const term = searchTerm.toLowerCase();
    const matchedArtists = artists.nodes.filter(({ artistName }) =>
      artistName.toLowerCase().includes(term)
    );
    const matchedVideos = videos.nodes.filter(({ title }) =>
      title.toLowerCase().includes(term)
    );
    const matchedVideosByArtist = videos.nodes.filter(({ artist }) =>
      artist.artistName.toLowerCase().includes(term)
    );
    const dedupedVideos = [
      ...new Set([...matchedVideos, ...matchedVideosByArtist]),
    ];

    setResults({
      artists: matchedArtists,
      videos: dedupedVideos,
    });
  }, [searchTerm]);

  const inputRef = useOutsideClick(clearSearch);

  return (
    <StyledSearch>
      <SearchOutlined className='icon' />
      <input
        type='text'
        value={searchTerm}
        onChange={handleSearch}
        ref={inputRef}
      />
      {searchTerm.length > 0 && (
        <div className='results'>
          {results.artists.length === 0 && results.videos.length === 0 && (
            <div>
              <p>
                Bummer, no results for <strong>{searchTerm}</strong>.
              </p>
              <div className='no-results'>
                Check out <Link to='/'>All Artists</Link> or{' '}
                <Link to='/'>All Videos</Link> to find something to watch.
              </div>
            </div>
          )}
          {results.artists.length > 0 && (
            <>
              <div className='label'>Artists</div>
              {results.artists.map(a => (
                <div key={a.id}>
                  <Link to={a.fields.pathname}>{a.artistName}</Link>
                </div>
              ))}
              <Divider />
            </>
          )}
          {results.videos.length > 0 && (
            <>
              <div className='label'>Videos</div>
              {results.videos.map(v => (
                <div key={v.id}>
                  <Link to={v.fields.pathname}>
                    {v.artist.artistName} - {v.title}
                  </Link>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </StyledSearch>
  );
};

export default Search;

const StyledSearch = styled.div`
  position: relative;
  .icon {
    color: white;
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);
  }

  input {
    background: transparent;
    border: none;
    padding: 4px 8px 4px 32px;
    transition: background 300ms ease-in;
    border-radius: 3px;

    &:hover {
      background: rgba(0, 0, 0, 0.25);
    }

    &:focus {
      background: rgba(0, 0, 0, 0.5);
      border: none;
      outline: none;
    }
  }

  .results {
    position: absolute;
    left: 0;
    top: calc(100% + 1rem);
    width: 500px;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    border-radius: 3px;
    :after {
      content: '';
      position: absolute;
      top: 0;
      left: 20px;
      width: 0;
      height: 0;
      border: 10px solid transparent;
      border-bottom-color: rgba(0, 0, 0, 0.5);
      border-top: 0;
      margin-top: -10px;
    }

    .label {
      border-bottom: solid 1px white;
      padding-bottom: 1rem;
      margin-bottom: 0.5rem;
    }

    a {
      font-weight: 700;
      color: white;
    }
  }
`;
