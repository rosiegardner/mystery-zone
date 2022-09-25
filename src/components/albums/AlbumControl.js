import React from 'react';
import NewAlbumForm from './NewAlbumForm';
import AlbumList from './AlbumList';
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';

class AlbumControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainAlbumList: []
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewAlbumToList = (newAlbum) => {
    const newMainAlbumList = this.state.mainAlbumList
      .concat(newAlbum);
    this.setState({
      mainAlbumList: newMainAlbumList,
      formVisibleOnPage: false 
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    
    if(this.state.formVisibleOnPage) {
      currentlyVisibleState = 
        <NewAlbumForm 
          newAlbum={this.handleAddingNewAlbumToList} />;
        buttonText = "Return to Album List"
    } else {
      currentlyVisibleState = 
        <AlbumList 
          albumList={this.state.mainAlbumList} />
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