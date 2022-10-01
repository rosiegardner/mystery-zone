import React, { useState} from "react";
import Header from "./Header";
import AlbumControl from './albums/AlbumControl';
import UploadForm from "./UploadForm";
import ImageGrid from "./ImageGrid";
import Modal from "./Modal";
// import {db} from '.././firebase.js'
// import { collection, addDoc, doc, onSnapshot, updateDoc, deleteDoc } from 'firebase/firestore';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  // const [mainAlbumList, setMainAlbumList] = useState([]);
  // const [selectedAlbum, setSelectedAlbum] = useState(null);
  // const [error, setError] = useState(null);
  
  // const handleChangingSelectedAlbum = (id) => {
  //   const selection = mainAlbumList
  //     .filter(album => album.id === id)[0];
  //   setSelectedAlbum(selection);
  // }

  // const handleAddingNewAlbumToList = async (newAlbumData) => {
  //   await addDoc(collection(db, "albums"), newAlbumData);
  //   setFormVisibleOnPage(false);

  // useEffect(() => {
  //   const unSubscribe = onSnapshot(
  //     collection(db, "albums"),
  //     (collectionSnapshot) => {
  //       const albums = [];
  //       collectionSnapshot.forEach((doc) => {
  //         albums.push({
  //           ...doc.data(), id: doc.id
  //         });
  //         console.log(doc.id, "ran25")
  //       });
  //       setMainAlbumList(albums);
  //     }, 
  //     (error) => {
  //       setError(error.message);
  //     }
  //     );
  //     return () => unSubscribe();
  //   }, []);

  return (
    <div className="App">
      <Header />
      <AlbumControl
        /* mainAlbumList={mainAlbumList} setMainAlbumList={setMainAlbumList} 
        selectedAlbum={selectedAlbum} setSelectedAlbum={setSelectedAlbum} handleChangingSelectedAlbum={handleChangingSelectedAlbum}
        handleAddingNewAlbumToList={handleAddingNewAlbumToList}*/ />
      <UploadForm />
      <ImageGrid setSelectedImage={setSelectedImage} />
      { selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage} /> } 
    </div>
  );
}

export default App;
