import React, { useState } from 'react';
import NewAlbumForm from './NewAlbumForm';
import AlbumList from './AlbumList';
import AlbumDetail from './AlbumDetail';
import EditAlbumForm from './EditAlbumForm';

function AlbumControl() {
  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);

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
    const newMainAlbumList = this.state.mainAlbumList
      .concat(newAlbum);
    this.setState({
      mainAlbumList: newMainAlbumList,
      formVisibleOnPage: false 
    });
  }

  const handleChangingSelectedAlbum = (id) => {
    const selectedAlbum = this.state.mainAlbumList
      .filter(album => album.id === id)[0];
    this.setState({
      selectedAlbum: selectedAlbum
    });
  }

  const handleDeletingAlbum = (id) => {
    const newMainAlbumList = this.state.mainAlbumList
      .filter(album => album.id !== id);
    this.setState({
      mainAlbumList: newMainAlbumList,
      selectedAlbum: null
    });
  }

  const handleEditingAlbum = (albumToEdit) => {
    const editedMainAlbumList = this.state.mainAlbumList
      .filter(album => album.id !== this.state.selectedAlbum.id)
      .concat(albumToEdit);
    this.setState({
      mainAlbumList: editedMainAlbumList,
      editing: false,
      selectedAlbum: null
    });
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
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewAlbumForm 
        newAlbum = {this.handleAddingNewAlbumToList} />;
      buttonText = "Return to Album List"
    } else {
      currentlyVisibleState = 
      <AlbumList 
        albumList = {this.state.mainAlbumList}
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