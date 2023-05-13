import React, { useEffect } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
import SignInForUser from './SignInForUser';

export default function SignIn() {

    const navigate = useNavigate();
    const [Role, setRole] = React.useState('User');

    const handleChangeInRole = (event) => {
        localStorage.setItem("userType" , event.target.value);
        setRole(event.target.value);
    };

    if (Role === 'Doctor') {
        navigate('/Auth/ProfessionalDetails')
    }

    useEffect(()=>{

        localStorage.setItem("userType" , Role);

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
                        defaultValue='User'
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
