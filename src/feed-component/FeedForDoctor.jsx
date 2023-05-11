import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PhoneIcon from '@mui/icons-material/Phone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';

import { useLocation } from 'react-router-dom';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
export default function FeedForDoctor() {


    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const Fontcolor = {
        color: "black"
    }
    const Shadow = {
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    }

    return (

        <div className='mx-auto flex flex-row justify-center md:w-4/5 h-screen border border-green-800 w-full'>
            <div className='justify-start md:w-[70%] w-full border border-red-300 mx-2 my-2'>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                            TabIndicatorProps={{ style: { backgroundColor: 'green' } }}>
                            <Tab label="Feed" style={Fontcolor} />
                            <Tab label="Account" style={Fontcolor} />
                        </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                        {/* <Login /> */}Login
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {/* <SignIn /> */}SignIn
                    </TabPanel>

                </Box>
            </div>
            <div className='justify-end w-[30%] border border-red-300 mx-2 my-2 hidden md:block'>
                "Suggestion"
            </div>
        </div>
    )
}
