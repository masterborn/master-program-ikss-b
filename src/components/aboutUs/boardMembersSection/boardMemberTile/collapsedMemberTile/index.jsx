import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  StyledCollapsedMemberTile,
  Avatar,
  TextContent,
  NameText,
  RoleText,
} from './CollapsedMemberTile.styles';

export default function CollapsedMemberTile({ data, onClick, isTileOpened }) {
  const { imageUrl, name, role } = data;
  return (
    <StyledCollapsedMemberTile onClick={onClick} isTileOpened={isTileOpened}>
      <Avatar>
        {imageUrl && <Image src={`https://${imageUrl}`} width={80} height={80} alt={name} />}
      </Avatar>
      <TextContent>
        <NameText>{name}</NameText>
        <RoleText>{role}</RoleText>
      </TextContent>
    </StyledCollapsedMemberTile>
  );
}

CollapsedMemberTile.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isTileOpened: PropTypes.bool.isRequired,
};
