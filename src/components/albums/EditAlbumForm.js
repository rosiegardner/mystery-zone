import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditAlbumForm(props) {
  const { album } = props;

  function handleEditAlbumFormSubmission(event) {
    event.preventDefault();
    props.editAlbumClick({
      title: event.target.title.value,
      id: album.id
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler = {handleEditAlbumFormSubmission}
        buttonText = "Update" />
    </React.Fragment>
  );
}

EditAlbumForm.propTypes = {
  album: PropTypes.object,
  editAlbumClick: PropTypes.func
};

export default EditAlbumForm;