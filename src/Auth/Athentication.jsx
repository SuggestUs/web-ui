import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Login from './Login';
import SignIn from './SignIn';
import { useLocation } from 'react-router-dom';
import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';

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


export default function Athentication() {


  const location = useLocation()

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

  useEffect(() => {
    //  this function make signIn tab open for user if user navigate back from page which contains doctor's authentication
    // console.log("location.state", location)
    if (location.state !== null) {
      setValue(location.state.authNo);
    }
  }, [])
  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <Link to="/"><ArrowUturnLeftIcon className="h-6 w-6 text-black" />
      </Link>
      <div className='my-10  font-bold  text-3xl '> Welcome to , Suggest<span className="text-green-500">Us</span></div>
      <div className="bg-white p-4 rounded-lg w-1/2 text-center flex flex-row shadow-md" style={Shadow}>
        <div className=' flex justify-start w-1/3  mx-2 border border-green-400 items-center h-96 '>
          <img src="https://github.com/priyankarpal/ProjectsHut/assets/88102392/59e42057-67f8-40a3-8f97-3e5b45b6363c" alt="" />
        </div>
        <div className='justify-end w-2/3 mx-2'>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
                TabIndicatorProps={{ style: { backgroundColor: 'green' } }}>
                <Tab label="Log In " style={Fontcolor} />
                <Tab label="Sign Up" style={Fontcolor} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Login />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <SignIn />
            </TabPanel>
          </Box>
        </div>
      </div>
    </div>
  )
}
