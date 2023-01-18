import { serialize } from 'next-mdx-remote/serialize';
import React from 'react'
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material'

// Reusable input component
export const InputField = ({ value, label, name, placeholder, type, onChange }) => {
  return (
    <TextField
      label={label}
      id="outlined-size-small"
      fullWidth
      size="small"
      name={name}
      value={value}
      onChange={onChange}
      type={type}
    />
  )
}


export const SelectBox = ({ value, label, name, placeholder, type, onChange, options }) => {
  return (
    <TextField
      fullWidth
      select
      label={label}
      // helperText={label}
      size="small"
      onChange={onChange}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  )
}


