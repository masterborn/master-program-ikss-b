import styled from 'styled-components';

const VideoFrame = styled.iframe(
  ({ theme: { medias }, isOnGrid }) => `
  border-radius: 1.6rem 1.6rem 0 0;
  border: none;
  height: ${isOnGrid ? '37.9rem' : '57.9rem'};
  width: 100%;
  @media ${medias.mobile} {
    height: 40vw;
    min-height: 20.0rem;
  }
`,
);

export default VideoFrame;
