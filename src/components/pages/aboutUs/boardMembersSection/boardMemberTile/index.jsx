import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { TelIcon, EmailIcon, ChevronIcon } from '@icons/misc';
import SecondaryButton from '@buttons/secondaryButton';
import CollapsedBoardMemberTile from './collapsedBoardMemberTile';
import {
  BoardMemberTileWrapper,
  ToggleButton,
  StyledBoardMemberTile,
  BoardMemberTileAvatar,
  NameText,
  RoleText,
  ContactContainer,
  ContactLink,
  ContactText,
  LinkedInButton,
} from './BoardMemberTile.styles';

export default function BoardMemberTile({ data, isMobile, isDiamond }) {
  const { name, role, phone: phoneNumber, email, linkedinUrl: linkedInUrl } = data;
  const imageUrl = data.image?.url;
  const closedBoardMemberTileData = { imageUrl, name, role };
  const [isTileOpened, setIsTileOpened] = useState(false);

  const toggleTileIsOpened = () => setIsTileOpened((prevState) => !prevState);

  return (
    <BoardMemberTileWrapper isDiamond={isDiamond}>
      {isMobile && (
        <>
          <ToggleButton
            icon={<ChevronIcon />}
            onClick={toggleTileIsOpened}
            isTileOpened={isTileOpened}
          />
          <CollapsedBoardMemberTile
            data={closedBoardMemberTileData}
            isTileOpened={isTileOpened}
            onClick={toggleTileIsOpened}
          />
        </>
      )}
      <StyledBoardMemberTile isTileOpened={isTileOpened}>
        <BoardMemberTileAvatar>
          {imageUrl && <Image src={`https://${imageUrl}`} width={164} height={164} alt={name} />}
        </BoardMemberTileAvatar>
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
              <EmailIcon /> <ContactText>{email}</ContactText>
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
  isDiamond: PropTypes.bool,
};

BoardMemberTile.defaultProps = {
  isDiamond: false,
};
