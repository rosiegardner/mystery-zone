import React, { useState, useEffect } from 'react';
import NewAlbumForm from './NewAlbumForm';
import AlbumList from './AlbumList';
import AlbumDetail from './AlbumDetail';
import EditAlbumForm from './EditAlbumForm';
import { db } from '../.././firebase.js';
import { collection, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { query, onSnapshot, serverTimestamp, orderBy} from 'firebase/firestore';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 5px 20px;
  border-radius: 5px;
  margin: 5px 0px;
  cursor: pointer;
`;

function AlbumControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainAlbumList, setMainAlbumList] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const collectionTimestamp = query(
      collection(db, "albums"),
      orderBy('createdAt', 'desc')
    );

    const unSubscribe = onSnapshot(
      collectionTimestamp,
      (collectionSnapshot) => {
        const albums = [];
        collectionSnapshot.forEach((doc) => {
          albums.push({
            ...doc.data(), id: doc.id
          });
        });
        const createdAt = serverTimestamp()
        setMainAlbumList(albums, { createdAt });
      }, 
      (error) => {
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, []);


  const handleClick = () => {
    if (selectedAlbum != null) {
      setFormVisibleOnPage(false);
      setSelectedAlbum(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleEditClick = () => {
    setEditing(true);
  }

  const handleAddingNewAlbumToList = async (newAlbumData) => {
    await addDoc(collection(db, "albums"), newAlbumData);
    setFormVisibleOnPage(false);
   
  }

  const handleChangingSelectedAlbum = (id) => {
    const selection = mainAlbumList
      .filter(album => album.id === id)[0];
    setSelectedAlbum(selection);
  }

  const handleDeletingAlbum = async (id) => {
    await deleteDoc(doc(db, "albums", id));
    setSelectedAlbum(null);
  }

  const handleEditingAlbum =  async (albumToEdit) => {
    await updateDoc(doc(db, "albums", albumToEdit.id), albumToEdit);
    setEditing(false);
    setSelectedAlbum(null);
  }

    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (error) {
      currentlyVisibleState = <p>There was an error: {error}</p>
    } else if (editing) {
      currentlyVisibleState = 
      <EditAlbumForm 
        album = {selectedAlbum}
        editAlbumClick = {handleEditingAlbum} />
        buttonText = "Return to Album List";
    } else if (selectedAlbum != null) {
      currentlyVisibleState =
      <AlbumDetail 
        album = {selectedAlbum}
        albumDelete = {handleDeletingAlbum} 
        albumEdit = {handleEditClick} />
        buttonText = "Return to Album List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = 
      <NewAlbumForm 
        newAlbum = {handleAddingNewAlbumToList} />;
        buttonText = "Return to Album List"
    } else {
      currentlyVisibleState = 
      <AlbumList 
        albumList = {mainAlbumList}
        albumSelected = {handleChangingSelectedAlbum} />;
        buttonText = "Add Album"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        {error ? null : 
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={{ x: 100 }} 
          onClick={handleClick}>
            <Button>{buttonText}</Button>
          </motion.button>}
      </React.Fragment>
    );
  

}

export default AlbumControl;