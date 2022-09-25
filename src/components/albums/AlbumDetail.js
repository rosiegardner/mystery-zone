import React from 'react';
import PropTypes from 'prop-types';

function AlbumDetail(props){
  const { album } = props;

  return (
    <React.Fragment>
      <h1>Album Detail</h1>
      <h3>{album.title}</h3>
      <hr/>
    </React.Fragment>
  );
}

AlbumDetail.propTypes = {
  album: PropTypes.object
};

export default AlbumDetail;