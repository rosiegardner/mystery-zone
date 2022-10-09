import React from 'react';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';
import {serverTimestamp} from 'firebase/firestore';


function NewAlbumForm(props){

  function handleNewAlbumForm(event) {
    event.preventDefault();
    props.newAlbum({
      name: event.target.name.value,
      year: parseInt(event.target.year.value),
      createdAt: serverTimestamp(),
    });
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