import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { PlayIcon } from '@root/components/icons/misc';
import {
  PlayButton,
  ThumnbailContainer,
  VideoFrame,
  VideoThumbnail,
  VideoWrapper,
} from './ProjectVideo.styles';

export default function ProjectVideo({ url }) {
  const videoFrame = useRef();
  const videoId = url.match(
    /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-_]*)(&(amp;)?‌)?/,
  )[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;
  const thumbnailImage = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const [playingVideo, setPlayingVideo] = useState(false);

  function playVideo() {
    videoFrame.current.src += '/?autoplay=1';
    return setPlayingVideo(true);
  }

  return (
    <VideoWrapper>
      <ThumnbailContainer playingVideo={playingVideo}>
        <VideoThumbnail src={thumbnailImage} height={579} width={997} />
        <PlayButton onClick={playVideo}>
          <PlayIcon />
        </PlayButton>
      </ThumnbailContainer>
      <VideoFrame ref={videoFrame} allow="autoplay" playingVideo={playingVideo} src={embedUrl} />
    </VideoWrapper>
  );
}

ProjectVideo.propTypes = {
  url: PropTypes.string.isRequired,
};