import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  border: none;
  outline: none;
  background: inherit;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export default function IconButton({ icon, onClick, className }) {
  return (
    <StyledButton className={className} onClick={onClick}>
      {icon}
    </StyledButton>
  );
}
IconButton.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

IconButton.defaultProps = {
  className: '',
};
