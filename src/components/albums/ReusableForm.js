import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 8px 50px;
  border-radius: 5px;
  margin: 5px 0px;
  cursor: pointer;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

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
          type='submit'><Button>{props.buttonText}</Button></motion.button>
        </form>
    </React.Fragment>
  );

}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;