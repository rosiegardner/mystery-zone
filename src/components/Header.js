import React from "react";
import styled from 'styled-components';

const StyledWrapper = styled.section`
  font-size: 24px;
  font-style: monospace;
  text-align: center;
  color: white;
  background-color: black;
  `;

function Header(){
  return (
    <StyledWrapper>
      Drag the Queen
      <h2>Doom Town PDX</h2>
      <p>The decline of Portland Punk Civilization</p>
    </StyledWrapper>

    
  );
}

export default Header;