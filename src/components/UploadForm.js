import React, { useState } from "react";
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';

function UploadForm(props){
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const changeHandler = (e) => {
    let selected = e.target.files[0];
    
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png / jpeg)');
    }
    console.log(props.albumId);
  }
  console.log(file);
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler}/>
        <span>+</span>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div> }
        { file && <div>{ file.name }</div> }
        { file && <ProgressBar file={file} setFile={setFile} albumId={props.albumId} /> }
      </div>
    </form>
  )
}

UploadForm.propTypes = {
  albumId: PropTypes.string,
};

export default UploadForm;