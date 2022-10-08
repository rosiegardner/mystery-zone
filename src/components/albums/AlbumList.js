import React from 'react';
import Album from './Album';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function AlbumList(props){
  return (
    <React.Fragment>
      <div className="album-grid">
        {props.albumList.map((album) => 
        <motion.div className="album-wrap"
          layout
          whileHover={{ opacity: 1 }}>
          <Album 
            albumClicked = { props.albumSelected }
            name = {album.name}
            year = {album.year}
            id = {album.id}
            key = {album.id} />
        </motion.div>
        )}
      </div>
    </React.Fragment>
  );
}

AlbumList.propTypes = {
  albumList: PropTypes.array,
  albumSelected: PropTypes.func

};

export default AlbumList;