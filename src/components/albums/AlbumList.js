import React from 'react';
import Album from './Album';

const mainAlbumList = [
  {
    title: 'Pre Pandemic'
  },
  {
    title: 'Post Pandemic'
  }
];

function AlbumList(){
  return (
    <React.Fragment>
      <hr />
      {mainAlbumList.map((album, index) => 
      <Album 
        title={album.title}
        key={index}/>
        )}
      
    </React.Fragment>
  );
}

export default AlbumList;