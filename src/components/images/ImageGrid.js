import React from 'react';
import useFirestore from '../.././hooks/useFirestore';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ImageGrid({ setSelectedImage, albumId }){
  const { docs } = useFirestore(albumId);

  return (
    <div className="img-grid">
      { docs && docs.map(doc => (
        <motion.div className="img-wrap" key={doc.id}
          layout
          whileHover={{ opacity: 1 }}
          onClick={() => setSelectedImage(doc.url)} 
          >
            <motion.img src={doc.url} alt="uploaded" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
        </motion.div>
      ))}
    </div>
  )
}

ImageGrid.propTypes ={
  albumId: PropTypes.string
};

export default ImageGrid;