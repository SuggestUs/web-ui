import React, { useEffect } from 'react'
import { TextField, Grid, Button } from '@mui/material';
import NextButton from '../Navigator/NextButton';
import { ArrowUturnLeftIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { objForProfessionalDetails } from '../factory/factory-for-form'
import { validationForDoctorProffessionalDetails } from '../datavalidation/validationForData'
import { string } from 'prop-types';
import AlertBox from '../Alert/Alert';


export default function ProfessionalDetails() {

    const Shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }
    const navigate = useNavigate();

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

    const [dataForProfessionalDetail, setProfessionalData] = useState(objForProfessionalDetails)

    const [alert, setAlert] = useState({
        display: false,
        severityType: '',
        message: ''
    })

    const handleChangeForProfessionalData = (event) => {
        setProfessionalData({
            ...dataForProfessionalDetail,
            [event.target.name]: event.target.value
        })

        objForProfessionalDetails[event.target.name] = event.target.value
    }

    const isValidProfessionalData = () => {
        let validat = validationForDoctorProffessionalDetails();
        console.log('validat2' , validat)
        if (!validat.res) {
            setAlert({
                display: true,
                severityType: 'error',
                message: validat.message 
            })
        }
        if (validat.res) {
            navigate('/Auth/PersonalDetails');
        }


    }

    useEffect(() => {
        setProfessionalData(objForProfessionalDetails)
        console.log("Data", objForProfessionalDetails, dataForProfessionalDetail)

    }, [])
    return (
        <div>
            {alert.display && (<AlertBox severity={alert.severityType} message={alert.message} />)}
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
                                name="First_Name"
                                variant="outlined"
                                fullWidth
                                onChange={handleChangeForProfessionalData}
                                value={objForProfessionalDetails.First_Name}
                            //className={classes.input}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Last Name"
                                name="Last_Name"
                                variant="outlined"
                                fullWidth
                                onChange={handleChangeForProfessionalData}
                                value={objForProfessionalDetails.Last_Name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Email"
                                name="Email"
                                value={objForProfessionalDetails.Email}
                                variant="outlined"
                                onChange={handleChangeForProfessionalData}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Medical License Number"
                                name="Medical_License_Number"
                                variant="outlined"
                                fullWidth
                                value={objForProfessionalDetails.Medical_License_Number}
                                onChange={handleChangeForProfessionalData}
                                type="number"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-helper-label">Medical specialization</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={objForProfessionalDetails.Medical_specialization}
                                    label="Medical specialization"
                                    name="Medical_specialization"
                                    onChange={handleChangeForProfessionalData}
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
                                value={objForProfessionalDetails.Hospital_Affiliation}
                                variant="outlined"
                                onChange={handleChangeForProfessionalData}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Clinical experience"
                                name="Clinical_experience"
                                value={objForProfessionalDetails.Clinical_experience}
                                onChange={handleChangeForProfessionalData}
                                variant="outlined"
                                fullWidth
                                type='number'
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} className='flex  justify-center items-center' >
                            <Button variant='contained' color='success' onClick={isValidProfessionalData}>{'Next'}</Button>
                        </Grid>
                    </Grid>

                </div>

            </div>
        </div >
    )
}


