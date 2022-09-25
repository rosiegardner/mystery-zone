import React from 'react';
import PropTypes from 'prop-types';

function Album(props) {
  return (
    <React.Fragment>
      <div onClick = {() => props.albumClicked(props.id)}>
      <h1>Album</h1>
      <h3>{props.title}</h3>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Album.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  albumClicked: PropTypes.func
};

export default Album;