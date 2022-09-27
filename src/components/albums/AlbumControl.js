import React, { useState } from 'react';
import NewAlbumForm from './NewAlbumForm';
import AlbumList from './AlbumList';
import AlbumDetail from './AlbumDetail';
import EditAlbumForm from './EditAlbumForm';

function AlbumControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainAlbumList, setMainAlbumList] = useState([]);
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const [editing, setEditing] = useState(false);

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

  const handleAddingNewAlbumToList = (newAlbum) => {
    const newMainAlbumList = mainAlbumList
      .concat(newAlbum);
    setMainAlbumList(newMainAlbumList);
    setFormVisibleOnPage(false); 
  }

  const handleChangingSelectedAlbum = (id) => {
    const selection = mainAlbumList
      .filter(album => album.id === id)[0];
    setSelectedAlbum(selection);
  }

  const handleDeletingAlbum = (id) => {
    const newMainAlbumList = mainAlbumList
      .filter(album => album.id !== id);
    setMainAlbumList(newMainAlbumList);
    setSelectedAlbum(null);
  }

  const handleEditingAlbum = (albumToEdit) => {
    const editedMainAlbumList = mainAlbumList
      .filter(album => album.id !== selectedAlbum.id)
      .concat(albumToEdit);
    setMainAlbumList(editedMainAlbumList);
    setEditing(false);
    setSelectedAlbum(null);
  }

    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (editing) {
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
        <button onClick={handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  

}

export default AlbumControl;