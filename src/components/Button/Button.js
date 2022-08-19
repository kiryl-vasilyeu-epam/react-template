import React, { Component } from 'react';
import styled from 'styled-components';

class Button extends Component {
  render() {
    const {
      title,
      secondary,
      onClick,
    } = this.props;

    return (
      <StyledButton
        secondary={secondary}
        onClick={onClick}
        type="button"
      >
        {title}
      </StyledButton>
    );
  }
}

const StyledButton = styled.button`
  font-weight: bold;
  font-size: 20px;
  border-radius: 10px;
  padding: 15px 25px;
  border: 3px solid black;
  background-color: ${({ secondary }) => (secondary ? 'white' : '#55AA99')};
  color: ${({ secondary }) => (secondary ? '#55AA99' : 'white')};
`;

export default Button;
