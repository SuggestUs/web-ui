import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Login() {

    const [Role, setRole] = React.useState('User');

    const handleChange = (event) => {
        setRole(event.target.value);
    };
    return (
        <div className='flex flex-col my-auto'>
            <div className='my-5'>
                <FormControl fullWidth >
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select

                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={Role}
                        label="Role"
                        onChange={handleChange}
                        
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={'User'}>User</MenuItem>
                        <MenuItem value={'Doctor'}>Doctor</MenuItem>
                    </Select>


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
                </FormControl>
             

            </div>
            <div className='my-auto'>
                <Button variant='contained' color='success'>Log In</Button>

            </div>
        </div>
    )
}
