import React from 'react';
import TextField from '@material-ui/core/TextField';

const TextFieldComponent = props => (
    <TextField
    required
    {...props}
  />
);

export default TextFieldComponent;