import React from 'react'
import { TextField, Typography, Grid } from '@mui/material';
import BackButton from '../Navigator/BackButton';
import NextButton from '../Navigator/NextButton';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

export default function SignInForDoctor() {

    const Shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }
    return (
        <div>

            {/* <BackButton path='/Auth' state={{ authNo: 1 }}></BackButton> */}
            <div className="flex flex-col justify-center items-center h-screen">
                <Link to="/Auth"><ArrowUturnLeftIcon className="h-6 w-6 text-black" />
                </Link>
                <div className='my-1 font-inter font-bold text-3xl mb-5'> {"Welcome    "}<span className="text-green-500">Doctor !!</span></div>
                <div className=" bg-white p-4 rounded-lg w-4/5 overflow-y-auto shadow-md h-96 " style={Shadow}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <p className='text-center font-inter text-green-400 text-2xl font-semibold'>Enter your details</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                name="firstName"
                                variant="outlined"
                                fullWidth
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                name="lastName"
                                variant="outlined"
                                fullWidth
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="email"
                                // value={formData.email}
                                // onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Medical License Number"
                                name="number"
                                variant="outlined"
                                fullWidth
                                //className={classes.input}
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Medical Specialization"
                                name="Medical Specialization"
                                // value={formData.confirmPassword}
                                // onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Hospital Affiliation"
                                name="Hospital Affiliation"
                                // value={formData.address1}
                                // onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Clinical experience"
                                name="Clinical experience"
                                // value={formData.city}
                                // onChange={handleChange}
                                variant="outlined"
                                fullWidth
                                type='number'
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={6} className='flex  justify-center items-center'>
                            <Button onClick={isSignIn} variant='contained' color='success'>Sign In</Button>
                        </Grid> */}
                        <Grid item xs={12} sm={6} className='flex  justify-center items-center'>
                            <NextButton path='/Auth/SignInForDoctor/PersonalDetails' state={null}></NextButton>
                        </Grid>
                    </Grid>

                </div>

            </div>
        </div>
    )
}


