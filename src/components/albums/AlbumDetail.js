import React from 'react';
import PropTypes from 'prop-types';
import ImageGrid from '../ImageGrid';

function AlbumDetail(props){
  const { album, albumDelete } = props;

  return (
    <React.Fragment>
      <h1>Album Detail</h1>
      <h3>{album.name}</h3>
      <button onClick = { props.albumEdit }>Update Album</button>
      <button onClick = {() => albumDelete(album.id) }>Delete Album</button>
      <hr/>
      {<ImageGrid />}
    </React.Fragment>
  );
}

AlbumDetail.propTypes = {
  album: PropTypes.object,
  albumDelete: PropTypes.func,
  albumEdit: PropTypes.func
};

export default AlbumDetail;