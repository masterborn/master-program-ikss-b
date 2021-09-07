import styled from 'styled-components';
import { Header4, Header5 } from '@root/components/typography/headers';

export const StyledBoardMemberTile = styled.div`
  width: 384px;
  height: 480px;
  margin: 12px;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 16px;
  background-color: ${({ theme: { color } }) => color.white};
  box-shadow: 3.38443px 55.8976px 80px rgba(97, 121, 139, 0.07),
    1.71337px 28.2982px 34.875px rgba(97, 121, 139, 0.04725),
    0.676885px 11.1795px 13px rgba(97, 121, 139, 0.035),
    0.148069px 2.44552px 4.625px rgba(97, 121, 139, 0.02275);
`;
export const Avatar = styled.div`
  width: 164px;
  height: 164px;

  margin-top: 32px;
  border-radius: 50%;

  background-color: ${({ theme: { color } }) => color.blueTints.blue20};
  img {
    border-radius: 50%;
  }
`;
export const NameText = styled(Header4)`
  margin-top: 24px;
  color: ${({ theme: { color } }) => color.navy};
`;
export const RoleText = styled(Header5)`
  margin: 8px 24px 0;
  height: 48px;

  text-align: center;
  color: ${({ theme: { color } }) => color.steel};
`;
export const ContactContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ContactLink = styled.a`
  margin-top: 12px;
  color: ${({ theme: { color } }) => color.ikssBlue};
  font-weight: bold;
  text-decoration: none;
  font-size: 14px;
  line-height: 18px;
`;
export const LinkedInButton = styled.a`
  margin: auto 0 40px;
  text-decoration: none;
`;
