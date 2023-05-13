import React, { useEffect } from 'react'
import { TextField, Grid, Button ,FormControl} from '@mui/material';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { validatonForDoctorSignIn , checkValues} from '../datavalidation/validationForData'
import {ObjForPersonalDetails, SignInDataForDoctor , objForProfessionalDetails} from '../factory/factory-for-form';
import AlertBox from '../Alert/Alert';
import { signInForDoctorInDataBase } from '../server-script/dataStorageForDoctor';

export default function SignInForDoctor() {


    const navigate = useNavigate()

    const Shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }

    const [dataForProfessionalDetail, setProfessionalData] = useState(SignInDataForDoctor)
    const [alert, setAlert] = useState({
        display: false,
        severityType: '',
        message: ''
    })

    const handleChangeInSignForDoctor= (event)=>{
      setProfessionalData({
        ...dataForProfessionalDetail,
        [event.target.name] : event.target.value
      })
      SignInDataForDoctor[event.target.name] = event.target.value
    }

    const isSignIn = () => {
        const validate = validatonForDoctorSignIn()
        if (validate.res) {
            setAlert({
                display: true,
                severityType: 'error',
                message: validate.message 
            })
          }
        if(!validate.res){
            signInForDoctorInDataBase();
            setAlert({
                display: false,
                severityType: 'error',
                message: '' 
            })


            // success ? navigate('/Dashbord') : setAlert({
            //     display: true,
            //     severityType: 'error',
            //     message: 'Error during Data Uploading' 
            // })
            
        }
    }
     
    useEffect(()=>{
        const result = checkValues(ObjForPersonalDetails) 
        console.log('result',result)
        if(result.length > 0) {
            navigate('/Auth/PersonalDetails')
        }
        if(!SignInDataForDoctor.Email){
            SignInDataForDoctor.Email = objForProfessionalDetails.Email
        }
        setProfessionalData(SignInDataForDoctor)    

    },[])
    return (
        <div>
          {alert.display && (<AlertBox severity={alert.severityType} message={alert.message} />)}
            <div className="flex flex-col justify-center items-center h-screen">
                <Link to="/Auth/PersonalDetails"><ArrowUturnLeftIcon className="h-6 w-6 text-black" />
                </Link>
                <div className='my-1 font-inter font-bold text-3xl mb-5'> {"Welcome    "}<span className="text-green-500">Doctor !!</span></div>
                <div className=" bg-white p-4 rounded-lg w-1/2 overflow-y-auto shadow-md h-96 " style={Shadow}>
                    
                    <div className='User-from flex flex-col'>
                        <div className='text-center'>
                            <FormControl fullWidth className='my-5'>
                                
                                <TextField
                                    className='my-5'
                                    label="Email"
                                    name="Email"
                                    type='email'
                                    style={{
                                        margin: '10px 0px'
                                    }}
                                    value={SignInDataForDoctor.Email}
                                    onChange={handleChangeInSignForDoctor}
                                    helperText='This email is concider as your login Id'
                                />
                                <TextField
                                    className='my-5'
                                    label="Password"
                                    name="Password"
                                    type='password'
                                    style={{
                                        margin: '10px 0px'
                                    }}
                                    value={SignInDataForDoctor.Password}
                                    onChange={handleChangeInSignForDoctor}
                                />
                                <TextField
                                    className='my-5'
                                    label="Confirm Password"
                                    name="Confirm_Password"
                                    type='password'
                                    style={{
                                        margin: '10px 0px'
                                    }}

                                    onChange={handleChangeInSignForDoctor}
                                />
                            </FormControl>
                        </div>
                        <div className='my-auto'>
                            <Button variant='contained' color='success' onClick={isSignIn}>Sign In</Button>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}


