import React, { useEffect, useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {validationForUserSignIn} from '../datavalidation/validationForData.js'
import {objForUserSignInData} from '../factory/factory-for-form.js'
import AlertBox from '../Alert/Alert.jsx';
import { signInForUserInDataBase } from '../server-script/dataStorageForUser.js';

export default function SignInForUser() {
  
  const [dataForUserSignIn , setUserSignInData] = useState(objForUserSignInData)
    
  const [alert, setAlert] = useState({
      display: false,
      severityType: '',
      message: ''
  })

  const handleSignInForUser = ()=>{
      let validate = validationForUserSignIn(objForUserSignInData);
      console.log("Chck" , validate)
      if(validate.res){
         setAlert({
          display : validate.res,
          severityType : 'error',
          message : validate.message
         })
      }
      else{
        setAlert({
          display : false,
          severityType : 'error',
          message : ''
         })
         
        //  Firebase things 
        signInForUserInDataBase()
      }
  } 

  const handleSignInData = (event)=>{
    setUserSignInData({
      ...dataForUserSignIn , 
      [event.target.name] : event.target.value
    })
    objForUserSignInData[event.target.name] = event.target.value
  }

  useEffect(()=>{
    setUserSignInData(objForUserSignInData)
  }, [])
  return (
    <div className='User-from flex flex-col'>
      <div className='alert-box absolute top-0 z-10 left-1 w-1/3'>
        {alert.display && (<AlertBox severity={alert.severityType} message={alert.message} />)}
      </div>
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
            value={objForUserSignInData.First_Name}
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
            value={objForUserSignInData.Last_Name}
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
            value={objForUserSignInData.Email}
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
            value={objForUserSignInData.Password}
          />
          <TextField
            className='my-5'
            label="Confirm Password"
            name="Confirm_Password"
            type='password'
            style={{
              margin: '10px 0px'
            }}
            onChange={(e)=>handleSignInData(e)}
          />
        </FormControl>
      </div>
      <div className='my-auto'>
        <Button variant='contained' color='success' onClick={handleSignInForUser}>Sign In</Button>
      </div>
    </div>
  )
}
