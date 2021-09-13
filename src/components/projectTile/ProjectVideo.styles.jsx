import styled from 'styled-components';

const VideoFrame = styled.iframe`
  border-radius: 16px 16px 0 0;
  border: none;
  height: ${(props) => (props.isOnGrid ? '379px' : '579px')};
  width: 100%;
  @media ${({ theme: { medias } }) => medias.mobile} {
    height: 40vw;
    min-height: 200px;
  }
`;

export default VideoFrame;
