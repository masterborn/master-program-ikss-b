import React from 'react';
import Head from 'next/head';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import PropTypes from 'prop-types';

export default function CustomHead({ metaContent }) {
  const { title, text1: richText } = metaContent;
  const description = documentToPlainTextString(richText);
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
      <meta name="description" content={description} />
    </Head>
  );
}

CustomHead.propTypes = {
  metaContent: PropTypes.shape({
    title: PropTypes.string,
    text1: PropTypes.shape({}),
  }).isRequired,
};
