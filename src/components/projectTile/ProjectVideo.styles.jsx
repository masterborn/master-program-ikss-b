import styled from 'styled-components';

const VideoFrame = styled.iframe(
  ({ theme: { medias }, isOnGrid }) => `
  border-radius: 16px 16px 0 0;
  border: none;
  height: ${isOnGrid ? '379px' : '579px'};
  width: 100%;
  @media ${medias.mobile} {
    height: 40vw;
    min-height: 200px;
  }
`,
);

export default VideoFrame;
