import React from 'react';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Link } from 'gatsby';

// more info about rich-text to react here
// https://github.com/contentful/rich-text/tree/master/packages/rich-text-react-renderer

export const useRichText = richTextDocument => {
  if (richTextDocument === null) {
    return null;
  }
  const renderOptions = {
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => {
        const { url, contentType } = node.data.target.fields.file;
        const mimeGroup = contentType.split('/')[0];
        if (mimeGroup === 'image') {
          return (
            <img style={{ display: 'block', maxWidth: '100%', margin: '2rem auto' }} alt='' src={`${url}?w=800`} />
          );
        }
      },
      [INLINES.HYPERLINK]: node => {
        const linkText = node.content[0].value;
        const { uri } = node.data;
        // handle internal links - convert absolute links to Link components
        if (/https:\/\/www\.afistfulofvinyl\.com/.test(uri)) {
          const pagePath = uri.replace('https://www.afistfulofvinyl.com', '');
          return <Link to={pagePath}>{linkText}</Link>;
          // format mailto links
        } else {
          return (
            // format outbound links
            <a href={uri} target='_blank' rel='noopener noreferrer'>
              {linkText}
            </a>
          );
        }
      }
    }
  };
  // render rich text
  const renderedArticle = documentToReactComponents(richTextDocument, renderOptions);

  return renderedArticle;
};
