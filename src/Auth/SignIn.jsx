import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

export default function SignIn() {

    const history = useNavigate();
    const [Role, setRole] = React.useState('');

    const handleChangeInRole = (event) => {
        setRole(event.target.value);
    };
   
    if(Role === 'Doctor'){
        history('/Auth/SignInForDoctor')
    }
    return (
        <div className='flex flex-col'>
            
            <div>
                <FormControl fullWidth >
                    <InputLabel id="Select_Role" > Select Role</InputLabel>
                    <Select

                        labelId="Select_Role"
                        id="Select_Role_ID"
                        value={Role}
                        label="Select Role"
                        onChange={handleChangeInRole}
                       
                    >
                        <MenuItem value={'Doctor'}>Doctor</MenuItem>
                        <MenuItem value={'User'}>User</MenuItem>
                    </Select>
                </FormControl>
            </div>

            {
                Role === 'User' && (
                    <div className='User-from flex flex-col'>
                        <div className='text-center'>
                            <FormControl fullWidth className='my-5'>
                            <TextField
                                    className='my-5'
                                    label="Full Name"
                                    type='Full Name'
                                    style={{
                                        margin: '10px 0px'
                                    }}
                                />
                                <TextField
                                    className='my-5'
                                    label="Email"
                                    type='email'
                                    style={{
                                        margin: '10px 0px'
                                    }}
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
                            <Button variant='contained' color='success'>Log In</Button>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
