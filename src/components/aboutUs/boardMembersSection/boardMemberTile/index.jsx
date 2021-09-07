import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { TelIcon, EmailIcon } from '@root/components/icons/misc';
import SecondaryButton from '@root/components/buttons/secondaryButton';
import {
  StyledBoardMemberTile,
  Avatar,
  NameText,
  RoleText,
  ContactContainer,
  ContactLink,
  LinkedInButton,
} from './BoardMemberTile.styles';

export default function BoardMemberTile({ data }) {
  const { name, role, phone: phoneNumber, email, linkedinUrl: linkedInUrl } = data;
  const imageUrl = data.image?.url;
  return (
    <StyledBoardMemberTile>
      <Avatar>
        {imageUrl && <Image src={`https://${imageUrl}`} width={164} height={164} alt={name} />}
      </Avatar>
      <NameText>{name}</NameText>
      <RoleText>{role}</RoleText>

      <ContactContainer>
        <ContactLink href={`tel:${phoneNumber}`}>
          <TelIcon /> {phoneNumber}
        </ContactLink>
        <ContactLink href={`mailto:${phoneNumber}`}>
          <EmailIcon /> {email}
        </ContactLink>
      </ContactContainer>

      <LinkedInButton href={linkedInUrl}>
        <SecondaryButton withIcon>LinkedIn</SecondaryButton>
      </LinkedInButton>
    </StyledBoardMemberTile>
  );
}

BoardMemberTile.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.shape({
      url: PropTypes.string,
    }),
    name: PropTypes.string,
    role: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    linkedinUrl: PropTypes.string,
  }).isRequired,
};
