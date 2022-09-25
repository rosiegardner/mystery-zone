import React from 'react';

function NewAlbumForm(props){

  function handleNewAlbumForm(event) {
    event.preventDefault();
    console.log(event.target.type.value);
    console.log(event.target.name.value);
    console.log(event.target.issue.value);
  };
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewAlbumForm}>
        <input 
          type='text'
          name='name'
          placeholder='"Album 1"' />
        <button type='submit'>Create Album!</button>
        </form>
    </React.Fragment>
  );
}

export default NewAlbumForm;