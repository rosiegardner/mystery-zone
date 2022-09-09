import React, { useState } from "react";
import Header from "./Header";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      { selectedImage && <Modal selectedImage={selectedImage} /> }
    </div>
  );
}

export default App;
