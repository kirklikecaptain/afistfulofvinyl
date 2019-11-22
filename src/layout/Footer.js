import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaPatreon } from 'react-icons/fa';
import GridContainer from '../components/GridContainer';
import SubscribeForm from '../components/SubscribeForm';
import { useThirdPartyScript } from '../hooks/useThirdPartyScript';

const Footer = () => {
  useThirdPartyScript('yt-subscribe-script', 'https://apis.google.com/js/platform.js');
  const [stats, setStats] = useState(null);
  useEffect(() => {
    const youtubeChannelUrl =
      'https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC5eH-ptCLYHlYlSVJtE-THw&key=AIzaSyDb7SxO7qN0S0FoeGgJf8-nb6FkY37zK2Q';

    fetch(youtubeChannelUrl)
      .then(res => res.json())
      .then(data => setStats(data.items[0].statistics))
      .catch(err => console.log('Error fetching channel stats: ', err));
  }, []);

  function numberWithCommas(x) {
    var parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }

  return (
    <StyledFooter>
      <GridContainer className='inner'>
        <div className='social-group'>
          <h5 className='no-top'>Follow</h5>
          <a
            className='social patreon'
            href='https://www.patreon.com/join/afistfulofvinyl'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaPatreon className='icon' /> Support AFoV on Patreon
          </a>
          <div className='button-row'>
            <a
              className='social youtube'
              href='https://www.youtube.com/afistfulofvinyl'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaYoutube className='icon' />
            </a>
            <a
              className='social instagram'
              href='https://www.instagram.com/afistfulofvinyl/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagram className='icon' />
            </a>
            <a
              className='social facebook'
              href='https://www.facebook.com/AFistfulOfVinyl/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaFacebook className='icon' />
            </a>
            <a
              className='social twitter'
              href='https://twitter.com/afistfulofvinyl?lang=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaTwitter className='icon' />
            </a>
          </div>
        </div>
        <div className='col'>
          <h5 className='no-top'>Newsletter</h5>
          <SubscribeForm />
        </div>
        <div className='col'>
          <h5 className='no-top'>Subscribe</h5>
          <div className='subscribe'>
            <div className='g-ytsubscribe' data-channel='afistfulofvinyl' data-layout='full' data-count='default' />
          </div>
        </div>
        <div className='col'>
          <h5>Stats</h5>
          <p>Subscribers {stats && numberWithCommas(stats.subscriberCount)}</p>
          <p>Total Views {stats && numberWithCommas(stats.viewCount)}</p>
          <p>Videos {stats && numberWithCommas(stats.videoCount)}</p>
        </div>
      </GridContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: block;
  background: #f7f7f7;
  padding: 30px 0;
  .inner {
    a {
      color: #333;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }

    .social-group {
      .social {
        display: block;
        width: 100%;
        font-size: 0.75rem;
        text-align: center;
        margin-bottom: 10px;
        border-radius: 4px;
        padding: 10px;
        text-decoration: none;
        .icon {
          margin-top: -2px;
          display: inline-block;
        }
        @media (min-width: 600px) {
          width: auto;
          margin-left: 10px;
          flex-grow: 1;
          &:first-of-type {
            margin-left: 0;
          }
        }
      }

      .button-row {
        @media (min-width: 600px) {
          display: flex;
        }
      }

      .facebook {
        color: #3b5998;
        border: solid 1px #3b5998;
        background: transparent;
        &:hover {
          background: #3b5998;
          color: white;
        }
      }

      .instagram {
        color: #bc2a8d;
        border: solid 1px #bc2a8d;
        background: transparent;
        &:hover {
          background: #bc2a8d;
          color: white;
        }
      }

      .twitter {
        color: #1da1f2;
        border: solid 1px #1da1f2;
        background: transparent;
        &:hover {
          background: #1da1f2;
          color: white;
        }
      }

      .patreon {
        width: 100%;
        color: #f96854;
        border: solid 1px #f96854;
        margin-left: 0;
        background: transparent;
        &:hover {
          background: #f96854;
          color: white;
        }
        .icon {
          margin-right: 5px;
        }
      }

      .youtube {
        color: #ff0000;
        border: solid 1px #ff0000;
        background: transparent;
        &:hover {
          background: #ff0000;
          color: white;
        }
      }
    }
  }
`;
