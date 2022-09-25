import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewAlbumForm(props){

  function handleNewAlbumForm(event) {
    event.preventDefault();
    props.newAlbum({
      title: event.target.title.value,
      id: v4()
    });
    console.log('ran');
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewAlbumForm}>
        <input 
          type='text'
          title='title'
          placeholder='"Album 1"' />
        <button type='submit'>Create Album!</button>
        </form>
    </React.Fragment>
  );
}

NewAlbumForm.propTypes = {
  newAlbum: PropTypes.func
}

export default NewAlbumForm;