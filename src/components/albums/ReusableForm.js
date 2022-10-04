import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <input 
          type='text'
          name='name'
          placeholder='"Album 1"' />
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          style={{ x: 100 }}
          type='submit'>{props.buttonText}</motion.button>
        </form>
    </React.Fragment>
  );

}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;