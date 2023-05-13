import React, { useEffect, useState } from 'react'
import { TextField, Button, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import NextButton from '../Navigator/NextButton';
import { ObjForPersonalDetails, objForProfessionalDetails } from '../factory/factory-for-form'
import { validationForDoctorPesonlDetails , checkValues } from '../datavalidation/validationForData.js'
import AlertBox from '../Alert/Alert';

export default function PersonalDetailsDoctor() {

    const [dataFoePersonalDetails, setPersonalData] = useState(ObjForPersonalDetails);
    const [alert, setAlert] = useState({
        display: false,
        severityType: '',
        message: ''
    })
     
    const navigate = useNavigate() 
    const Shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }
    
    

    const handleChangeInPerosnalDeata = (event)=>{
        setPersonalData({
            ...dataFoePersonalDetails,
            [event.target.name] : event.target.value
        })

        ObjForPersonalDetails[event.target.name] = event.target.value
    }

    const isValidPersonalData = () => {
      const validate = validationForDoctorPesonlDetails();
      if (!validate.res) {
          setAlert({
              display: true,
              severityType: 'error',
              message: validate.message 
            })
        }
        if (validate.res) {
          navigate('/Auth/SignInForDoctor')
    }
    }

    useEffect(()=>{
        // const result = checkValues(objForProfessionalDetails)
        // if(!result){
        //    navigate('/Auth/ProfessionalDetails')
        // }
        setPersonalData(ObjForPersonalDetails)
    },[])
    return (
        <div>
            {alert.display && (<AlertBox severity={alert.severityType} message={alert.message} />)}
            <div className="flex flex-col justify-center items-center h-screen">
                <Link to="/Auth/ProfessionalDetails"><ArrowUturnLeftIcon className="h-6 w-6 text-black" />
                </Link>
                <div className='my-1 font-inter font-bold text-3xl mb-5'> {"Welcome    "}<span className="text-green-500">Doctor !!</span></div>
                <div className=" bg-white p-4 rounded-lg w-4/5 overflow-y-auto shadow-md md:h-96 h-[40rem] " style={Shadow}>
                    <Grid container spacing={2} className='flex justify-center items-center space-y-5'>
                        <Grid item xs={12} >
                            <span className='text-center text-green-500 font-semibold'>Personal & Contact Details </span>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Age"
                                name="Age"
                                variant="outlined"
                                fullWidth
                                type='number'
                                onChange={handleChangeInPerosnalDeata}
                                value={ObjForPersonalDetails.Age}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Heighest Education"
                                name="Heighest_Education"
                                variant="outlined"
                                fullWidth
                                onChange={handleChangeInPerosnalDeata}
                                value={ObjForPersonalDetails.Heighest_Education}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="College"
                                name="College"
                                variant="outlined"
                                fullWidth
                                onChange={handleChangeInPerosnalDeata}
                                value={ObjForPersonalDetails.College}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Contact No"
                                name="Contact_No"
                                variant="outlined"
                                fullWidth
                                onChange={handleChangeInPerosnalDeata}
                                value={ObjForPersonalDetails.Contact_No}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Hospital/Clinic Contact No"
                                name="Work_Contact_Number"
                                variant="outlined"
                                fullWidth
                                onChange={handleChangeInPerosnalDeata}
                                value={ObjForPersonalDetails.Work_Contact_Number}
                                type="number"
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Hospital Email"
                                name="Hospital_Email"
                                value={ObjForPersonalDetails.Hospital_Email}
                                variant="outlined"
                                onChange={handleChangeInPerosnalDeata}
                                fullWidth
                            />
                        </Grid>


                        <Grid item xs={12} sm={6} className='flex  justify-center items-center' >

                            <Button variant='contained' color='success' onClick={isValidPersonalData}>{'Next'}</Button>
                        </Grid>
                    </Grid>

                </div>

            </div>
        </div>
    )
}
