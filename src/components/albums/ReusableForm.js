import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styled from "styled-components";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const buttonVariants = {
  hover: {
    scale: 1.1, 
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.4,
    }
  }
}

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit = {props.formSubmissionHandler}>
        <p>Album Name: 
        <Input 
          type='text'
          name='name'
          placeholder='ex: "album1"' /> 
        <br></br>
       Life Span:
        <Input
          type='text'
          name='year'
          placeholder='ex: "2015-2018"'/> </p>
        <br></br>
        <motion.button 
          variants={buttonVariants}
          whileHover="hover"
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