import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function SignInForUser() {
  return (
    <div className='User-from flex flex-col'>
      <div className='text-center'>
        <FormControl fullWidth className='my-5'>
          <TextField
            className='my-5'
            label="Full Name"
            type='Full Name'
            style={{
              margin: '10px 0px'
            }}
          />
          <TextField
            className='my-5'
            label="Email"
            type='email'
            style={{
              margin: '10px 0px'
            }}
          />
          <TextField
            className='my-5'
            label="Password"
            type='password'
            style={{
              margin: '10px 0px'
            }}
          />
          <TextField
            className='my-5'
            label="Confirm Password"
            type='password'
            style={{
              margin: '10px 0px'
            }}
          />
        </FormControl>
      </div>
      <div className='my-auto'>
        <Button variant='contained' color='success'>Log In</Button>
      </div>
    </div>
  )
}
