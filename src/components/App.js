import React, { useState } from "react";
import { AlbumProvider } from '../hooks/useContext';
import Header from "./Header";
import AlbumControl from './albums/AlbumControl';
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  
  return (
    <AlbumProvider>
    <div className="App">
      <Header />
      <AlbumControl />
      <UploadForm /> 
      <ImageGrid setSelectedImage={setSelectedImage} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
    </div>
    </AlbumProvider>
  );
}

export default App;
