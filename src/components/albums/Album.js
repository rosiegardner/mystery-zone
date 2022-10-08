import React from 'react';
import PropTypes from 'prop-types';

function Album(props) {
  return (
    <React.Fragment>
    <div className="album-box">
      <div className="album-name" onClick = {() => props.albumClicked(props.id)}>
        <h3>{props.name}</h3>
      <hr/>
        <h4>{props.year}</h4>
      </div>
    </div>
     
    </React.Fragment>
  );
}

Album.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  id: PropTypes.string,
  albumClicked: PropTypes.func
};

export default Album;