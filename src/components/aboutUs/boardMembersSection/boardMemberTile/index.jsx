import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { TelIcon, EmailIcon, ChevronIcon } from '@root/components/icons/misc';
import SecondaryButton from '@root/components/buttons/secondaryButton';
import CollapsedMemberTile from './collapsedMemberTile';
import {
  BoardMemberTileWrapper,
  ToggleButton,
  StyledBoardMemberTile,
  Avatar,
  NameText,
  RoleText,
  ContactContainer,
  ContactLink,
  LinkedInButton,
} from './BoardMemberTile.styles';

export default function BoardMemberTile({ data, isMobile }) {
  const { name, role, phone: phoneNumber, email, linkedinUrl: linkedInUrl } = data;
  const imageUrl = data.image?.url;
  const closedBoardMemberTileData = { imageUrl, name, role };
  const [isTileOpened, setIsTileOpened] = useState(false);

  const toggleTileIsOpened = () => setIsTileOpened((prevState) => !prevState);

  return (
    <BoardMemberTileWrapper>
      {isMobile && (
        <>
          <ToggleButton
            icon={<ChevronIcon />}
            onClick={toggleTileIsOpened}
            isTileOpened={isTileOpened}
          />
          <CollapsedMemberTile
            data={closedBoardMemberTileData}
            isTileOpened={isTileOpened}
            onClick={toggleTileIsOpened}
          />
        </>
      )}
      <StyledBoardMemberTile isTileOpened={isTileOpened}>
        <Avatar>
          {imageUrl && <Image src={`https://${imageUrl}`} width={164} height={164} alt={name} />}
        </Avatar>
        <NameText>{name}</NameText>
        <RoleText>{role}</RoleText>

        <ContactContainer>
          {phoneNumber && (
            <ContactLink href={`tel:${phoneNumber}`}>
              <TelIcon /> {phoneNumber}
            </ContactLink>
          )}

          {email && (
            <ContactLink href={`mailto:${email}`} isBottom>
              <EmailIcon /> {email}
            </ContactLink>
          )}
        </ContactContainer>

        {linkedInUrl && (
          <LinkedInButton href={linkedInUrl}>
            <SecondaryButton withIcon>LinkedIn</SecondaryButton>
          </LinkedInButton>
        )}
      </StyledBoardMemberTile>
    </BoardMemberTileWrapper>
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
  isMobile: PropTypes.bool.isRequired,
};
