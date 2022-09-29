import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import UploadForm from '../UploadForm';


function NewAlbumForm(props){

  function handleNewAlbumForm(event) {
    event.preventDefault();
    props.newAlbum({
      name: event.target.name.value
    });
  }
  
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleNewAlbumForm} 
        buttonText='Submit'
        />
        <UploadForm />
    </React.Fragment>
  );
}

NewAlbumForm.propTypes = {
  newAlbum: PropTypes.func
}

export default NewAlbumForm;