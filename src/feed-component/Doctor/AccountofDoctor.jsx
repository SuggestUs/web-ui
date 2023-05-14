import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CallIcon from '@mui/icons-material/Call'
import SchoolIcon from '@mui/icons-material/School'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined'
import AddModeratorIcon from '@mui/icons-material/AddModerator'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
export default function AccountofDoctor() {
  const params = useParams(null)
  const [initialLoading, setInitialLoading] = useState(false)
  const [data, setData] = useState()

  useEffect(() => {
    // getData()
  }, [])

  const getData = async () => {
    // setInitialLoading(true)
    let url = ''
    const res = await fetchData()
  }

  const copyText = async (e, type) => {
    let itemToCopy
    if (type === 'phone') {
      itemToCopy = '+91 234567890'
    } else if (type === 'email') {
      itemToCopy = 'abc@gmail.com'
    }
    await navigator.clipboard.writeText(itemToCopy)
  }
  return (
    <div>
      {!initialLoading ? (
        <div className='rounded-lg mt-10 shadow-lg bg-white mx-6 font-inter'>
          <div className='p-1 md:p-12 text-left'>
            <div
              className='block border-4 border-white rounded-full mx-auto -mt-16 h-24 w-24 bg-cover bg-center md:h-32 md:w-32 md:-mt-32'
              style={{
                backgroundImage: `url()`,
              }}
            />
            <div className=''>
              {' '}
              <h1 className='text-3xl font-bold pt-8 text-gray-900'>Dr. ABC</h1>
            </div>
            <p className='pt-2 text-sm  text-gray-500'>
              {' '}
              <span className='text-gray-900'>12k</span> Followers{' '}
              <span className='pl-3 text-gray-900'>20</span> Followings
            </p>{' '}
            <p
              className='text-md  text-gray-500 mt-9'
              style={{ cursor: 'pointer' }}
            >
              <div></div>
              <span style={{ display: 'inline-block' }}>
                {' '}
                <CallIcon
                  sx={{
                    color: 'green',
                    backgroundColor: 'white',
                  }}
                />
              </span>
              <span className='ml-2 mb-10'>+91 234567890</span>
              <span
                className='ml-2 mb-10'
                onClick={(e) => copyText(e, 'phone')}
              >
                <ContentCopyIcon />
              </span>
              <span style={{ display: 'inline-block', marginLeft: '5%' }}>
                {' '}
                <MarkEmailUnreadOutlinedIcon
                  sx={{
                    color: 'green',
                    backgroundColor: 'white',
                  }}
                />
              </span>
              <span className='ml-2 mb-10'>abc@gmail.com</span>
              <span
                className='ml-2 mb-10'
                onClick={(e) => copyText(e, 'email')}
              >
                <ContentCopyIcon />
              </span>
            </p>
            <p className='pt-2 text-md text-gray-900 mt-9 '>
              <span style={{ display: 'inline-block' }}>
                {' '}
                <AddModeratorIcon
                  sx={{
                    color: 'green',
                    backgroundColor: 'white',
                  }}
                />
              </span>
              <span className='ml-5 mb-5' style={{ marginBottom: '10%' }}>
                LICENSE ID: 1234567890
              </span>
            </p>
            <p className='pt-2 text-md text-gray-900 mt-9 '>
              <span style={{ display: 'inline-block' }}>
                {' '}
                <LocalHospitalIcon
                  sx={{
                    color: 'green',
                    backgroundColor: 'white',
                  }}
                />
              </span>
              <span className='ml-5 mb-5' style={{ marginBottom: '10%' }}>
                Went to <span className='font-bold'>ABC hospital</span>
              </span>
            </p>
            <p className='pt-2 text-md text-gray-900 mt-1 '>
              <span style={{ display: 'inline-block' }}>
                {' '}
                <SchoolIcon
                  sx={{
                    color: 'green',
                    backgroundColor: 'white',
                  }}
                />
              </span>
              <span className='ml-5 mb-5' style={{ marginBottom: '10%' }}>
                Specialized in{' '}
                <span className='font-bold'>Medical Specialization</span>
              </span>
            </p>
            <p className='pt-2 text-md text-gray-900 mt-1 '>
              <span style={{ display: 'inline-block' }}>
                {' '}
                <SchoolIcon
                  sx={{
                    color: 'green',
                    backgroundColor: 'white',
                  }}
                />
              </span>
              <span className='ml-5 mb-5' style={{ marginBottom: '10%' }}>
                Went to <span className='font-bold'>ABC college</span>
              </span>
            </p>
          </div>
          <div className='mx-auto w-4/5 pt-3 border-b-2 border-grey-100 opacity-25' />
        </div>
      ) : (
        <>loading</>
      )}
    </div>
  )
}
