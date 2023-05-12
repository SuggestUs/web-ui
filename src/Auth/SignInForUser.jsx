import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {validationForUserSignIn} from '../datavalidation/validationForData.js'

export default function SignInForUser() {
  
  const [dataForUserSignIn , setUserSignInData] = useState({
     First_Name : '',
     Last_Name : '',
     Email : '',
     Password : '',
    })

  const handleSignInForUser = ()=>{
      let validate = validationForUserSignIn(dataForUserSignIn)
      if(validate){
        console.log('dataForUserSignIn', dataForUserSignIn)
         alert("Data is all set")
      }
  } 

  const handleSignInData = (event)=>{
    setUserSignInData({
      ...dataForUserSignIn , 
      [event.target.name] : event.target.value
    })
  }
  return (
    <div className='User-from flex flex-col'>
      <div className='text-center'>
        <FormControl fullWidth className='my-5'>
          <TextField
            className='my-5'
            label="First Name"
            type='First Name'
            name='First_Name'
            onChange={(e)=>handleSignInData(e)}
            style={{
              margin: '10px 0px'
            }}
          />
          <TextField
            className='my-5'
            label="Last Name"
            type='Last Name'
            name='Last_Name'
            onChange={(e)=>handleSignInData(e)}
            style={{
              margin: '10px 0px'
            }}
          />
          <TextField
            className='my-5'
            label="Email"
            type='email'
            name='Email'
            onChange={(event)=>handleSignInData(event)}
            style={{
              margin: '10px 0px'
            }}
          />
          <TextField
            className='my-5'
            label="Password"
            type='password'
            name='Password'
            onChange={(e)=>handleSignInData(e)}
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
        <Button variant='contained' color='success' onClick={handleSignInForUser}>Sign In</Button>
      </div>
    </div>
  )
}
