import React , {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Typography, Button, Grid } from '@mui/material';
import { Link , useNavigate } from "react-router-dom";
import BackButton from '../Navigator/BackButton';
import NextButton from '../Navigator/NextButton';


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
    
    if(SignIn){
    }

    return (
        <div>
            <BackButton path='/Auth/SignInForDoctor' state={{ authNo: 1 }}></BackButton>
            <div className="flex flex-col justify-center items-center h-screen">
                <div className='my-1 font-serif'> {"Welcome    "}<span className="text-green-500">Doctor !!</span></div>
                <div className=" bg-white p-4 rounded-lg w-4/5 overflow-y-auto shadow-md h-96 " style={Shadow}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} >
                            <Typography variant="h4" className='text-center text-green-400'>Peronal & Conact Details </Typography>
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
