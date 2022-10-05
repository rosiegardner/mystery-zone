import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AlbumStyled = styled.h3`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 5px 0px;
  cursor: pointer
`;

function Album(props) {
  return (
    <React.Fragment>
      <AlbumStyled>
      <div onClick = {() => props.albumClicked(props.id)}>
        <h3>{props.name}</h3>
      <hr/>
      </div>
      </AlbumStyled>
    </React.Fragment>
  );
}

Album.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  albumClicked: PropTypes.func
};

export default Album;