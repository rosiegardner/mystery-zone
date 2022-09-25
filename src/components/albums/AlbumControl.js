import React from 'react';
import NewAlbumForm from './NewAlbumForm';
import AlbumList from './AlbumList';
import AlbumDetail from './AlbumDetail';

class AlbumControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainAlbumList: [],
      selectedAlbum: null
    };
  }

  handleClick = () => {
    if (this.state.selectedAlbum != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedAlbum: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewAlbumToList = (newAlbum) => {
    const newMainAlbumList = this.state.mainAlbumList
      .concat(newAlbum);
    this.setState({
      mainAlbumList: newMainAlbumList,
      formVisibleOnPage: false 
    });
  }

  handleChangingSelectedAlbum = (id) => {
    const selectedAlbum = this.state.mainAlbumList
      .filter(album => album.id === id)[0];
    this.setState({
      selectedAlbum: selectedAlbum
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if (this.state.selectedAlbum != null) {
      currentlyVisibleState =
      <AlbumDetail 
        album = {this.state.selectedAlbum} />
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

}

export default AlbumControl;