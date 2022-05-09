import React from 'react';
import { ButtonStyle } from './style';

const Button = ({ children, primary, secondary }) => {
  return (
    <ButtonStyle primary={ primary } secondary={ secondary }> { children } </ButtonStyle>
  )
}

export default Button;