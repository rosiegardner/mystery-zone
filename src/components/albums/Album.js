import React from 'react';
import PropTypes from 'prop-types';

function Album(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.albumClicked(props.id)}>
      
      <h3>{props.name}</h3>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Album.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  albumClicked: PropTypes.func
};

export default Album;