import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UploadForm from '.././images/UploadForm';
import ImageGrid from '.././images/ImageGrid';
import Modal from '.././images/Modal';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 5px 0px;
  cursor: pointer;  

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;
function AlbumDetail(props){
  const { album, albumDelete } = props;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <React.Fragment>
      <h3>{album.name}</h3>
      <UploadForm albumId={album.id} />
      <ImageGrid 
        setSelectedImage={setSelectedImage} 
          albumId={album.id} 
      />
      { selectedImage && 
      <Modal 
      selectedImage={selectedImage} 
      setSelectedImage={setSelectedImage} 
      /> }
      <motion.button 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={{ x: 100 }}
        onClick = { props.albumEdit }>
          <Button> Update Album </Button>
      </motion.button> 
        <br></br>
        <br></br>
      <motion.button 
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
        style={{ x: 100 }}
        onClick = {() => albumDelete(album.id) }>
          <Button primary> Delete Album </Button>
      </motion.button>
          <br></br>
          <br></br>
    </React.Fragment>
  );
}

AlbumDetail.propTypes = {
  album: PropTypes.object,
  albumDelete: PropTypes.func,
  albumEdit: PropTypes.func
};

export default AlbumDetail;