import React from 'react';
import Proptypes from 'prop-types';

function Album(props) {
  return (
    <React.Fragment>
      <h1>Album</h1>
      <h3>{props.title}</h3>
      <hr/>
    </React.Fragment>
  );
}

Album.propTypes = {
  title: Proptypes.string.isRequired
};

export default Album;