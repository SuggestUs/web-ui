import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

export default function NextButton({ path, state }) {

    const location = useNavigate()
    const goNext = () => {
        location(path, { state: state });
    }
    return (
        <div className='next-button'>
            <Button onClick={goNext} variant='contained' color='success'>Next</Button>
        </div>
    )
}

NextButton.prototype = {
    path: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired,
}
