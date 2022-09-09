import React from "react";
import Header from "./Header";
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";

function App() {
  return (
    <div className="App">
      <Header />
      <UploadForm />
      <ImageGrid />
      <Modal />
    </div>
  );
}

export default App;
