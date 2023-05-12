import React from 'react'
import { TextField, Grid, Button ,FormControl} from '@mui/material';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { validationForDoctorProffessionalDetails } from '../datavalidation/validationForData'


export default function SignInForDoctor() {


    const navigate = useNavigate()

    const Shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }

    const [dataForProfessionalDetail, setProfessionalData] = useState({
        Email: '',
        Password: ''
    })


    const validationForDoctorProffessionalDetails = () => {

    }

    const isSignIn = () => {
        navigate('/Dashbord')
    }

    return (
        <div>

            <div className="flex flex-col justify-center items-center h-screen">
                <Link to="/Auth"><ArrowUturnLeftIcon className="h-6 w-6 text-black" />
                </Link>
                <div className='my-1 font-inter font-bold text-3xl mb-5'> {"Welcome    "}<span className="text-green-500">Doctor !!</span></div>
                <div className=" bg-white p-4 rounded-lg w-1/2 overflow-y-auto shadow-md h-96 " style={Shadow}>
                    {/* <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <p className='text-center font-inter text-green-400 text-2xl font-semibold'>Enter your details</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="Email"
                                variant="outlined"
                                fullWidth
                                helperText="THIS EMAIL IS CONCIDER AS YOUR LOGIN ID"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Password"
                                name="Password"
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Confirm Password"
                                name="Confirm_Password"
                                variant="outlined"
                                fullWidth
                                helperText="Make sure your password match as above one"
                            />
                        </Grid>


                        <Grid item xs={12} sm={6} className='flex  justify-center items-center'>
                            <Button onClick={isSignIn} variant='contained' color='success'>Sign In</Button>
                        </Grid>

                    </Grid> */}
                    <div className='User-from flex flex-col'>
                        <div className='text-center'>
                            <FormControl fullWidth className='my-5'>
                                
                                <TextField
                                    className='my-5'
                                    label="Email"
                                    type='email'
                                    style={{
                                        margin: '10px 0px'
                                    }}
                                    helperText='This email is concider as your login Id'
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
                            <Button variant='contained' color='success' onClick={isSignIn}>Sign In</Button>
                        </div>
                    </div>

                </div>

            </div>
        </div >
    )
}


