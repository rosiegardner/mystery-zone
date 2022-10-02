import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile, albumId }) => {
  const {progress, url} = useStorage(file, albumId);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile, albumId]);

  return (
    <div className="progress-bar" style={{ width: progress + '%' }}></div>
  )
}

export default ProgressBar;