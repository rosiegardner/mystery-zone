import React from 'react';
import useFirestore from '../hooks/useFirestore';
import PropTypes from 'prop-types';

function ImageGrid({ setSelectedImage, albumId }){
  const { docs } = useFirestore(albumId);

  return (
    <div className="img-grid">
      { docs && docs.map(doc => (
        <div className="img-wrap" key={doc.id}
        onClick={() => setSelectedImage(doc.url)}>
          <img src={doc.url} alt="uploaded" />
        </div>
      ))}
    </div>
  )
}

ImageGrid.propTypes ={
  albumId: PropTypes.string
};

export default ImageGrid;