import React from 'react'
import { TextField, Grid } from '@mui/material';
import NextButton from '../Navigator/NextButton';
import { Link } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';



export default function ProfessionalDetails() {

    const Shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }

    //  for medical specialization data
    const medical_specialization = [
        { feild: 'cardiolog' },
        { feild: 'Dermatology' },
        { feild: 'Endocrinology' },
        { feild: 'Gastroenterology' },
        { feild: 'Hematology' },
        { feild: 'Neurology' },
        { feild: 'Oncology' },
        { feild: 'Pediatrics' },
        { feild: 'Psychiatry' },
        { feild: 'Pulmonology' },
        { feild: 'Pulmonology' },
        { feild: 'Radiology' },
        { feild: 'Surgery' },
    ];

    // for medical specialization
    const [Role, setRole] = useState("None");

    const [dataForProfessionalDetail, setProfessionalData] = useState({
        First_Name: '',
        Last_Name: '',
        Email: '',
        Medical_License_Number: '',
        Medical_specialization: '',
        Hospital_Affiliation: '',
        Clinical_experience: '',

    })

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    const validationForDoctorProffessionalDetails = () => {

    }

    return (
        <div>

            <div className="flex flex-col justify-center items-center h-screen">
                <div className='my-1 font-inter font-bold text-3xl mb-5'> {"Welcome    "}<span className="text-green-500">Doctor !!</span></div>
                <div className=" bg-white p-4 rounded-lg w-4/5 overflow-y-auto shadow-md h-96 " style={Shadow}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <p className='text-center font-inter text-green-400 text-2xl font-semibold'>Enter your details</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="First Name"
                                name="First_Name"
                                variant="outlined"
                                fullWidth
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                name="Last_Name"
                                variant="outlined"
                                fullWidth
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="Email"
                                // value={formData.email}
                                // onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Medical License Number"
                                name="Medical_License_Number"
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
                                    name="Medical_specialization"
                                    onChange={handleChange}
                                >
                                    <MenuItem value='None'>
                                        None
                                    </MenuItem>
                                    {medical_specialization.map((specialization, index) => (
                                        <MenuItem key={index} value={specialization.feild}>
                                            {specialization.feild}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Hospital Affiliation"
                                name="Hospital_Affiliation"
                                // value={formData.address1}
                                // onChange={handleChange}
                                variant="outlined"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Clinical experience"
                                name="Clinical_experience"
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

                    </Grid>
                    <Grid item xs={12} sm={6} className='flex  justify-center items-center space-x-5 pt-5' >
                        <NextButton path='/Auth/PersonalDetails' state={null}></NextButton>
                        <Link to='/Auth'>
                            <Button variant='outlined' color='success'>Back</Button>
                        </Link>
                    </Grid>
                </div>

            </div>
        </div >
    )
}


