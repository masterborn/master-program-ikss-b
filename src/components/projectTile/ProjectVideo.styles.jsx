import styled from 'styled-components';

const VideoFrame = styled.iframe`
  border-radius: 16px 16px 0 0;
  border: none;
  height: 579px;
  width: 100%;
  @media (max-width: 550px) {
    height: 100%;
  }
`;

export default VideoFrame;
