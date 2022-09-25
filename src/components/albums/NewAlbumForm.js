import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
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
      <ReusableForm
        formSubmissionHandler = {handleNewAlbumForm} 
        buttonText='Submit'
        />
    </React.Fragment>
  );
}

NewAlbumForm.propTypes = {
  newAlbum: PropTypes.func
}

export default NewAlbumForm;