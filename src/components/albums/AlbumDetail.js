import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UploadForm from '.././images/UploadForm';
import ImageGrid from '.././images/ImageGrid';
import Modal from '.././images/Modal';
import { motion } from 'framer-motion';

const buttonVariants = {
  hover: {
    scale: 1.1, 
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.4
    }
  }
}


function AlbumDetail(props){
  const { album, albumDelete } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <React.Fragment>

      <h3>{album.name}</h3>
      <h4>{album.year}</h4>
      <UploadForm albumId={album.id} />
      <ImageGrid setSelectedImage={setSelectedImage} albumId={album.id} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        onClick = { props.albumEdit }>Update Album</motion.button> 
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        onClick = {() => albumDelete(album.id) }>Delete Album</motion.button>
        <hr/>
    </React.Fragment>
  );
}

AlbumDetail.propTypes = {
  album: PropTypes.object,
  albumDelete: PropTypes.func,
  albumEdit: PropTypes.func
};

export default AlbumDetail;