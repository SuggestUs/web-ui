import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Avatar from '@mui/material/Avatar'
import { useNavigate, Link } from 'react-router-dom'
// icons
import DynamicFeedOutlinedIcon from '@mui/icons-material/DynamicFeedOutlined'
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined'
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined'
import HomeIcon from '@mui/icons-material/Home'
// files
import AccountofDoctor from './AccountofDoctor'
import CommunityForDoctor from './CommunityForDoctor'
import RequestForDoctors from './RequestForDoctors'
import FeedForDoctor from './FeedForDoctor'
import Cat from '/favicon.avif'

function TabPanel(props) {
  const { children, value, index, ...other } = props
  return (
    <div
      role='tabpanel'
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
  )
}
const Fontcolor = {
  color: 'black',
}
const Shadow = {
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}
export default function DashBordForDoctor() {
  const navigate = useNavigate()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
     setValue(newValue)
  }
  
  useEffect(()=>{
    const tabName = (value == 0) ? 'Home' : (value == 1) ? 'Community' : (value == 2) ? 'Request' : 'Account' 
    navigate(`/Dashbord/${tabName}`)
  } , [value])


  return (
    <div className='mx-auto flex flex-row justify-center md:w-4/5 h-screen '>
      <div className='justify-start md:w-[70%] w-full h-screen  overflow-hidden'>
        <Box sx={{ width: '100%' }}>
          <Box
            sx={{ borderBottom: 1, borderColor: 'divider' }}
            className='flex flex-row justify-center '
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
              className='text-center'
              TabIndicatorProps={{ style: { backgroundColor: 'green' } }}
            >
              <Tooltip title='Home'>
                <Tab
                  icon={<HomeIcon />}
                  style={Fontcolor}
                />
              </Tooltip>
              <Tooltip title='Community'>
                <Tab
                  icon={<PeopleOutlinedIcon />}
                  style={Fontcolor}
  
                />
              </Tooltip>
              <Tooltip title='Thought'>
                <Tab
                  icon={<DynamicFeedOutlinedIcon />}
                  style={Fontcolor}

                />
              </Tooltip>
              <Tooltip title='Request'>
                <Tab
                  icon={<MarkEmailUnreadOutlinedIcon />}
                  style={Fontcolor}

                />
              </Tooltip>
              <Tooltip title='Account'>
                <Tab
                  icon={<Avatar alt='Remy Sharp' src={Cat} />}
                  style={Fontcolor}
 
                />
              </Tooltip>
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <FeedForDoctor />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <CommunityForDoctor />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <CommunityForDoctor />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <RequestForDoctors />
          </TabPanel>
          <TabPanel value={value} index={4}>
            <AccountofDoctor />
          </TabPanel>
        </Box>
      </div>
      <div className='justify-end w-[30%] bordermx-2 my-2 hidden md:block border'>
        "Suggestion"
      </div>
    </div>
  )
}
