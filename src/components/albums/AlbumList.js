import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';

function AlbumList(props){
  return (
    <React.Fragment>
      <hr />
      {props.albumList.map((album, index) => 
      <Album 
        title={album.title}
        key={index} />
      )}
      
    </React.Fragment>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array
};

export default AlbumList;