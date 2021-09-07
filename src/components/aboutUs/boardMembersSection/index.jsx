import React from 'react';
import PropTypes from 'prop-types';
import { convertRichTextToReactComponent } from '@root/dataMappers/contentful';
import BoardMemberTile from './boardMemberTile';
import {
  StyledBoardMembersSection,
  Title,
  Description,
  BoardMembersContainer,
} from './BoardMembersSection.styles';

export default function BoardMembersSection({ boardMembersSectionText, boardMembers }) {
  const { title, text1: richText } = boardMembersSectionText;
  const Body = convertRichTextToReactComponent(Description, richText);

  return (
    <StyledBoardMembersSection id="board-members">
      <Title>{title}</Title>
      {Body}

      <BoardMembersContainer>
        {boardMembers.map((data) => (
          <BoardMemberTile key={data.name} data={data} />
        ))}
      </BoardMembersContainer>
    </StyledBoardMembersSection>
  );
}

BoardMembersSection.propTypes = {
  boardMembersSectionText: PropTypes.shape({
    title: PropTypes.string,
    text1: PropTypes.shape({}),
  }).isRequired,
  boardMembers: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
