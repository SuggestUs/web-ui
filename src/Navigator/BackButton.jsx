import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';
export default function BackButton({path , state}) {
    const location = useNavigate()
    const goBack = () => {
        location(path,{state : state});
    }
    return (
        <div className='back-button fixed top-0 left-0 z-50' >
            <Button onClick={goBack}>Back</Button>
        </div>
    )
}

BackButton.prototype={
   path : PropTypes.string.isRequired,
   state : PropTypes.object.isRequired
}