import React from "react";
// { useState }
import Header from "./Header";
import AlbumControl from './albums/AlbumControl';
// import UploadForm from "./UploadForm";
// import ImageGrid from "./ImageGrid";
// import Modal from "./Modal";

function App() {
  // const [selectedImage, setSelectedImage] = useState(null);
  
  return (
    <div className="App">
      <Header />
      <AlbumControl />
      {/* <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> } */}
    </div>
  );
}

export default App;
