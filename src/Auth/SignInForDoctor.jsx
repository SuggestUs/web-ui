import React from 'react'
import { TextField, Grid } from '@mui/material';
import NextButton from '../Navigator/NextButton';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';



export default function SignInForDoctor() {

    const Shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }

    //  for medical specialization data
    const medical_specialization = [
        { field: 'cardiolog' },
        { field: 'Dermatology' },
        { field: 'Endocrinology' },
        { field: 'Gastroenterology' },
        { field: 'Hematology' },
        { field: 'Neurology' },
        { field: 'Oncology' },
        { field: 'Pediatrics' },
        { field: 'Psychiatry' },
        { field: 'Pulmonology' },
        { field: 'Pulmonology' },
        { field: 'Radiology' },
        { field: 'Surgery' },
    ];

    // for medical specialization
    const [Role, setRole] = useState("None");

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <div>

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
                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-helper-label">Medical specialization</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={Role}
                                    label="Medical specialization"
                                    onChange={handleChange}
                                >
                                    <MenuItem value='None'>
                                        None
                                    </MenuItem>
                                    {medical_specialization.map((specialization, index) => (
                                        <MenuItem key={index} value={specialization.field}>
                                            {specialization.field}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
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
                        <Grid item xs={12} sm={6} className='flex  justify-center items-center' >
                            <NextButton path='/Auth/SignInForDoctor/PersonalDetails' state={null}></NextButton>
                        </Grid>
                    </Grid>

                </div>

            </div>
        </div>
    )
}


