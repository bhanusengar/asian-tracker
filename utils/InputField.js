import React from 'react'
import TextField from '@mui/material/TextField';
const InputField = ({type, label}) => {
  return (
    <TextField
          label={label}
          id="outlined-size-small"
          fullWidth
          size="small"
        />
  )
}

export default InputField