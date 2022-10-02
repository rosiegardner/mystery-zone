import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';

function AlbumList(props){
  return (
    <React.Fragment>
      <hr />
      {props.albumList.map((album) => 
      <Album 
        albumClicked = { props.albumSelected }
        name = {album.name}
        id = {album.id}
        key = {album.id} />
      )}
    </React.Fragment>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array,
  albumSelected: PropTypes.func

};

export default AlbumList;