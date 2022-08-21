import React, { Component } from 'react';
import './Button.css';

import styled from 'styled-components';

const StyledButton = styled.button`
  border-radius: 20px;
  font-size: 20px;
  border: 5px solid green;
  font-weight: bold;
  margin: 10px;
  color: ${({ secondary }) => (secondary ? 'white' : 'green')};
  background-color: ${({ secondary }) => (secondary ? 'green' : 'white')};
  &:hover {
    color: red;
  }
`;

class Button extends Component {
  render() {
    const { title, secondary, onClick } = this.props;

    return (
      <StyledButton
        secondary={secondary}
        className="button"
        type="button"
        onClick={onClick}
      >
        {title}
      </StyledButton>
    );
  }
}

export default Button;
