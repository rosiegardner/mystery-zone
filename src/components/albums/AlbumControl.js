import React, { useState } from 'react';
import NewAlbumForm from './NewAlbumForm';
import AlbumList from './AlbumList';
import AlbumDetail from './AlbumDetail';
import EditAlbumForm from './EditAlbumForm';

function AlbumControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainAlbumList, setMainAlbumList] = useState([]);

  const handleClick = () => {
    if (this.state.selectedAlbum != null) {
      setFormVisibleOnPage(false);
      this.setState({
        formVisibleOnPage: false,
        selectedAlbum: null,
        //editing: false
      });
    } else {
      setFormVisibileOnPage(!formVisibleOnPage);
    }
  }

  const handleEditClick = () => {
    this.setState({
      editing: true
    });
  }

  const handleAddingNewAlbumToList = (newAlbum) => {
    const newMainAlbumList = mainAlbumList
      .concat(newAlbum);
    setMainAlbumToList(newMainAlbumList);
    setFormVisibleOnPage(false); 
  }

  const handleChangingSelectedAlbum = (id) => {
    const selectedAlbum = this.state.mainAlbumList
      .filter(album => album.id === id)[0];
    this.setState({
      selectedAlbum: selectedAlbum
    });
  }

  const handleDeletingAlbum = (id) => {
    const newMainAlbumList = mainAlbumList
      .filter(album => album.id !== id);
    setMainAlbumList(newMainAlbumList);
  }

  const handleEditingAlbum = (albumToEdit) => {
    const editedMainAlbumList = mainAlbumList
      .filter(album => album.id !== this.state.selectedAlbum.id)
      .concat(albumToEdit);
    setMainAlbumList(editedMainAlbumList);
  }

    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.editing) {
      currentlyVisibleState = 
      <EditAlbumForm 
        album = {this.state.selectedAlbum}
        editAlbumClick = {this.handleEditingAlbum} />
        buttonText = "Return to Album List";
    } else if (this.state.selectedAlbum != null) {
      currentlyVisibleState =
      <AlbumDetail 
        album = {this.state.selectedAlbum}
        albumDelete = {this.handleDeletingAlbum} 
        albumEdit = {this.handleEditClick} />
        buttonText = "Return to Album List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = 
      <NewAlbumForm 
        newAlbum = {this.handleAddingNewAlbumToList} />;
      buttonText = "Return to Album List"
    } else {
      currentlyVisibleState = 
      <AlbumList 
        albumList = {mainAlbumList}
        albumSelected = {this.handleChangingSelectedAlbum} />;
      buttonText = "Add Album"
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  

}

export default AlbumControl;