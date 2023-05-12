import React, { useState, useEffect } from 'react'

function Suggestion() {
  return (
    <div>
      <div className='shadow-xl bg-white mx-6' style={{ height: '18rem' }}>
        <div className='p-1 md:p-12 '></div>
      </div>
      <div className='mx-auto w-4/5 pt-3 border-b-2 border-grey-500 opacity-90' />
      <div
        className='shadow-xl bg-white mx-6 mt-2'
        style={{
          height: '18rem',
        }}
      >
        <div className='p-1 md:p-12 '></div>
      </div>
    </div>
  )
}

export default Suggestion
