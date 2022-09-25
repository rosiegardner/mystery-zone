import React, { useState } from "react";
import Header from "./Header";
import AlbumList from './albums/AlbumList';
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className="App">
      <Header />
      <AlbumList />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> }
    </div>
  );
}

export default App;
