import React, { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import SignInForUser from './SignInForUser';
import {USER , DOCTOR} from '../../src/Role/UserRole.js'

export default function SignIn() {

    const history = useNavigate();
    const [Role, setRole] = React.useState('Doctor');

    const handleChangeInRole = (event) => {
        setRole(event.target.value);
        if(Role == 'Doctor'){
            DOCTOR = true
            USER  = false 
        }else{
            USER = true
            DOCTOR = false
        }
    };

    if (Role === 'Doctor') {
        history('/Auth/SignInForDoctor')
    }

    useEffect(()=>{
        if(Role == 'Doctor'){
            DOCTOR = true
            USER  = false 
        }
        if(Role == 'User'){
            USER = true
            DOCTOR = false
        }
    }, [])
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
                        defaultValue='Doctor'

                    >
                        <MenuItem value={'Doctor'}>Doctor</MenuItem>
                        <MenuItem value={'User'}>User</MenuItem>
                    </Select>
                </FormControl>
            </div>

            {
                Role === 'User' && (
                    <SignInForUser />
                )
            }
        </div>
    )
}
