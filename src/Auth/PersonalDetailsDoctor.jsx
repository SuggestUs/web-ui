import React, { useState } from 'react'
import { TextField, Button, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

export default function PersonalDetailsDoctor() {

    const navigate = useNavigate()
    const [SignIn, setSignIn] = useState(false)


    const Shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }


    const isSignIn = () => {
        setSignIn(true)
        navigate('/Feed')
    }
    // console.log('SignIn', SignIn);

    if (SignIn) {
        navigate('/feedForDoctor')
    }

    return (
        <div>
            <div className="flex flex-col justify-center items-center h-screen">
                <Link to="/Auth/SignInForDoctor"><ArrowUturnLeftIcon className="h-6 w-6 text-black" />
                </Link>
                <div className='my-1 font-inter font-bold text-3xl mb-5'> {"Welcome    "}<span className="text-green-500">Doctor !!</span></div>
                <div className=" bg-white p-4 rounded-lg w-4/5 overflow-y-auto shadow-md h-96 " style={Shadow}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <span className='text-center text-green-500 font-semibold'>Personal & Contact Details </span>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Age"
                                name="firstName"
                                variant="outlined"
                                fullWidth
                                type='number'
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Heighest Education"
                                name="Heighest-Education"
                                variant="outlined"
                                fullWidth
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="College"
                                name="College"
                                variant="outlined"
                                fullWidth
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Contact No"
                                name="Contact_No"
                                variant="outlined"
                                fullWidth
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Hospital/Clinic Contact No"
                                name="number"
                                variant="outlined"
                                fullWidth
                                //className={classes.input}
                                type="number"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Hospital Email"
                                name="hos-email"
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
                        <Grid item xs={12} sm={6} className='flex  justify-center items-center'>
                            <Button onClick={isSignIn} variant='contained' color='success'>Sign In</Button>
                        </Grid>
                    </Grid>

                </div>

            </div>
        </div>
    )
}
