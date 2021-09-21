import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import {
  StyledCollapsedBoardMemberTile,
  BoardMemberTileAvatar,
  BoardMemberTileTextContent,
  NameText,
  RoleText,
} from './CollapsedBoardMemberTile.styles';

export default function CollapsedBoardMemberTile({ data, onClick, isTileOpened }) {
  const { imageUrl, name, role } = data;
  return (
    <StyledCollapsedBoardMemberTile onClick={onClick} isTileOpened={isTileOpened}>
      <BoardMemberTileAvatar>
        {imageUrl && <Image src={`https:${imageUrl}`} width={80} height={80} alt={name} />}
      </BoardMemberTileAvatar>
      <BoardMemberTileTextContent>
        <NameText>{name}</NameText>
        <RoleText>{role}</RoleText>
      </BoardMemberTileTextContent>
    </StyledCollapsedBoardMemberTile>
  );
}

CollapsedBoardMemberTile.propTypes = {
  data: PropTypes.shape({
    imageUrl: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isTileOpened: PropTypes.bool.isRequired,
};
