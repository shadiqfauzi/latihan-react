import React from 'react';
import { Alert } from 'reactstrap';

const AlertCustom = (props) => {
  return (
    <div>
      <Alert color={props.color}>
        Welcome Back, {props.username}
      </Alert>
    </div>
  );
};

export default AlertCustom;