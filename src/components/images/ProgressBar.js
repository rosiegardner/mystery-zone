import React, { useEffect } from 'react';
import useStorage from '../.././hooks/useStorage';
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile, albumId }) => {
  const {progress, url} = useStorage(file, albumId);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile, albumId]);

  return (
    <motion.div className="progress-bar" 
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar;