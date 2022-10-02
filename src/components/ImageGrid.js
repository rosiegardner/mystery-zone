import React from 'react';
// import useFirestore from '../hooks/useFirestore';
import AlbumControl from './albums/AlbumControl'

//const { useFirestore } = AlbumControl;

const ImageGrid = ({ setSelectedImage }) => {
  const { albums } = AlbumControl('albums');

  return (
    <div className="img-grid">
      { albums && albums.map(doc => (
        <div className="img-wrap" key={doc.id}
        onClick={() => setSelectedImage(doc.url)}>
          <img src={doc.url} alt="uploaded" />
        </div>
      ))}
    </div>
  )
}

export default ImageGrid;