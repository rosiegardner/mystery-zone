import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UploadForm from '.././images/UploadForm';
import ImageGrid from '.././images/ImageGrid';
import Modal from '.././images/Modal';
// import { motion } from 'framer-motion';


function AlbumDetail(props){
  const { album, albumDelete } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <React.Fragment>

      <h3>{album.name}</h3>
      <UploadForm albumId={album.id} />
      <ImageGrid setSelectedImage={setSelectedImage} albumId={album.id} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
      <button onClick = { props.albumEdit }>Update Album</button> 
      <button onClick = {() => albumDelete(album.id) }>Delete Album</button>
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