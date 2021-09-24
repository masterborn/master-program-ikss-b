import React from 'react';
import PropTypes from 'prop-types';

import VideoFrame from './ProjectVideo.styles';

export default function ProjectVideo({ url, isOnGrid }) {
  const videoId = url.match(
    /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)(&(amp;)?‌)?/,
  )[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <VideoFrame
      isOnGrid={isOnGrid}
      title="YouTube video player"
      frameborder="0"
      allow="fullscreen; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      src={embedUrl}
    />
  );
}

ProjectVideo.propTypes = {
  url: PropTypes.string.isRequired,
  isOnGrid: PropTypes.bool,
};

ProjectVideo.defaultProps = {
  isOnGrid: false,
};
