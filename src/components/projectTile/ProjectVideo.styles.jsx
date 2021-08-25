import styled from 'styled-components';

export const VideoWrapper = styled.div`
  z-index: 2;
  position: relative;
  width: 100%;
  height: 100%;

  .video-thumbnail {
    display: 'none';
  }
`;
export const ThumnbailContainer = styled.div`
  display: ${(props) => (props.playingVideo ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const VideoThumbnail = styled.img`
  height: 579px;
  width: 997px;
  object-fit: cover;
  object-position: left top;
  border-radius: 16px 16px 0 0;
  @media (max-width: 550px) {
    max-width: 100%;
    height: 100%;
  }
`;
export const PlayButton = styled.button`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border: none;
  background: none;
  position: absolute;
  @media (max-width: 550px) {
    svg {
      height: 24px;
      width: 24px;
    }
  }
`;
export const VideoFrame = styled.iframe`
  display: ${(props) => (props.playingVideo ? 'flex' : 'none')};
  border-radius: 16px 16px 0 0;
  border: none;
  height: 100%;
  width: 100%;
`;
