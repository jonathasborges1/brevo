import React from 'react';

import { OutlinedTextFieldProps, TextField } from '@mui/material';

interface TextFieldCustomProps extends Omit<OutlinedTextFieldProps, 'variant'>  {}

const TextFieldCustom: React.FC<TextFieldCustomProps> = ({  ...props }) => {

   return (
      <TextField {...props}
         id="outlined-basic" 
         variant="outlined" 
         size='small'
         sx={{
            label: {
               paddingTop:"0.4rem",
               fontSize: {xs:"1rem", sm:"1.2rem", md:"1.4rem", lg:"1.2rem", xl:"1.8rem"},
            },
            fieldset:{
               borderRadius:"0.8rem",
            }
         }}
         fullWidth
      />
   )
}

export default TextFieldCustom;
