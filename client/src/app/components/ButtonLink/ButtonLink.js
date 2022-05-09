import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const ButtonLink = (props) => {
  return (
    <Link to={props.to}
      style={{
        backgroundColor: '#00000000',
        color: 'inherit',
      }}>
      <Button
        primary={props.primary}
        secondary={props.secondary}>
        {props.children}
      </Button>
    </Link>
  )
}

export default ButtonLink;