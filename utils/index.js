import { serialize } from 'next-mdx-remote/serialize';
import React from 'react'
import TextField from '@mui/material/TextField';
import { MenuItem } from '@mui/material'

export const makeTitleUrl = (data,seprator) =>{
  const mySentence = data.trim();
  const productName = mySentence.split(" ");
  const newProductName = productName.map((word) => {
    return word[0].toLowerCase() + word.substring(1);
  }).join(seprator);
  return newProductName;
}

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

export const formatDate = (dateString) => {
  const date = new Date(dateString).toLocaleDateString('en-US', {
      // weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
  });
  return date;
};


